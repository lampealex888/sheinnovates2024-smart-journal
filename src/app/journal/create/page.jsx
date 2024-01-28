"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";

export default function CreateJournalEntry({ params }) {
  const router = useRouter();
  const [entry, setEntry] = useState({
    title: "",
    content: "",
    date: "",
    user: "",
  });
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onEntry = async () => {
    try {
      setLoading(true);
      const res = await axios.get("/api/users/me");
      setEntry({ ...entry, userId: res.data.data._id });
      const response = await axios.post("/api/journals/createEntry", entry);
      router.back();
    } catch (error) {
      console.log("Entry failed", error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      entry.title.length > 0 &&
      entry.date.length > 0 &&
      entry.content.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [entry]);

  return (
    <div className="max-w-lg mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">
        {loading ? "Processing" : "Journal Entry"}
      </h1>
      <label htmlFor="title" className="text-2xl font-semibold">
        Title
      </label>
      <input
        id="title"
        type="text"
        value={entry.title}
        onChange={(e) => setEntry({ ...entry, title: e.target.value })}
        placeholder="Title"
        className="w-full rounded-lg input input-bordered text-lg mt-1 mb-4"
      />
      <label htmlFor="date" className="text-2xl font-semibold mb-2">
        Date
      </label>
      <input
        id="date"
        type="date"
        value={entry.date}
        onChange={(e) => setEntry({ ...entry, date: e.target.value })}
        placeholder="Date"
        className="w-full rounded-lg input input-bordered text-lg mt-1 mb-4"
      />
      <label htmlFor="content" className="text-2xl font-semibold mb-2">
        Content
      </label>
      <textarea
        id="content"
        value={entry.content}
        onChange={(e) => setEntry({ ...entry, content: e.target.value })}
        placeholder="Content"
        className="w-full rounded-lg input input-lg input-bordered text-lg mt-1"
      />
      <button
        onClick={onEntry}
        className={`mt-4 rounded-lg btn btn-success text-lg font-semibold ${
          buttonDisabled ? "opacity-50 cursor-not-allowed" : null
        }`}
      >
        {loading ? "Processing" : "Create Entry"}
      </button>
      <Link className="block mt-2 text-sm link-info link-hover" href="/journal">
        Go back
      </Link>
    </div>
  );
}
