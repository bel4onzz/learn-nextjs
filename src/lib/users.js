import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const getUsers = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const users = prisma.user.findMany();

  return users;
};
