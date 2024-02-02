"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";

export default function JournlPage() {
  const [journals, setJournals] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getJournalEntries();
  }, []);

  const getJournalEntries = async () => {
    try {
      setLoading(true);
      await axios.get("/api/journal").then((response) => {
        setJournals(response.data.data);
      });
      setLoading(false);
    } catch (error) {
      console.error("Error fetching journal entries:", error);
    }
  };

  return (
    <div className="max-w-5xl mx-auto my-8 p-4 bg-base-200 rounded-lg shadow-lg gap-4">
      <h1 className="text-3xl font-bold mb-4">Journal</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {loading ? (
          "Loading"
        ) : journals.length === 0 ? (
          <div className="border border-neutral p-4 rounded-lg mt-4 bg-neutral text-neutral-content">
            No entries found
          </div>
        ) : (
          journals.map((entry) => (
            <div
              key={entry._id}
              className="border border-neutral p-4 rounded-lg mt-4 bg-neutral text-neutral-content"
            >
              <Link className="flex flex-col" href={`/journal/${entry._id}`}>
                <span className="link-hover text-2xl font-bold mb-2">
                  {entry.title}
                </span>
                <span>{format(parseISO(entry.date), "MM/dd/yyyy")}</span>
                <span>{entry.content.substring(0, 50)}</span>
              </Link>
            </div>
          ))
        )}
      </div>
      <div className="flex justify-center">

      <button className="btn btn-primary text-lg m-4">
        <Link href="/journal/create">Create New Entry</Link>
      </button>
      </div>
    </div>
  );
}
