"use client";

import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/users/signup", user);
      router.push("/login");
    } catch (error) {
      console.log("Signup failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="max-w-md mx-auto my-10 p-6 bg-base-100 rounded-md shadow-md">
      <h1 className="text-3xl font-bold mb-4">
        {loading ? "Processing" : "Signup"}
      </h1>
      <hr className="mb-4" />
      <label htmlFor="username" className="block mb-2">
        Username
      </label>
      <input
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="Username"
        className="w-full input input-bordered rounded-md mb-2"
      />
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
        onClick={onSignup}
        disabled={buttonDisabled}
        className="w-full font-semibold btn btn-success rounded-md"
      >
        {buttonDisabled ? "Signup" : "Signup"}
      </button>
      <Link href="/login" className="block mt-4 text-sm link-hover link-neutral">
        Visit login page
      </Link>
    </div>
  );
}
