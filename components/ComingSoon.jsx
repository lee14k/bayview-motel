import { League_Spartan } from "next/font/google";
import React from "react";
const spartan = League_Spartan({ subsets: ["latin"] });
import { PhoneIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ComingSoon() {
  return (
    <div
      className={`text-white mx-12 ${spartan.className} flex flex-col justify-center items-center container mx-auto`}
    >
      <p className="text-5xl">BAY VIEW MOTEL</p>
      <h1 className="text-8xl">Website Coming Soon</h1>
      <p className="text-5xl mx-48">
        We are currently making some improvements to our website. Give us a call
        to book your stay!
      </p>
      <Link href="tel:+1 (906) 786-2843">
        <button className="text-4xl text-sky-900 my-2 bg-sky-300 rounded-2xl px-12 py-2 flex justify-center items-center gap-10">
          <PhoneIcon className="h-12 w-12" />
          Book your stay
        </button>
      </Link>
    </div>
  );
}
