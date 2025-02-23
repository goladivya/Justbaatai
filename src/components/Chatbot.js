import React, { useState } from "react";
import { askChatbot } from "../services/chatbotApi"; 

const Chatbot = () => {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);

    const sendMessage = async () => {
        if (!message.trim()) return; 

        const newMessage = { user: "You", text: message };
        setChat([...chat, newMessage]);

        try {
            const response = await askChatbot(message);
            setChat([...chat, newMessage, { user: "Bot", text: response.data.answer }]);
        } catch (error) {
            setChat([...chat, newMessage, { user: "Bot", text: "Chatbot is not responding. Please try again." }]);
        }

        setMessage(""); 
    };

    return (
        <div>
            <div>
                {chat.map((msg, index) => (
                    <p key={index}><strong>{msg.user}:</strong> {msg.text}</p>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask something..."
            />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default Chatbot;
