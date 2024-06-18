// Icons
import { PlusCircle } from "lucide-react";

// shadcn
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { Button } from '@/components/ui/button'


import { Input } from '@/components/ui/input';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form"

import { useForm } from 'react-hook-form'

import { string, z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

// Selecionar data
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"

// Schema para validação
const FormSchema = z.object({
    titulo: z.string({ message: "Preencha algo" }),
    descricao: z.string(),
    data: z.string({ message: "Preencha algo" })
})

interface DBi {
    titulo: string,
    descricao: string,
    data: string
}

type BDprops = {
    BD: any,
    setBd: any,
    date: any,
    setDate: any
}

export function NewEvent({ BD, setBd, date, setDate }: BDprops) {


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })



    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)

        const newEvent: DBi = {
            titulo: "Reunião geral MKT",
            descricao: "14:50 PM - Presencial",
            data: "today.toLocaleDateString()"
        }

        setBd([...BD, newEvent])

        console.log(BD)

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'default'} className='flex items-center justify-center text-sm bg-azul gap-2 text-branco hover:bg-[#0849C2]'>
                    <PlusCircle className='w-5' />
                    <p>Adicionar evento</p>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar um novo evento</DialogTitle>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>
                                <FormField
                                    control={form.control}
                                    name="titulo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type='text' placeholder="Titulo (Reunião MKT)" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="descricao"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type='text' placeholder="Decrição (14:20 PM - Presencial)" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="data"
                                    render={({ field }) => (
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button variant={"outline"} className="flex justify-start text-start">
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                                                </Button>
                                            </PopoverTrigger>
                                            <PopoverContent className="w-auto p-0">
                                                <Calendar
                                                    mode="single"
                                                    selected={date}
                                                    onSelect={setDate}
                                                    initialFocus
                                                    {...field}
                                                />
                                            </PopoverContent>
                                        </Popover>
                                    )}
                                />

                                {/* <DialogClose asChild> */}

                                <Button type="submit">
                                    Adicionar
                                </Button>
                                {/* </DialogClose> */}
                            </form>
                        </Form>



                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}