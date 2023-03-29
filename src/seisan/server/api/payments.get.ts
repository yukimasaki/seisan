import { PrismaClient } from '@prisma/client'
export default defineEventHandler(async () => {
  const prisma = new PrismaClient()
  const payment = await prisma.payment.findMany()
  return payment
})
