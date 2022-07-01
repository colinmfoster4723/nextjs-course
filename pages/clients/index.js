import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "max", name: "Max" },
    { id: "colin", name: "Colin" },
  ];
  //usually would fetch this data

  return (
    <div>
      <h1>Clients</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
