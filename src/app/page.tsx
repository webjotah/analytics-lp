import Image from 'next/image';
import BackgroundTop from '../assets/bg/background-top.svg';
import Logo from '../assets/logo.png';
import MainScreen from '../assets/main-screen.svg';

export default function Home() {
  return (
    <>
      <div className="absolute -z-10">
        <Image src={BackgroundTop} alt="logo" width={1920} />
      </div>
      <main className="flex min-h-screen flex-col items-center justify-between px-36 py-9">
        <header>
          <div className="icon">
            <Image src={Logo} alt="logo" width={140} height={100} />
          </div>
        </header>
      </main>
    </>
  );
}
