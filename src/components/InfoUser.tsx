import { Separator } from "@/components/ui/separator"

export function InfoUser({titulo, info}: any | any) {
    return (
        <div className='w-80'>
            <h1 className='text-neutral-500 text-lg'>{titulo}</h1>
            <p className='text-lg mb-3'>{info}</p>
            <Separator />
        </div>
    )
}