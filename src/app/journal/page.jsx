"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function JournlPage() {
  const router = useRouter();
  const [data, setData] = useState([]);

  const getJournalEntries = async () => {
    try {
      const res = await axios.get("/api/journals/getEntries");
      setData(res.data.data);
    } catch (error) {
      console.error("Error fetching journal entries:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Journals</h1>
      <div className="flex flex-col gap-4">
        <button className="btn btn-primary text-lg">
          <Link href="/journal/create">
            Create Journal Entry
          </Link>
        </button>
        <button
          onClick={getJournalEntries}
          className="btn btn-secondary text-lg"
        >
          Get Journal Entries
        </button>
      </div>
      <div className="flex flex-col">
        {data.length === 0
          ? null
          : data.map((entry) => (
              <div
                key={entry._id}
                className="border border-gray-300 p-4 rounded-lg"
              >
                <Link
                  className="text-blue-500 hover:underline"
                  href={`/journal/${entry._id}`}
                  passHref
                >
                  {entry.title}
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
