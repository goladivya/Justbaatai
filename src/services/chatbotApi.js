import axios from 'axios';

const API_URL = 'http://localhost:5000/api/chatbot';

export const askChatbot = async (question) => await axios.post(`${API_URL}/ask`, { question });
export const getFAQs = async () => await axios.get(API_URL);
export const addFAQ = async (question, answer) => await axios.post(API_URL, { question, answer });
export const updateFAQ = async (id, answer) => await axios.put(`${API_URL}/${id}`, { answer });
export const deleteFAQ = async (id) => await axios.delete(`${API_URL}/${id}`);
