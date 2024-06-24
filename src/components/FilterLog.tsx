// Icons
import { Filter } from "lucide-react";

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
    date: z.date({
        required_error: "Date is required",
        invalid_type_error: "Please select a valid date"
    }),
})

interface DBi {
    dateMark: any,
}

type BDprops = {
    BD: any,
    setDataFilter: any
}

export function FilterLog({ BD, setDataFilter }: BDprops) {


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    // const navigate = useNavigate();


    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)

        const newFilter: DBi = {
            dateMark: data.date
        }

        setDataFilter(newFilter.dateMark)

    }

    var strikeThroughDates = BD.map((item: { momentoMark: any; }) => item.momentoMark);

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={'outline'}>
                    <Filter className='w-5 mr-2' />
                    <p>Filtro</p>
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Filtrar por dia</DialogTitle>
                    <DialogDescription>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-3'>

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
                                                            modifiers={{
                                                                strikeThrough: strikeThroughDates,
                                                            }}
                                                            modifiersClassNames={{
                                                                strikeThrough: "border border-x-azul border-y-azul",
                                                            }}
                                                            mode="single"
                                                            selected={field.value}
                                                            onSelect={(date) => field.onChange(date)}
                                                        
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