"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function JournlPage() {
  const router = useRouter();
  const [data, setData] = useState([]);

  const getJournalEntries = async () => {
    const res = await axios.get("/api/journals/getEntries");
    setData(res.data.data);
  };

  return (
    <div className="flex flex-col justify-start items-start">
      <h1>Journals</h1>
      <Link href="/journal/create">Create Journal Entry</Link>
      <button onClick={getJournalEntries}>Get Journal Entries</button>
      <h2>
        {data.length === 0
          ? "Nothing"
          : data.map((entry) => (
              <div key={entry._id}>
                <Link href={`journal/${entry._id}`}>{entry.title}</Link>
              </div>
            ))}
      </h2>
    </div>
  );
}
