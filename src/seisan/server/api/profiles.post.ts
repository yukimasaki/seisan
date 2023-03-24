import { PrismaClient } from '@prisma/client'
export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()
  const body = await readBody(e)
  const profile = await prisma.profile.create({
    data: body
  })
  return profile
})
