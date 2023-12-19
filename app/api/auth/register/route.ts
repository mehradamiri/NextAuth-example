import prisma from "@/lib/prisma";
import * as bcrypt from "bcrypt";

interface RequestBody {
  username: string;
  password: string;
  name: string;
}

export async function POST(request: Request) {
  const body: RequestBody = await request.json();
  console.log(body);

  const existingUser = await prisma.user.findFirst({
    where: {
      username: body.username,
    },
  });

  if (existingUser) {
    return new Response(
      JSON.stringify({ error: "username is already taken" }),
      {
        status: 409,
      }
    );
  }

  const hashedPassword = await bcrypt.hash(body.password, 10);

  const newUser = await prisma.user.create({
    data: {
      name: body.name,
      username: body.username,
      password: hashedPassword,
    },
  });

  const result = {
    id: newUser.id,
    username: newUser.username,
    createdAt: newUser.createdAt,
    updatedAt: newUser.updatedAt,
  };

  return new Response(JSON.stringify(result), { status: 201 });
}
