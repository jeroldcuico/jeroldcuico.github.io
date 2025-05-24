"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function EditListForm({ id, title, description }) {
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/api/lists/${id}`, {
        method: "PUT",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ newTitle, newDescription }),
      });

      if (!res.ok) {
        throw new Error("Failed to update a record");
      }
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <label htmlFor="" className="text-red-950 font-bold text-2xl">
        Edit your thoughts
      </label>
      <input
        onChange={(e) => setNewTitle(e.target.value)}
        value={newTitle}
        type="text"
        placeholder="Add a title"
        className="border border-slate-800 px-5 py-2"
      />
      <textarea
        onChange={(e) => setNewDescription(e.target.value)}
        value={newDescription}
        placeholder="Add a description"
        className="border border-slate-800 px-5 py-2"
      />
      <button className="w-fit text-white font-bold rounded-lg bg-blue-900 px-8 py-2">
        Update
      </button>
    </form>
  );
}
