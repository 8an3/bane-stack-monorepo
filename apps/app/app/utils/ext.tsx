import { prisma } from '~/modules/libs/prisma';

const eP = prisma.$extends({
  model: {
    user: {
      async all(email) { return await prisma.user.findUnique({ where: { email: email } }) },
    },
  },
  query: {

  }
});

export default eP;