import { getSession } from "next-auth/client";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import AuthForm from "../components/auth/auth-form";

function AuthPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setLoading(false);
      }
    });
  }, [router]);

  if (loading) return <p>Loading...</p>;

  return <AuthForm />;
}

export default AuthPage;
