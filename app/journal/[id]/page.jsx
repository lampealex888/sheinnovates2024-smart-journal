"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import axios from "axios";
import { format, parseISO } from "date-fns";

export default function EntryPage(ctx) {
  const [entry, setEntry] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const { data: session, status } = useSession();

  const fetchData = async (entryId) => {
    try {
      setLoading(true);
      await axios
        .get(`/api/journal/${entryId}`)
        .then((response) => {
          setEntry(response);
        })
        .catch((error) => {
          console.error("Error", error);
        });
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (status === "authenticated") {
      fetchData(ctx.params.id);
    }
  }, [ctx.params.id, status]);

  if (status !== "authenticated") {
    return <span className="text-center">Not Authorized</span>;
  }
  const handleDeleteTask = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/journal/${ctx.params.id}`).then(() => {
        router.push("/journal");
      });
    } catch (error) {
      console.error("Error", error);
    } finally {
      setLoading(false);
    }
  };
  if (!entry) {
    return <span className="text-center">Loading</span>;
  }

  return (
    <div className="max-w-5xl mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-2">{entry.title}</h1>
      {entry.date == null ? null : (
        <span className="">{format(parseISO(entry.date), "MM/dd/yyyy")}</span>
      )}
      <p>{entry.content}</p>
      <Link
        href={`/journal/edit/${ctx.params.id}`}
        className="btn btn-warning text-lg m-4"
      >
        Edit
      </Link>
      <button onClick={handleDeleteTask} className="btn btn-error text-lg m-4">
        Delete
      </button>
    </div>
  );
}
