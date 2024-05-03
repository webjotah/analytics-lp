import Image from 'next/image';
import HeroMobile from '../assets/hero/main-screen-small.svg';

export default function HeroSection() {
  return (
    <>
      <div className="w-full flex flex-col items-center mt-4">
        <Image src={HeroMobile} alt="heroMobileImage" className="w-full" />
        <div className="flex flex-col items-center mb-10 gap-5">
          <h1 className="text-zinc-100 text-4xl w-[93%] font-bold leading-tight">
            Monitor your business on real-time dashboard
          </h1>
          <p className="w-[93%] text-secondary text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
            nisi aliquet <br />
            volutpat pellentesque volutpat est.{' '}
          </p>
        </div>
        <button className="w-[93%] py-3 bg-destructive text-zinc-100 rounded-full text-lg font-medium">
          Try for free
        </button>
      </div>
    </>
  );
}
