"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function JournalEntry(ctx) {
  const [journal, setJournal] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchData = async (journalId) => {
    try {
      setLoading(true);
      await axios
        .get(`/api/journal/${journalId}`)
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
  }, [ctx.params.id]);

  const handleDeleteTask = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/journal/${ctx.params.id}`);
      router.push("/journal");
    } catch (error) {
      console.error("Error deleting journal entry:", error);
    }
  }
  
  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="max-w-5xl mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-2">{journal.title}</h1>
          {journal.date == null ? null : (
            <span className="">
              {format(parseISO(journal.date), "MM/dd/yyyy")}
            </span>
          )}
          <p>{journal.content}</p>
          <Link
            href={`/journal/edit/${ctx.params.id}`}
            className="btn btn-warning text-lg m-4"
          >
            Edit
          </Link>
          <button
            onClick={handleDeleteTask}
            className="btn btn-error text-lg m-4"
          >
            Delete
          </button>
        </div>
      )}
    </>
  );
}
