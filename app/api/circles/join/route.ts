import { NextResponse } from 'next/server'
import { auth } from '@/lib/auth'
import { prisma } from '@/lib/prisma'

export async function POST(request: Request) {
  try {
    const session = await auth()
    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { inviteCode } = await request.json()

    if (!inviteCode) {
      return NextResponse.json(
        { error: 'Invite code is required' },
        { status: 400 }
      )
    }

    // Find circle by invite code
    const circle = await prisma.circle.findUnique({
      where: { inviteCode },
      include: {
        members: true,
        _count: {
          select: { members: true },
        },
      },
    })

    if (!circle) {
      return NextResponse.json(
        { error: 'Invalid invite code' },
        { status: 404 }
      )
    }

    // Check if user is already a member
    const existingMember = circle.members.find(
      (m: { userId: string }) => m.userId === session.user.id
    )

    if (existingMember) {
      return NextResponse.json(
        { error: 'You are already a member of this circle' },
        { status: 400 }
      )
    }

    // Check member limit (max 10)
    if (circle._count.members >= 10) {
      return NextResponse.json(
        { error: 'This circle has reached its member limit (10)' },
        { status: 400 }
      )
    }

    // Add user as member
    await prisma.circleMember.create({
      data: {
        circleId: circle.id,
        userId: session.user.id,
        role: 'member',
      },
    })

    return NextResponse.json({
      success: true,
      circle: {
        id: circle.id,
        name: circle.name,
      },
    })
  } catch (error) {
    console.error('Error joining circle:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
