import path from "path";
//funcs for building paths
import fs from "fs/promises";
//imports fileSystem module from node.js//
//only works on server-side//
//this import is stripped from client-side//
//fs will return promise with fs/promises

import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("(re-)generating...");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  //start at current working directory = root folder = process.cwd()//
  //then specify folder name(s) and file name one by one from cwd

  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  //convert JSON to JS//
  if (!data) {
    return {
      redirect: {
        destination: "/no-data",
      },
    };
  }

  if (data.products.length === 0) {
    return { notFound: true };
  }
  //show 404 as data fetch failed

  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
  };
  //prepares props for component//
  //must always return props:{}
  //this code runs server-side//
}

export default HomePage;
