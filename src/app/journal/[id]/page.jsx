"use client";

import axios from "axios";
import { useState, useEffect } from "react";

export default function JournalEntry({ params }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getJournalEntry = async () => {
    try {
      const journalEntry = await axios
        .get("/api/journals/getEntry", params)
        .then(function (response) {
          setData(response.data.data);
        });
    } catch (error) {
      console.log("Entry failed", error.message);
    }
  };

  useEffect(() => {
    getJournalEntry();
  });

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h1>{data.title}</h1>
          <p>{data.date}</p>
          <p>{data.content}</p>
        </div>
      )}
    </>
  );
}
