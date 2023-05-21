import prisma from "@/lib/prisma";

async function getLocation(id: string) {
  "use server";

  const location = await prisma.location.findUnique({
    where: {
      id,
    },
  });

  return location;
}

export default async function LocationById({
  params,
}: {
  params: { id: string };
}) {
  const location = await getLocation(params.id);

  return <main>Location: {JSON.stringify(location)}</main>;
}
