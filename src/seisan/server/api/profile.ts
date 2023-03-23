import { PrismaClient, Prisma } from '@prisma/client'

export default defineEventHandler(async (e) => {
  const prisma = new PrismaClient()
  const method = e.req.method

  if (method === 'POST') {
    const body = await readBody(e)
    const profile = await prisma.profile.create({
      data: body
    })
    return profile
  }

  if (method === 'GET') {
    const profile = await prisma.profile.findMany()
    return profile
  }

  if (method === 'PUT') {
    const body = await readBody(e)
    const profile = await prisma.profile.update({
      where: { id: body.targetId },
      data: body.data
    })
    return profile
  }

  if (method === 'DELETE') {
    const body = await readBody(e)
    const profile = await prisma.profile.delete({
      where: { id: body.targetId }
    })
    return profile
  }
})
