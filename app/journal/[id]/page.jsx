"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function JournalEntry( ctx ) {
  const [journal, setJournal] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchData = async (journalId) => {
    try {
      setLoading(true);
      await axios
        .get(`/api/journals/${journalId}`)
        .then((response) => {
          setJournal(response.data);
        })
        .catch((error) => {
          console.error("Error fetching journal entry:", error);
        });
      setLoading(false);
    } catch (error) {
      console.log("Entry failed", error.message);
    }
  };

  useEffect(() => {
    fetchData(ctx.params.id);
  }, [ctx.params.id, ]);

  // delete task
  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="max-w-7xl mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-2">{journal.title}</h1>
          {journal.date == null ? null : (
            <p className="text-neutral-content">
              {format(parseISO(journal.date), "MM/dd/yyyy")}
            </p>
          )}
          <p>{journal.content}</p>
        </div>
      )}
    </>
  );
}
