import Image from "next/image";
import styles from "./globals.css"; 
import Link from "next/link";

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
            <Link href="/login" className="btn btn-info btn-primary">Log In </Link>
            <Link href="/signup" className="btn btn-info btn-secondary">Sign Up </Link>

          </div>
        </div>
      </div>
    </main>
  );
}
