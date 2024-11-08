'use client'
import { getEventsByUser } from '@/server/db'
import { useUser } from '@clerk/nextjs'
import { Event } from '@prisma/client'
import Link from 'next/link'
import React, { useEffect } from 'react'

function page() {
    const [events, setEvents] = React.useState<Event[]>([])
    const { user } = useUser()
    
    async function getCheckIns(){
        const email = user?.primaryEmailAddress?.emailAddress
        console.log()
        if(!email) return
        const res = await getEventsByUser(email)
        setEvents(res)
        console.log(res)
    }

    useEffect(() => {
        getCheckIns()
    }, [user, user?.primaryEmailAddress?.emailAddress])
  return (
    <div className=' bg-zinc-950 h-screen w-full pt-16 text-white'>
      <h1 className=' text-center mt-10 text-6xl font-bold bg-gradient-to-t from-zinc-700 to-zinc-200 text-transparent bg-clip-text'>Your CheckIns</h1>

      <div className=' grid grid-cols-4 mt-20 mx-20 gap-8 '>
        {events.map((e, index) => (    
        <Link href={`/views/${e.id}`} key={index} className=' hover:bg-zinc-900 hover:transition-all duration-300 border w-full h-40 rounded-2xl p-8 flex items-center justify-center font-semibold text-2xl'>
            <h1>{e.name}</h1>
        </Link>
        ))}
      </div>
    </div>
  )
}

export default page
