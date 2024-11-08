'use server'

import { PrismaClient } from "@prisma/client"

const Prisma = new PrismaClient();

export async function getEventsByUser(email: string) {
    const user = await Prisma.user.findUnique({
        where: {
            email: email
        }
    })
    if(!user) return []
    return Prisma.event.findMany({
        where: {
            userId: user.id
        }
    })
}

export async function checkInParticipant(participantId: string){
    return Prisma.participant.update({
        where: {
            id: participantId
        },
        data: {
            checkedIn: true
        }
    })
}