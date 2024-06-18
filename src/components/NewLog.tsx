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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel
} from "@/components/ui/select"

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

// Schema para validação
const FormSchema = z.object({
    tipo: z.string({ message: "Preencha algo" }),
    observacao: z.string().optional()
    ,
})

interface DBi {
    nome: string,
    tipo: string,
    regime: string,
    horario: string,
    key: string,
}

type BDprops = {
    BD: any,
    setBd: any
}

export function NewLog({ BD, setBd }: BDprops) {


    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    // const navigate = useNavigate();

    const getCurrentTimeFormatted = () => {
        const date = new Date();
        return date.toLocaleTimeString('en-US', {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true
        });
    };

    const generateUniqueKey = () => {
        return `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
    };

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)

        const newLog:DBi = {
            nome: "Felipe Pereira dos Santos",
            tipo: data.tipo,
            regime: "Presencial",
            horario: getCurrentTimeFormatted(),
            key: generateUniqueKey(),
        }

        setBd([...BD, newLog])

        console.log(BD)

        // navigate('/registro');
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
                                    name="tipo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-fullv mt-3">
                                                        <SelectValue placeholder="Tipo de ponto" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Tipo de ponto</SelectLabel>
                                                        <SelectItem value="Entrada geral">Entrada geral</SelectItem>
                                                        <SelectItem value="Entrada pausa">Entrada da pausa</SelectItem>
                                                        <SelectItem value="Saida pausa">Saida da pausa</SelectItem>
                                                        <SelectItem value="Entrada almoco">Entrada do almoço</SelectItem>
                                                        <SelectItem value="Saida almoco">Saida do almoço</SelectItem>
                                                        <SelectItem value="Saida geral">Saida geral</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
                                    name="observacao"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type='text' placeholder="Observação" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />


                                <Button type="submit">
                                    Adicionar
                                </Button>
                            </form>
                        </Form>



                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}