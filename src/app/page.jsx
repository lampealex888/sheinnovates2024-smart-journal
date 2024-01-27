import Image from "next/image";
import styles from "./globals.css";
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
        <h1 className="text-5xl font-bold" >
          A revolutionary new way to manage and journal your day.
        </h1>
        
      </div>



      <div className="flex block2 ">
        {/* Left side */}
        <div className="bigCalendar">
          <div className="bigCalender">
        <img class ="center"
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

      <div>
        
      </div>



    {/* scroll indicator */}
    <div class="header">
        {/* <h2>Scroll Indicator</h2> */}
        <div class="progress-container">
          <div class="progress-bar" id="myBar"></div>
        </div>
      </div>

      {/* footer */}
      <footer className="footer p-10 text-secondary-content footer">
        <aside>
          <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
          <p className="font-bold">
            Team Smart Journal <br/>She Innovates 2024
          </p> 
        </aside> 

        <aside>
          <p className="font-bold slogan">
          Think Smart, Write Smarter: The Journal Revolution!"
          </p> 
        </aside> 

        <div className="dropdown mb-72 dropdown">
          <div tabIndex={0} role="button" className="btn m-1">
            Theme
            <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn justify-start" aria-label="Default" value="default"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn justify-start" aria-label="Retro" value="retro"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn justify-start" aria-label="Cyberpunk" value="cyberpunk"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn justify-start" aria-label="Valentine" value="valentine"/></li>
            <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn justify-start" aria-label="Aqua" value="aqua"/></li>
          </ul>
        </div>
      </footer>

    </main>
  );
}


