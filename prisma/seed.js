import bcrypt from "bcryptjs";
import cuid from "cuid";
import { faker } from "@faker-js/faker";

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  Array.from({ length: 10 }).map(async () => {
    const userEmail = faker.internet.email();
    const alice = await prisma.user.upsert({
      where: { email: userEmail },
      update: {},
      create: {
        id: cuid(),
        name: faker.person.fullName(),
        email: userEmail,
        password: await bcrypt.hash(faker.internet.password(), 10),
        updated_at: faker.date.recent(),
      },
    });
    console.log({ alice });

    return alice;
  });
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
