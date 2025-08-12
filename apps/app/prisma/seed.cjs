const bcrypt = require('bcryptjs');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    console.log('🌱 Seeding database...');

    try {
        const hashedPassword = await bcrypt.hash('password123', 12); // Use a stronger default password

        const user = await prisma.user.upsert({
            where: { email: 'testuser@example.com' },
            update: {},
            create: {
                email: 'testuser@example.com',
                passwordHash: hashedPassword,
            },
        });

        console.log('✅ Test user created:', user.email);

    } catch (error) {
        console.error('❌ Error seeding database:', error);
        throw error;
    }
}

seed()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });