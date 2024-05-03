import ContentSection from '@/components/content';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import BackgroundBottom from '../assets/bg/background-bottom.svg';
import BackgroundTop from '../assets/bg/background-top.svg';
import Clock from '../assets/icons/clock.svg';
import Monitor from '../assets/icons/monitor.svg';
import Rocket from '../assets/icons/rocket.svg';
import Logo from '../assets/logo.svg';
import Content1 from '../assets/screen-01.svg';
import Content2 from '../assets/screen-02.svg';
import Content3 from '../assets/screen-03.svg';
import Hero from '../components/hero';

export default function Home() {
  return (
    <>
      <div className="absolute -z-10 w-[1600px] lg:w-auto">
        <Image src={BackgroundTop} alt="Background" />
      </div>
      <div className="flex flex-col items-center lg:px-36 lg:py-9 px-6">
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

        {/* Hero Section */}
        <div>
          <Hero />
        </div>

        {/* Icons Content Section */}
        <div className="w-full flex flex-col gap-10">
          <div className="mt-[30vh] flex flex-col gap-5">
            <h1 className="text-primary font-bold text-3xl">Main Features</h1>
            <p className="text-secondary leading-tight">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam
              vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor
              pulvinar risus pulvinar sit amet. Id vel in nam malesuada.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 grid-cols-1 mb-16">
            <div className="flex gap-8 mb-9 items-start lg:flex-col">
              <Image src={Clock} alt="clock icon" className="w-36" />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl text-primary font-bold">
                  Monitoring 24/7
                </h2>
                <p className="text-secondary leading-tight">
                  Lorem ipsum dolor sit amet, conse ctetur adipis cing elit.
                  Elementum nisi aliquet volutpat.
                </p>
              </div>
            </div>
            <div className="flex gap-8 mb-6 items-start lg:flex-col">
              <Image src={Monitor} alt="monitor icon" className="w-36" />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl text-primary font-bold">
                  Widget System
                </h2>
                <p className="text-secondary leading-tight">
                  Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam.
                  Vitae et, tortor pulvinar risus pulvinar.
                </p>
              </div>
            </div>
            <div className="flex gap-8 mb-6 items-start lg:flex-col">
              <Image src={Rocket} alt="rocket icon" className="w-36" />
              <div className="flex flex-col gap-1">
                <h2 className="text-xl text-primary font-bold">
                  Best Performance
                </h2>
                <p className="text-secondary leading-tight">
                  Lorem ipsum dolor sit amet, consectetur adipis cing elit.
                  Elementum nisi aliquet volutpat.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col gap-14">
          <ContentSection
            title="Automated Reports & Widget Alerts"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet."
            image={Content1}
          />
          <ContentSection
            title="Fully customizable to address your needs"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet."
            image={Content2}
          />
          <ContentSection
            title="Pre-built Dashboard Templates"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum nisi aliquet volutpat pellentesque volutpat est. Sapien in etiam vitae nibh nunc mattis imperdiet sed nullam. Vitae et, tortor pulvinar risus pulvinar sit amet."
            image={Content3}
          />
        </div>

        {/* Pricing Plans */}
        {/*<div className="mt-[30vh]">
          <div className="flex flex-col gap-5">
            <h1 className="text-zinc-100 text-3xl bold">Pricing Plans</h1>
            <p className="text-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
              nisi aliquet volutpat pellentesque volutpat est.{' '}
            </p>
          </div>
           Carrousel 
        </div>
  */}
      </div>
      {/* <div className="absolute bottom-0 -z-10 lg:w-auto w-[1600px]">
        <Image src={BackgroundBottom} alt="Background" />
      </div> */}
    </>
  );
}
