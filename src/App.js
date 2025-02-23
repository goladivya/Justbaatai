import React from 'react';
import NewsInput from './components/NewsInput';
import NewsList from './components/NewsList';
import Chatbot from './components/Chatbot';
import './App.css';

function App() {
    return (
        <div className="container">
            <h1>📰 JustBaat AI - News & Chatbot</h1>
            <div className="content">
                <div className="news-section">
                    <h2>📢 News Aggregator</h2>
                    <NewsInput />
                    <NewsList />
                </div>
                <div className="chatbot-section">
                    <h2>💬 AI Chatbot</h2>
                    <Chatbot />
                </div>
            </div>
        </div>
    );
}

export default App;
