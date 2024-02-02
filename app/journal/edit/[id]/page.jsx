"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const EditJournalEntry = (ctx) => {
  const [entryData, setEntryData] = useState({
    title: "",
    date: "",
    content: "",
  });
  const router = useRouter();

  const fetchData = (journalId) => {
    axios
      .get(`/api/journal/${journalId}`)
      .then((response) => {
        setEntryData(response.data);
      })
      .catch((error) => {
        console.error("Error", error);
      });
  };
  useEffect(() => {
    fetchData(ctx.params.id);
  }, [ctx.params.id]);

  const handleEditEntry = async (e) => {
    try {
      let response = await axios.put(
        `/api/journal/${ctx.params.id}`,
        entryData
      );
      console.log("Entry Updated", response.data);
    } catch (error) {
      console.error("Error", error);
    }
  };
  return (
    <section className="max-w-7xl mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Edit Entry</h1>
      <form className="py-4" onSubmit={handleEditJournal}>
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
        <input
          className="input input-bordered input-primary w-full mb-4"
          type="text"
          value={journalData.title}
          onChange={(e) =>
            setJournalData({ ...journalData, title: e.target.value })
          }
        />
        <div className="mb-4">
          <SimpleMDE
            value={journalData.desc}
            onChange={(value) =>
              setJournalData({ ...journalData, desc: value })
            }
          ></SimpleMDE>
        </div>
        <div className="mb-4">
          <label className="mr-2">Status:</label>
          <select
            className="select select-bordered select-sm w-full"
            value={journalData.status}
            onChange={(e) =>
              setJournalData({ ...journalData, status: e.target.value })
            }
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
            <option value="Progress">Progress</option>
          </select>
        </div>
        <div className="mb-4">
          <button className="btn btn-wide" type="submit">
            Update Journal
          </button>
        </div>
      </form>
    </section>
  );
};

export default EditJournal;
