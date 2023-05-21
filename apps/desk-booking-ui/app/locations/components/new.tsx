import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import { z } from "zod";
import { zfd } from "zod-form-data";

const newLocationDataSchema = zfd.formData({
  name: zfd.text(z.string().min(1).max(255)),
});
type NewLocationData = z.infer<typeof newLocationDataSchema>;

export default function NewLocation() {
  function withValidate(action: (data: NewLocationData) => Promise<void>) {
    return async (formData: FormData) => {
      "use server";

      const validatedData = newLocationDataSchema.safeParse(formData);

      if (!validatedData.success) {
        throw new Error(`Invalid input: ${validatedData.error.message}`);
      }

      return action(validatedData.data);
    };
  }

  async function newLocation(data: NewLocationData): Promise<void> {
    "use server";

    const newLocation = await prisma.location.create({
      data: {
        name: data.name,
      },
    });

    redirect(`/locations/${newLocation.id}`);
  }

  return (
    <form action={withValidate(newLocation)}>
      <input type="text" name="name" placeholder="Location Name"></input>
      <button type="submit">Add location</button>
    </form>
  );
}
