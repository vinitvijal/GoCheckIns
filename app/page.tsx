import { RainbowButton } from "@/components/ui/rainbow-button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log('Home')
  return (
    <div className=" h-screen w-full relative flex flex-col justify-center items-center gap-20 bg-zinc-950">
      
        <Link href={'/newcheckins'}><RainbowButton className=" py-8 hover:-translate-y-2 transition-all hover:scale-110  text-3xl">Create New CheckIns</RainbowButton></Link>
        <Link href={'/views'}><RainbowButton className=" py-8 hover:-translate-y-2 transition-all hover:scale-110 text-3xl">View CheckIns</RainbowButton></Link>
    </div>
  );
}
