"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";

export default function JournlPage() {
  const [data, setData] = useState([]);

  const getJournalEntries = async () => {
    try {
      await axios.get("/api/journal").then(function (response) {
        setData(response.data.data);
      });
    } catch (error) {
      console.error("Error fetching journal entries:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg flex flex-col md:flex-row">
      <h1 className="text-3xl font-bold mb-4">Journals</h1>
      <button className="btn btn-primary text-lg">
        <Link href="/journal/create">Create Journal Entry</Link>
      </button>
      <button onClick={getJournalEntries} className="btn btn-secondary text-lg mt-4">
        Get Journal Entries
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data.length === 0
          ? null
          : data.map((entry) => (
              <div
                key={entry._id}
                className="border border-neutral p-4 rounded-lg mt-4"
              >
                <Link
                  className="link link-hover link-info flex flex-col"
                  href={`/journal/${entry._id}`}
                >
                  <span className="text-2xl font-bold mb-2">{entry.title}</span>
                  <span className="text-neutral-content">
                    {format(parseISO(entry.date), "MM/dd/yyyy")}
                  </span>
                  <span>{entry.content.substring(0, 50)}</span>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
}
