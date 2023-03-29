import { PrismaClient } from '@prisma/client'
export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()
  const body = await readBody(e)
  console.log(`aaaaaaaaaa`)
  try {
    const payment = await prisma.payment.create({
      data: body
    })
    return payment
  } catch (error) {
    console.log(error)
  }
})
