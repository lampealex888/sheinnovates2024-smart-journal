"use client";

import { useChat } from "ai/react";

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="max-w-5xl mx-auto my-8 p-4 bg-base-100 rounded-lg shadow-lg flex flex-col justify-end">
      <h1 className="text-3xl font-bold">Chat</h1>

      <div className="flex flex-col gap-2">
        {messages.map((m) => (
          <div key={m.id} className="p-2 bg-base-200 rounded-lg">
            <span
              className={m.role === "user" ? "text-success" : "text-info"}
            >
              {m.role === "user" ? "User: " : "AI: "}
            </span>
            <span>{m.content}</span>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="flex gap-4 mt-4">
        <input
          type="text"
          className="flex-grow input bg-base-200 rounded-lg text-lg"
          placeholder="Say something..."
          value={input}
          onChange={handleInputChange}
        />
        <button
          type="submit"
          className="btn btn-accent rounded-lg text-lg"
        >
          Send
        </button>
      </form>
    </div>
  );
}
