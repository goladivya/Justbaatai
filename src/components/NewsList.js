import React, { useEffect, useState } from 'react';
import { getHeadlines, deleteHeadline } from '../services/api';

const NewsList = () => {
    const [headlines, setHeadlines] = useState([]);

    useEffect(() => {
        fetchHeadlines();
    }, []);

    const fetchHeadlines = async () => {
        try {
            const response = await getHeadlines();
            setHeadlines(response.data);
        } catch (error) {
            console.error("Error fetching headlines:", error);
        }
    };

    const handleDelete = async (id) => {
        await deleteHeadline(id);
        fetchHeadlines();
    };

    return (
        <div>
            <h2>News Headlines</h2>
            <ul>
                {headlines.map((news) => (
                    <li key={news._id}>
                        <strong>{news.headline}</strong> - {news.category} ({news.conspiracyScore}%)
                        <button onClick={() => handleDelete(news._id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default NewsList;
