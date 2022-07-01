import { useRouter } from "next/router";

function SelectedClientProjectPage() {
  const router = useRouter();

  console.log(router.query);
  //access to parentPage data as well//

  return (
    <div>
      <h1> Project Page for a Specific Project for a Selected Client</h1>
    </div>
  );
}

export default SelectedClientProjectPage;

//nested id is accessed after id of client is specified // /client/colin/project1
