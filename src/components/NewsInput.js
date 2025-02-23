import React, { useState } from 'react';
import { analyzeHeadline, addHeadline } from '../services/api';

const NewsInput = () => {
    const [headline, setHeadline] = useState('');
    const [analysis, setAnalysis] = useState(null);
    const [error, setError] = useState('');

    const handleAnalyze = async () => {
        if (!headline) {
            setError("Please enter a headline.");
            return;
        }
        setError('');
        
        try {
            const result = await analyzeHeadline(headline);
            if (result.category === "Error analyzing") {
                setError("Cannot analyze");
            } else {
                setAnalysis(result);
            }
        } catch (error) {
            setError("Cannot analyze");
        }
    };

    return (
        <div>
            <input 
                type="text" 
                value={headline} 
                onChange={(e) => setHeadline(e.target.value)} 
                placeholder="Enter a headline..." 
            />
            <button onClick={handleAnalyze}>Analyze</button>

            {analysis && (
                <div>
                    <p><strong>Category:</strong> {analysis.category}</p>
                    <p><strong>Conspiracy Score:</strong> {analysis.conspiracyScore}%</p>
                </div>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default NewsInput;
