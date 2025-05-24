"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function addData() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and Description are require. Please fill out!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/api/lists", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("Failed to create a record");
      }
    } catch (error) {}
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <label htmlFor="" className="text-red-950 font-bold text-2xl">
        Share something
      </label>
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        type="text"
        placeholder="Add a title"
        className="border border-slate-800 px-5 py-2"
      />
      <textarea
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        placeholder="Add a description"
        className="border border-slate-800 px-5 py-2"
      />
      <button
        type="submit"
        className="w-fit text-white font-bold rounded-lg bg-green-950 px-8 py-2"
      >
        Add
      </button>
    </form>
  );
}
