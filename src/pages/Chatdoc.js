// frontend/src/components/ChatDocPage.jsx
import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import "./ChatDocPage.css";


const socket = io("http://localhost:5002");

function ChatDoc() {
  const [role, setRole] = useState(null);       // "doctor" or "patient"
  const [status, setStatus] = useState("");
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");


  useEffect(() => {
    if (!role) return;

    socket.emit("join", { role });

  
    socket.on("doctorJoined", (data) => {
      setStatus("Doctor is in the chat");
    });
    socket.on("doctorSearching", (data) => {
      setStatus("Searching for a doctor...");
    });
    socket.on("doctorLeft", (data) => {
      setStatus("Doctor left the chat");
    });

    socket.on("chatMessage", (data) => {

      setMessages((prev) => [...prev, data]);
    });

    return () => {
     
      socket.off("doctorJoined");
      socket.off("doctorSearching");
      socket.off("doctorLeft");
      socket.off("chatMessage");
    };
  }, [role]);

 
  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    socket.emit("chatMessage", { message: inputMessage, sender: role });
    setInputMessage("");
  };

 
  if (!role) {
    return (
      <div className="role-container">
        <h1>Select Your Role</h1>
        <button onClick={() => setRole("patient")}>I am a Patient</button>
        <button onClick={() => setRole("doctor")}>I am a Doctor</button>
      </div>
    );
  }

  return (
    <div className="chat-container">
      <div className="chat-box">
        <h1 className="chat-heading">
          {role === "doctor" ? "Doctor Chat" : "Patient Chat"}
        </h1>
        <p className="chat-status">{status}</p>

        <div className="messages-container">
          {messages.map((msg, idx) => {
            // Determine if this message is from "You" or "Other"
            const isMe = msg.sender === role;
            // Label for the message
            let senderLabel = "";
            if (isMe) {
              senderLabel = "You";
            } else {
              // If you're the doctor, the other person is the patient, and vice versa
              senderLabel = msg.sender === "doctor" ? "Doctor" : "Patient";
            }

            return (
              <div
                key={idx}
                className={`message ${isMe ? "message-right" : "message-left"}`}
              >
                <div className="message-bubble">
                  <span className="message-sender">{senderLabel}</span>
                  <p className="message-text">{msg.message}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Send Message Form */}
        <form onSubmit={sendMessage} className="message-form">
          <input
            type="text"
            className="message-input"
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
          />
          <button type="submit" className="send-button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatDoc;
