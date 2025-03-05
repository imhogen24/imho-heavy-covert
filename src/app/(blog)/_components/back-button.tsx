'use client'
import { Button } from '@/components/ui/button';
import { ArrowBigLeft, ArrowLeft } from 'lucide-react';
import {useRouter} from 'next/navigation'

const BackButton = () => {
    const router = useRouter();
  return (
    <Button asChild variant={"link"} onClick={()=> router.push("/")} className='cursor-pointer text-muted-foreground'>
        <span className='inline-flex gap-2'><ArrowLeft/> Blog</span>
    </Button>
  )
}

export default BackButton
