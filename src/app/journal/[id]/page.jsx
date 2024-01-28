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
    <div className="max-w-lg mx-auto p-4 bg-base-100 shadow rounded-lg">
      <div>
        {loading ? (
          "Loading"
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
            {data.date ? (
              <span className="text-neutral">
                {format(parseISO(data.date), "MM/dd/yyyy")}
              </span>
            ) : null}
            <p>{data.content}</p>
          </>
        )}
      </div>
    </div>
  );
}
