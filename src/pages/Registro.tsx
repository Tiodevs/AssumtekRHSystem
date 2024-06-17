// Inport interno
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

// Icons
import { PlusCircle } from "lucide-react";
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
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export function Registro() {

    function handleSubmit() {
        console.log("teste")
    }

    return (
        <div className="flex min-h-screen  p-8">

            <Nav />

            <main className="flex-1 px-8 py-4">
                <Header
                    titulo="Registros"
                    descricao="Registo de pontos da equipe"
                />

                <div className='border-2 p-4 h-auto min-h-96 mt-7 rounded-md'>
                    <div className="flex justify-end gap-3">

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
                                        <form onSubmit={handleSubmit} className='flex flex-col gap-3'>

                                            <Select>
                                                <SelectTrigger className="w-fullv mt-3">
                                                    <SelectValue placeholder="Tipo de ponto" />
                                                </SelectTrigger>
                                                <SelectContent>
                                                    <SelectGroup>
                                                        <SelectLabel>Tipo de ponto</SelectLabel>
                                                        <SelectItem value="entradaGeral">Entrada geral</SelectItem>
                                                        <SelectItem value="entradaPausa">Entrada da pausa</SelectItem>
                                                        <SelectItem value="saidaPausa">Saida da pausa</SelectItem>
                                                        <SelectItem value="entradaAlmoco">Entrada do almoço</SelectItem>
                                                        <SelectItem value="saidaAlmoco">Saida do almoço</SelectItem>
                                                        <SelectItem value="saida geral">Saida geral</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                            <Input placeholder="Email" />
                                            <Button type="submit">
                                                Adcionar
                                            </Button>
                                        </form>



                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>


                    </div>
                    <Table className='mt-3'>
                        
                        <TableHeader>
                            <TableRow>
                                <TableHead>Nome</TableHead>
                                <TableHead>Tipo</TableHead>
                                <TableHead>Regime</TableHead>
                                <TableHead className="text-right">Horario</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell className="font-medium flex items-center gap-3">
                                    <Avatar className='w-8 h-8'>
                                        <AvatarImage src="https://github.com/Tiodevs.png" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>

                                    <p>Felipe Pereira dos Santos</p>
                                </TableCell>
                                <TableCell>Entrada</TableCell>
                                <TableCell>Remoto</TableCell>
                                <TableCell className="text-right">09:27 AM</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </main>
        </div>
    )
}