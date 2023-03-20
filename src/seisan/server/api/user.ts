import { PrismaClient, Prisma } from '@prisma/client'

export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()
  const method = e.req.method

  if (method === 'POST') {
    const uid = '123456789'
    const display_name = 'yuki'
    const temp = await prisma.user.create({
      data: { uid, display_name }
    })
    return temp
  }
})
