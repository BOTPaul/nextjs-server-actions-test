import prisma from "@/lib/prisma";

async function listLocations() {
  "use server";

  const locations = await prisma.location.findMany({
    orderBy: {
      name: "desc",
    },
  });

  return locations;
}

export default async function Locations() {
  const locations = await listLocations();

  return (
    <main>
      <h2>Locations</h2>
      <ul key={locations.length}>
        {locations.map((location) => (
          <li key={location.id}>
            <a href={`/locations/${location.id}`}>{location.name}</a>
          </li>
        ))}
      </ul>
      <a href="/locations/new">Add Location</a>
    </main>
  );
}
