
import React, { useEffect, useState } from "react";
import io from "socket.io-client";


const socket = io("http://localhost:5002");

const ChatDoc = () => {
  const [status, setStatus] = useState("Searching for a doctor...");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");

  useEffect(() => {
    
    socket.emit("join", { role: "patient" });

   
    socket.on("doctorJoined", (data) => {
      setStatus(data.message);
    });
    socket.on("doctorSearching", (data) => {
      setStatus(data.message);
    });
    socket.on("doctorLeft", (data) => {
      setStatus(data.message);
    });


    socket.on("chatMessage", (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });

    return () => {
      socket.off("doctorJoined");
      socket.off("doctorSearching");
      socket.off("doctorLeft");
      socket.off("chatMessage");
    };
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim() === "") return;
    socket.emit("chatMessage", { message: inputMessage });
    setInputMessage("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-blue-700 mb-4">
          Chat with a Doctor
        </h1>
        <p className="mb-4 text-gray-600">{status}</p>
        <div className="border rounded p-4 h-64 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div key={index} className="mb-2">
              <span
                className={`font-bold ${
                  msg.sender === "doctor" ? "text-blue-700" : "text-gray-700"
                }`}
              >
                {msg.sender === "doctor" ? "Doctor: " : "You: "}
              </span>
              <span>{msg.message}</span>
            </div>
          ))}
        </div>
        <form onSubmit={sendMessage} className="flex">
          <input
            type="text"
            className="flex-1 border rounded-l p-2"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 rounded-r hover:bg-blue-700"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatDoc;
