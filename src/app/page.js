import Image from "next/image";
import styles from "./globals.css"; 


export default function Home() {
  return (
    <main className="Home_page">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Smart Journal</h1>
            <p className="py-6">
            Automated recurring appointments on the calendar, personalised suggestions for journaling prompts, dinner ideas, and events. Connect with others to plan meet ups, receive reminders, and get calendar suggestions. 
            </p>
            <button className="btn btn-primary">Log In </button>
            <button className="btn btn-secondary">Sign Up </button>

          </div>
        </div>
      </div>
    </main>
  );
}
