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
    regime: z.string({ message: "Preencha algo" }),
    observacao: z.string().optional(),
})

interface DBi {
    nome: string,
    tipo: string,
    regime: string,
    momento: string,
    momentoMark: Date,
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

    const date = new Date()

    // const navigate = useNavigate();

    const getCurrentTimeFormatted = () => {
        const date = new Date();
      
        // Obter a data no formato brasileiro: "dd/mm/yy"
        const formattedDate = date.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: '2-digit'
        });
      
        // Obter o horário no formato en-US (12 horas com AM/PM)
        const formattedTime = date.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: 'numeric',
          hour12: true
        });
      
        // Combinar a data e o horário
        return `${formattedDate} | ${formattedTime}`;
      };

    const generateUniqueKey = () => {
        return `${Math.random().toString(36).substr(2, 9)}-${Date.now()}`;
    };

    function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data)

        const newLog:DBi = {
            nome: "Felipe Pereira dos Santos",
            tipo: data.tipo,
            regime: data.regime,
            momento: getCurrentTimeFormatted(),
            momentoMark: date,
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
                                    name="regime"
                                    render={({ field }) => (
                                        <FormItem>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="w-fullv">
                                                        <SelectValue placeholder="Tipo de ponto" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Tipo de ponto</SelectLabel>
                                                        <SelectItem value="Presencial">Presencial</SelectItem>
                                                        <SelectItem value="Home Office">Home Office</SelectItem>
                                                        <SelectItem value="Saida pausa">Híbrido</SelectItem>
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