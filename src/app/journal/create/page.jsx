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
      router.push("/journal");
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
    <div className="flex flex-col">
      <h1>{loading ? "Processing" : "Journal Entry"}</h1>
      <label htmlFor="title">title</label>
      <input
        id="title"
        type="text"
        value={entry.title}
        onChange={(e) => setEntry({ ...entry, title: e.target.value })}
        placeholder="title"
      />
      <label htmlFor="date">date</label>
      <input
        id="date"
        type="date"
        value={entry.date}
        onChange={(e) => setEntry({ ...entry, date: e.target.value })}
        placeholder="date"
      />
      <label htmlFor="content">content</label>
      <textarea
        id="content"
        type="text"
        value={entry.content}
        onChange={(e) => setEntry({ ...entry, content: e.target.value })}
        placeholder="content"
      />
      <button onClick={onEntry}>
        {buttonDisabled ? "Fill out required forms" : "Create entry"}
      </button>
      <Link href="/journal">Go back</Link>
    </div>
  );
}
