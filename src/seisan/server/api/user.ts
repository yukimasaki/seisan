import { PrismaClient, Prisma } from '@prisma/client'

export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()
  const method = e.req.method

  if (method === 'POST') {
    const body = await readBody(e)
    const user = await prisma.user.create({
      data: body
    })
    return user
  }

  if (method === 'GET') {
    const user = await prisma.user.findMany()
    return user
  }

  if (method === 'PUT') {
    const body = await readBody(e)
    const user = await prisma.user.update({
      where: { id: body.targetId },
      data: body.data
    })
    return user
  }

  if (method === 'DELETE') {
    const body = await readBody(e)
    const user = await prisma.user.delete({
      where: { id: body.targetId }
    })
    return user
  }
})
