import React, { useState } from 'react';
import './ChatComponent.css'; 

const ChatComponent = () => {
    const [isChatOpen, setIsChatOpen] = useState(false);

    const toggleChat = () => {
        setIsChatOpen(!isChatOpen);
    };

    return (
        <div>
            {/* this is Chhhhhat Button */}
            <div className="chat-button" onClick={toggleChat}>
                <button>Chat Now</button>
            </div>

            {/* Chat Box idhar hai */}
            {isChatOpen && (
                <div className="chat-box">
                    <div className="chat-header">
                        <h3>Chat</h3>
                        <button onClick={toggleChat}>Close</button>
                    </div>
                    <div className="chat-body">
                        {/* Chat messages idhar aayenge*/}
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
