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

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';

// ESCOLHER DATA
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
    descricao: z.string({ message: "Preencha algo" }),
    date: z.date({
        required_error: "Date is required",
        invalid_type_error: "Please select a valid date"
      }),
})

interface DBi {
    titulo: string,
    descricao: string,
    date: any,
}

type BDprops = {
    BD: any,
    setBd: any
}

export function NewEvent({ BD, setBd }: BDprops) {


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    // const navigate = useNavigate();


    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)

        const newLog: DBi = {
            titulo: data.titulo,
            descricao: data.descricao,
            date: data.date.toLocaleDateString()
        }

        setBd([...BD, newLog])

        console.log(BD)

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'default'} className='flex items-center justify-center text-sm bg-azul gap-2 text-branco hover:bg-[#0849C2]'>
                    <PlusCircle className='w-5' />
                    <p>Adicionar um novo</p>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar um novo ponto</DialogTitle>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>


                                <FormField
                                    control={form.control}
                                    name="titulo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type='text' placeholder="Titulo" {...field} />
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
                                                <Input type='text' placeholder="Descrição" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="date"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Popover >
                                                    <PopoverTrigger asChild >
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full justify-start text-left font-normal"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {field.value ? format(field.value, "PPP") : <span>Escolha uma data</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={(date) => field.onChange(date)}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
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