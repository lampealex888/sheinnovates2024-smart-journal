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
            <button className="btn btn-primary">Get Started</button>
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
      {/* <div className="Home_page">
        <div className="flex">
          <div className="w-1/2 p-6">
            <div className="max-w-md">
              <h1 className="text-6xl font-bold">Smart Journal</h1>
              <p className="py-6 text-2xl">
                Automated recurring appointments on the calendar, personalised
                suggestions for journaling prompts, dinner ideas, and events.
                Connect with others to plan meetups, receive reminders, and get
                calendar suggestions.
              </p>
            </div>
          </div>

          <div className="w-1/2 mt-4">
            <img
              src="https://assets-global.website-files.com/5fcb349058268443b1f5dbdb/62879b89c39fd2e6b9214d82_int-cal-4-p-1080.webp"
              alt="Your Image Alt Text"
              width={700}
              height={600}
            />
          </div>
        </div>

        <div className="text-6xl font-bold block1 mt">
          <h1 className="text-5xl font-bold">
            A revolutionary new way to manage and journal your day.
          </h1>
        </div>

        <div className="flex block2 ">
          <div className="bigCalendar">
            <div className="bigCalender">
              <img
                className="center"
                src="https://assets-global.website-files.com/5fcb349058268443b1f5dbdb/6287995cde0a4d34a94beea1_new-image.webp"
                alt="Your Image Alt Text"
                width={900}
                height={900}
              />
            </div>
          </div>

          <div className="list text-3xl font-bold">
            <br></br>
            <br></br>
            <h1> Journaling made easy with AI </h1>
            <br></br>

            <h1>Never miss a deadline. </h1>
            <br></br>

            <h1> Stop working extra hours.</h1>
            <br></br>
          </div>
        </div>
      </div>

      <div className="header">
        <div className="progress-container">
          <div className="progress-bar" id="myBar"></div>
        </div>
      </div> */}
    </main>
  );
}
