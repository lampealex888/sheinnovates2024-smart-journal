"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

export default function CreateEntry({ params }) {
  const [entryData, setEntryData] = useState({
    title: "",
    content: "",
    date: "",
    user: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleCreateEntry = async () => {
    try {
      setLoading(true);
      await axios.post("/api/journal", entryData);
      router.push("/journal");
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      entryData.title.length > 0 &&
      entryData.date.length > 0 &&
      entryData.content.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [entryData]);

  return (
    <div className="max-w-7xl mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold">Journal Entry</h1>
      <label htmlFor="title" className="text-2xl font-semibold">
        Title
      </label>
      <input
        id="title"
        type="text"
        value={entryData.title}
        onChange={(e) => setEntryData({ ...entryData, title: e.target.value })}
        placeholder="Title"
        className="w-full rounded-lg input input-bordered text-lg mt-1 mb-4"
      />
      <label htmlFor="date" className="text-2xl font-semibold mb-2">
        Date
      </label>
      <input
        id="date"
        type="date"
        value={entryData.date}
        onChange={(e) => setEntryData({ ...entryData, date: e.target.value })}
        placeholder="Date"
        className="w-full rounded-lg input input-bordered text-lg mt-1 mb-4"
      />
      <label htmlFor="content" className="text-2xl font-semibold mb-2">
        Content
      </label>
      <SimpleMDE
        value={entryData.content}
        onChange={(value) => setEntryData({ ...entryData, content: value })}
      />
      <button
        onClick={handleCreateEntry}
        disabled={buttonDisabled}
        className={"mt-4 rounded-lg btn btn-success text-lg font-semibold mr-4"}
      >
        {loading ? "Processing" : "Create Entry"}
      </button>
      <Link
        className="mt-4 rounded-lg btn btn-info text-lg font-semibold"
        href="/journal"
      >
        Go back
      </Link>
    </div>
  );
}
