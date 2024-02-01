"use client";
import Link from "next/link";

export default function Header() {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          Smart Journal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="../weather">Weather</Link>
          </li>
          <li>
            <Link href="../journal">Journal</Link>
          </li>
          <li>
            <Link href="../calendar">Calendar</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center"></div>
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
