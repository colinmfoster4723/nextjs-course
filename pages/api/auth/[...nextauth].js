import NextAuth from "next-auth";
import Providers from "next-auth/providers";

import { verifyPasssword } from "../../../lib/auth";
import { connectToDB } from "../../../lib/db";

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await connectToDB();
        const usersCollection = await client.db().collection("users");
        const user = await usersCollection.findOne({
          email: credentials.email,
        });
        console.log(user);

        if (!user) {
          client.close();
          throw new Error("No user found!");
        }
        const isValid = await verifyPasssword(
          credentials.password,
          user.password
        );

        if (!isValid) {
          client.close();
          throw new Error("Could not log in");
        }

        client.close();
        return { email: user.email };
      },
    }),
  ],
});

//any errors thrown will automatically return function

//at the end a token is returned using the email, dont include password so that the hashedPassword isn't exposed to the client
