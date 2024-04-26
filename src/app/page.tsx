import Image from 'next/image';
import BackgroundTop from '../assets/bg/background-top.svg';
import Logo from '../assets/logo.svg';
import MainScreen from '../assets/main-screen.svg';

export default function Home() {
  return (
    <>
      <div className="absolute -z-10 w-[1920px]">
        <Image src={BackgroundTop} alt="Background" />
      </div>
      <main className="flex min-h-screen flex-col items-center px-36 py-9">
        {/* Default header */}
        <header></header>

        {/* Responsive header */}
        <header>
          <div>
            <Image src={Logo} alt="Logo" width={100} />
          </div>
        </header>
      </main>
    </>
  );
}
