"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import router from "next/router";
import { useState } from "react";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = useState("nothing");

  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      router.push("/login");
    } catch (error) {
      console.log(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/me");
    setData(res.data.data._id);
  };
  return (
    <div className="max-w-lg mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Profile</h1>
      <h2>
        {data === "nothing" ? null : (
          <Link
            className="text-secondary hover:underline"
            href={`/profile/${data}`}
          >
            {data}
          </Link>
        )}
      </h2>
      <button
        onClick={logout}
        className="btn btn-error rounded-lg mr-2 text-lg"
      >
        Logout
      </button>
      <button
        onClick={getUserDetails}
        className="btn btn-warning rounded-lg text-lg"
      >
        Details
      </button>
    </div>
  );
}
