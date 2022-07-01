import { useRouter } from "next/router";

function ClientProjectsPage() {
  const router = useRouter();

  console.log(router.query);

  function loadProjectHandler() {
    // load data...
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: "max", clientprojectid: "project1" },
    });
    //navigate programatically
    //use .replace() if back button should be omitted//
  }

  return (
    <div>
      <h1> Projects of a Given Client</h1>
      <button onClick={loadProjectHandler}>Load Project 1</button>
    </div>
  );
}

export default ClientProjectsPage;
