import { PrismaClient } from '@prisma/client'
export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()

  if (e.context.params) {
    const profile = await prisma.profile.findUnique({
      where: { uid: e.context.params.uid }
    })
    return profile
  }
})
