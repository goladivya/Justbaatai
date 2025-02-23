import axios from 'axios';

const API_URL = 'http://localhost:5000/api/headlines';

export const getHeadlines = async () => await axios.get(API_URL);
export const addHeadline = async (headline, conspiracyScore, category) => 
    await axios.post(API_URL, { headline, conspiracyScore, category });
export const updateHeadline = async (id, conspiracyScore, category) => 
    await axios.put(`${API_URL}/${id}`, { conspiracyScore, category });
export const deleteHeadline = async (id) => await axios.delete(`${API_URL}/${id}`);
export const analyzeHeadline = async (headline) => {
    try {
        const response = await axios.post(`${API_URL}/analyze`, { headline });
        return response.data;
    } catch (error) {
        return { conspiracyScore: null, category: "Error analyzing" };
    }
};