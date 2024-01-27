"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ObjectId } from "mongodb";

export default function JournalEntry({ params }) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await axios.get("/api/journals/getEntry/" + params.id);
        setData(res.data.data);
        console.log(res.data.data);
      } catch (error) {
        console.log("Entry failed", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.id, params.userId]);

  return (
    <>
      {loading ? (
        "Loading"
      ) : (
        <div>
          <h1>{data.title}</h1>
          <p>{data.date}</p>
          <p>{data.content}</p>
          {console.log(data)}
        </div>
      )}
    </>
  );
}
