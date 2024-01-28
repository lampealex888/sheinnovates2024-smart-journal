import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="Home_page">
      <div className="everything Home_page">
        <div className="flex">
          {/* Left side */}
          <div className="w-1/2 p-6">
            <div className="max-w-md">
              <h1 className="text-6xl font-bold">Smart Journal</h1>
              <p className="py-6 text-2xl">
                Automated recurring appointments on the calendar, personalised
                suggestions for journaling prompts, dinner ideas, and events.
                Connect with others to plan meetups, receive reminders, and get
                calendar suggestions.
              </p>
              <Link href="/login" className="btn btn-info btn-primary">
                Log In
              </Link>
              <Link href="/signup" className="btn btn-info btn-secondary">
                Sign Up
              </Link>
            </div>
          </div>

          {/* Right side */}
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
          {/* Left side */}
          <div className="bigCalendar">
            <div className="bigCalender">
              <img
                class="center"
                src="https://assets-global.website-files.com/5fcb349058268443b1f5dbdb/6287995cde0a4d34a94beea1_new-image.webp"
                alt="Your Image Alt Text"
                width={900}
                height={900}
              />
            </div>
          </div>

          {/* Right side */}
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

      {/* scroll indicator */}
      <div class="header">
        {/* <h2>Scroll Indicator</h2> */}
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>
      </div>
    </main>
  );
}
