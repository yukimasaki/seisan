import { PrismaClient } from '@prisma/client'
export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()
  const body = await readBody(e)
  const profile = await prisma.profile.update({
    where: { id: body.targetId },
    data: body.data
  })
  return profile
})
