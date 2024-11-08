'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@radix-ui/react-label'
import React from 'react'
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"



function page() {
    const [date, setDate] = React.useState<Date>()
    const [file, setFile] = React.useState<File | null>()
    const [event, setEvent] = React.useState<string>("")

    function handleUpload(){
        if(event?.length > 0 && date && file){
            console.log('Event:', event)
            console.log('Date:', date)
            console.log('File:', file)
        }

        console.log('Please fill all the fields')

    }


    return (
        <div className=' min-h-screen w-full bg-zinc-950 text-zinc-200 flex justify-center items-center'>
            <div className=' border min-h-[60vh] rounded-lg shadow-md  flex justify-evenly items-center flex-col w-1/4'>
                <h1 className=' text-3xl text-center'>Create New Checkin</h1>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="event">Name of the Event</Label>
                    <Input onChange={(e)=>setEvent(e.target.value)} type="event" id="email" placeholder="Email" />
                </div>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="date">Event Date</Label>
                    <Popover>
                        <PopoverTrigger asChild>
                            <Button
                                variant={"outline"}
                                className={cn(
                                    "w-full justify-start text-left font-normal text-black",
                                    !date && "text-muted-foreground text-black"
                                )}
                            >
                                <CalendarIcon />
                                {date ? format(date, "PPP") : <span>Pick a date</span>}
                            </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                            <Calendar
                                mode="single"
                                selected={date}
                                onSelect={setDate}
                                initialFocus
                            />
                        </PopoverContent>
                    </Popover>
                </div>
                <h1 className=' text-sm'>To upload your participants list, use this format <a className=' font-bold text-blue-500' href="./checkin-sheet.csv" download>CheckIn Sheet</a></h1>
                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="file">CheckIn List</Label>
                    <Input id="file" type="file" onChange={(e)=>setFile(e.target.files && e.target.files[0])} className=' w-full' />
                    </div>

                <Button onClick={handleUpload} className=' bg-white text-zinc-800 max-w-sm w-full'>Create</Button>
            </div>
        </div>
    )
}

export default page
