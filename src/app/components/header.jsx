"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box"
          >
            <li>
              <Link href="../weather">Weather</Link>
            </li>
            <li>
              <Link href="../chat">Chat</Link>
            </li>
            <li>
              <Link href="../journal">Journal</Link>
            </li>
            <li>
              <Link href="../calendar">Calendar</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className="btn btn-ghost text-xl">
          Smart Journal
        </Link>
      </div>
      <div className="navbar-end">
        <Link href="/profile" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              className="h-5 w-5"
              viewBox="0 0 60.671 60.671"
              fill="currentColor"
              stroke="currentColor"
            >
              <ellipse cx="30.336" cy="12.097" rx="11.997" ry="12.097" />
              <path
                d="M35.64,30.079H25.031c-7.021,0-12.714,5.739-12.714,12.821v17.771h36.037V42.9
			C48.354,35.818,42.661,30.079,35.64,30.079z"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </Link>
      </div>
    </div>
  );
}
