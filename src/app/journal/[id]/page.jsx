"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { format, parseISO } from "date-fns";

export default function JournalEntry({ params }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getJournalEntry = async () => {
    try {
      setLoading(true);
      const journalEntry = await axios
        .get("/api/journals/getEntry", params)
        .then(function (response) {
          setData(response.data.data);
        });
      setLoading(false);
    } catch (error) {
      console.log("Entry failed", error.message);
    }
  };

  useEffect(() => {
    getJournalEntry();
  }, []);

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div className="max-w-7xl mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-2">{data.title}</h1>
          {data.date == null ? null : (
            <p className="text-neutral-content">
              {format(parseISO(data.date), "MM/dd/yyyy")}
            </p>
          )}
          <p>{data.content}</p>
        </div>
      )}
    </>
  );
}
