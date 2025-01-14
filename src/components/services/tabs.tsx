import { AnimatedBackground } from '@/components/ui/animated-background';
import { SERVICE_ROUTES } from '@/lib/constants';
import { Button } from '../ui/button';
import Link from 'next/link';


export function ServiceRoutes() {
  return (
    <div>
      <AnimatedBackground
        defaultValue='Product'
        className='rounded-lg dark:bg-neutral-800 bg-gray-200'
        transition={{
          ease: 'easeInOut',
          duration: 0.2,
        }}
      >
        {SERVICE_ROUTES.map((item) => {
          return (
            <Button
             asChild
              key={item.idx}
              data-id={item.label}
              type='button'
              variant="ghost"
              aria-label={`${item.label} view`}
              className='transition-transform active:scale-[0.98] w-fit hover:bg-transparent dark:text-white text-gray-700 p-5'
            >
             <Link href={item.href}>{item.label}</Link>
            </Button>
          );
        })}
      </AnimatedBackground>
    </div>
  );
}
