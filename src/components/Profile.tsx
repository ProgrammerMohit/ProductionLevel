"use client";
import { useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";
export function Profile() {
  const router = useRouter();
  const [loading,setLoading] = useState();
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "ZeroKnowledge.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        I'm a Software Engineer at Tata Consultancy Services
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button
          onClick={() => router.push("/signup")}
          className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm cursor-pointer"
        >
           {loading ? (
        <Loader2 className="animate-spin h-5 w-5 mr-2" />
      ) : (
        "Join now"
      )}
        </button>
        <button
          onClick={() => router.push("/signup")}
          className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm cursor-pointer"
        >
          Signup
        </button>
      </div>
    </div>
  );
}
