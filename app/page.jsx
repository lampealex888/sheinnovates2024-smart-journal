"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   if (Cookies.get("token") !== undefined) {
  //     setIsLoggedIn(true);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  return (
    <main>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/images/calendar.webp"
            className="max-w-sm rounded-lg shadow-2xl"
            height={500}
            width={500}
            alt="Calendar"
          />
          <div className="px-5">
            <h1 className="text-7xl font-bold">Smart Journal</h1>
            <p className="py-6 text-lg max-w-md">
              Automated recurring appointments on the calendar, personalised
              suggestions for journaling prompts, dinner ideas, and events.
              Connect with others to plan meetups, receive reminders, and get
              calendar suggestions.
            </p>
            <Link href="/login" className="btn btn-primary">
              Get Started
            </Link>
          </div>
        </div>
      </div>
      <div className="p-20 flex justify-center text-5xl text-center font-bold bg-accent text-accent-content">
        A revolutionary new way to manage and journal your day.
      </div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-4xl font-bold">
            <h3 className="p-4">Journaling made easy with AI</h3>
            <h3 className="p-4">Never miss a deadline</h3>
            <h3 className="p-4">Stop working extra hours</h3>
          </div>
          <Image
            src="/images/calendar2.webp"
            className="max-w-sm rounded-lg shadow-2xl"
            height={500}
            width={500}
            alt="Calendar"
          />
        </div>
      </div>
    </main>
  );
}
