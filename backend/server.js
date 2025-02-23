require('dotenv').config(); 

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const newsRoutes = require('./routes/headlines'); 
const faqRoutes = require('./routes/chatbot'); 
const app = express();


app.use(cors());
app.use(express.json());


const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/justbaatDB';


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(" MongoDB Connected Successfully"))
.catch(err => console.error(" MongoDB Connection Error:", err));


app.get("/", (req, res) => {
    res.send(" JustBaat AI Backend is Running!");
});


app.use('/api/headlines',newsRoutes );  
app.use('/api/chatbot', faqRoutes);    


app.use((err, req, res, next) => {
    console.error("Server Error:", err);
    res.status(500).json({ message: "Internal Server Error" });
});


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
