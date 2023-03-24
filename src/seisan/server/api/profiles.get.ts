import { PrismaClient } from '@prisma/client'
export default defineEventHandler(async () => {
  const prisma = new PrismaClient()
  const profile = await prisma.profile.findMany()
  return profile
})
