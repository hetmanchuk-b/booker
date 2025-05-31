"use server";

import {z} from "zod";

const CreateUser = z.object({
  title: z.string(),
})

import {db} from "@/lib/db";
import {revalidatePath} from "next/cache";

export async function create(formData: FormData) {
  const {title} = CreateUser.parse({
    title: formData.get('title'),
  });

  await db.user.create({
    title: title,
  });

  // TODO: https://youtu.be/pRybm9lXW2c?si=NLj3I5JJ2IPiHoRk&t=12552

  revalidatePath('/')
}