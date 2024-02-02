"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
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
        {session ? (
          <>
            <p>{session.user.email}</p>
            <button onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button onClick={() => signIn()}>Sign in</button>
        )}
      </div>
    </div>
  );
}
