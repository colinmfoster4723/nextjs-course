import { useRouter } from "next/router";

function PortfolioProjectPage() {
  const router = useRouter();
  //router object, exposes data of URL

  console.log(router.pathname);
  //inffered path//
  console.log(router.query);
  //access to complete value of url, including id//

  // send request to backend to fetch the data
  // corresponding to id

  return (
    <div>
      <h1>Portfolio Project</h1>
    </div>
  );
}

export default PortfolioProjectPage;
