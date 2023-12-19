import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="h-3/4 my-auto flex flex-col w-full text-white">
      <h1 className=" text-6xl mx-auto font-bold flex gap-x-2">
        Here is a simpler example of
        <span className="inline-flex text-6xl animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#d8ff3c] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent">
          Next Auth
        </span>
        🔐
      </h1>
      <div className="flex justify-center mt-5 gap-x-3">
        <Link
          href="/register"
          className="inline-flex mt-3 w-max rounded-full h-12 animate-background-shine items-center justify-center  border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Register Page 🪖
        </Link>
        <Link
          href="/login"
          className="inline-flex mt-3 w-max rounded-full h-12 animate-background-shine items-center justify-center  border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Login Page 🪖
        </Link>

        <Link
          href="/protect"
          className="inline-flex mt-3 w-max rounded-full h-12 animate-background-shine items-center justify-center  border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Go to protect Route 🪖
        </Link>
        <Link
          href="/client"
          className="inline-flex mt-3 w-max rounded-full h-12 animate-background-shine items-center justify-center  border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Client side 🪖
        </Link>
      </div>
      {session?.user ? (
        <div className="w-max h-max bg-zinc-900 rounded-xl mx-auto mt-5 p-4 flex-col flex gap-y-3">
          <span>You are logged in, and here is your data:</span>
          {JSON.stringify(session?.user)}
        </div>
      ) : (
        <span>You are not logged in.</span>
      )}
    </div>
  );
}
