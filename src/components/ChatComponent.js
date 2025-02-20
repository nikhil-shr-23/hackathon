import React, { useState } from 'react';
import './ChatComponent.css'; // Make sure to create this CSS file

const ChatComponent = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div>
            {/* Chat Button */}
            <div className="chat-button" onClick={toggleChat}>
                <button>Chat Now</button>
            </div>

            {/* Chat Box */}
            {isChatOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        <h3>Chat</h3>
                        <button onClick={toggleChat}>Close</button>
                    </div>
                    <div className="chat-body">
                        {/* Chat messages will appear here */}
                    </div>
                    <div className="chat-footer">
                        <input type="text" placeholder="Type a message..." />
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatComponent;
