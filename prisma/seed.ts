import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.project.createMany({
    data: [
      {
        title: 'Custom Gutenberg Icon Button Plugin',
        slug: 'icon-button-plugin',
        description: 'Ett anpassat WordPress-block byggt med React och Gutenberg API.',
        tags: ['WordPress', 'React', 'TypeScript', 'SCSS'],
        published: true,
      },
      {
        title: 'Color Bounce',
        slug: 'color-bounce',
        description: '2D fysikbaserat arkadspel utvecklat i Unity 6 för mobila plattformar.',
        tags: ['Unity 6', 'C#', 'Game Development'],
        published: true,
      },
    ],
    skipDuplicates: true,
  });

  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });