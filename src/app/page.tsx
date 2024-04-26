import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import BackgroundTop from '../assets/bg/background-top.svg';
import Logo from '../assets/logo.svg';
import MainScreen from '../assets/main-screen.svg';
import Hero from '../components/hero';

export default function Home() {
  return (
    <>
      <div className="absolute -z-10 w-[1920px] lg:w-auto">
        <Image src={BackgroundTop} alt="Background" />
      </div>
      <div className="flex min-h-screen flex-col items-center lg:px-36 lg:py-9 px-6">
        {/* Default header */}
        <header></header>

        {/* Responsive header */}
        <header className="bg-primary lg:hidden shadow-md w-screen px-6 py-4 flex justify-between items-center sticky top-0">
          <div>
            <Image src={Logo} alt="Logo" className="w-36" />
          </div>
          <div className="flex gap-4">
            <button className="text-secondary transition-all duration-150 focus:text-white text-lg">
              Sign In
            </button>
            <Sheet>
              <SheetTrigger asChild>
                <Menu size={32} className="cursor-pointer text-secondary" />
              </SheetTrigger>
              <SheetContent className="w-[20rem] bg-primary border-none text-secondary items-center flex flex-col justify-start">
                <SheetHeader>
                  <SheetTitle className="text-zinc-300">Menu</SheetTitle>
                </SheetHeader>
                <Separator className="bg-secondary" />
                <div className="flex flex-col gap-8 mt-4">
                  <button className="focus:text-zinc-300 transition-all duration-200">
                    Products
                  </button>
                  <button className="focus:text-zinc-300 transition-all duration-200">
                    Pricing
                  </button>
                  <button className="focus:text-zinc-300 transition-all duration-200">
                    FAQ
                  </button>
                  <button className="focus:text-zinc-300 transition-all duration-200">
                    Blog
                  </button>
                </div>
                <button className="py-2 border w-full border-secondary rounded-full mt-6 focus:bg-secondary focus:text-zinc-900 font-medium transition-all duration-150">
                  Sign Up
                </button>
              </SheetContent>
            </Sheet>
          </div>
        </header>
        <div className="w-full">
          <Hero />
        </div>
      </div>
    </>
  );
}
