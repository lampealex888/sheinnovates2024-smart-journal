"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Cookies from "js-cookie";
export default function Login() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onLogin = async () => {
    try {
      setLoading(true);
      Cookies.set('loggedIn', true);
      const response = await axios.post("/api/users/login", user);
      router.push("/");
    } catch (error) {
      console.log("Login failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-base-100 rounded-md shadow-md">
      <h1 className="text-3xl font-semibold mb-4">
        {loading ? "Processing" : "Login"}
      </h1>
      <hr className="mb-4" />

      <label htmlFor="email" className="block mb-2">
        Email
      </label>
      <input
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="Email"
        className="w-full input input-bordered rounded-md mb-2"
      />

      <label htmlFor="password" className="block mb-2">
        Password
      </label>
      <input
        id="password"
        type="password"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="Password"
        className="w-full input input-bordered rounded-md mb-2"
      />

      <button
        onClick={onLogin}
        disabled={buttonDisabled}
        className="w-full font-semibold btn btn-success rounded-md"
      >
        {loading ? "Processing..." : "Login"}
      </button>
      <Link
        href="/signup"
        className="block mt-4 text-sm link-hover link-neutral"
      >
        Visit signup page
      </Link>
    </div>
  );
}
