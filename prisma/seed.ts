import pkg from "@prisma/client";

const { PrismaClient } = pkg;

const prisma = new PrismaClient();

async function main() {

  const warehouse1 = await prisma.warehouse.create({
    data: {
      name: "Bangalore Warehouse",
      location: "Bangalore"
    }
  });

  const warehouse2 = await prisma.warehouse.create({
    data: {
      name: "Hyderabad Warehouse",
      location: "Hyderabad"
    }
  });

  const product1 = await prisma.product.create({
    data: {
      name: "iPhone 15",
      description: "Apple smartphone"
    }
  });

  const product2 = await prisma.product.create({
    data: {
      name: "Samsung S24",
      description: "Samsung smartphone"
    }
  });

  await prisma.inventory.createMany({
    data: [
      {
        productId: product1.id,
        warehouseId: warehouse1.id,
        totalUnits: 10,
        reservedUnits: 0
      },
      {
        productId: product1.id,
        warehouseId: warehouse2.id,
        totalUnits: 5,
        reservedUnits: 0
      },
      {
        productId: product2.id,
        warehouseId: warehouse1.id,
        totalUnits: 7,
        reservedUnits: 0
      }
    ]
  });

  console.log("Seed data added");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });