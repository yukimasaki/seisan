import { PrismaClient } from '@prisma/client'
export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()

  if (e.context.params) {
    const profile = await prisma.profile.findUnique({
      where: { id: parseInt(e.context.params.id) }
    })
    return profile
  }
})
