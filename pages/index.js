import Link from "next/link";
///dont use <a> as link as it want to change HTML page, use Link instead//

function HomePage() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href="portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
}

export default HomePage;
