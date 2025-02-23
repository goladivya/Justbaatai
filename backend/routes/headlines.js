const express = require('express');
const { PythonShell } = require('python-shell');
const { getHeadlines, addHeadline, deleteHeadline, updateHeadline } = require('../controllers/headlineController');
const router = express.Router();
const path = require('path');

router.get('/', getHeadlines);
router.post('/', addHeadline);
router.put('/:id', updateHeadline);
router.delete('/:id', deleteHeadline);
router.post('/analyze', async (req, res) => {
    console.log(" Received request at /analyze"); 

    try {
        const { headline } = req.body;
        console.log(" Headline received:", headline); 

        if (!headline) {
            console.log(" No headline provided"); 
            return res.status(400).json({ error: 'Headline is required' });
        }

        let options = {
            mode: 'text',
            pythonPath: 'C:/Python312/python.exe', 
            scriptPath: path.join(__dirname, '../../backend/'),  
            args: [headline]
        };

        PythonShell.run('analyze.py', options, function (err, results) {
            if (err) {
                console.error(" PythonShell Error:", err); 
                return res.status(500).json({ error: 'Internal server error' });
            }

            console.log(" Raw Python output:", results); 

            
            try {
                const analysis = JSON.parse(results.join('')); 
                
                console.log(" Parsed response:", analysis);
                return res.json(analysis);
            } catch (parseError) {
                console.error(" JSON Parse Error:", parseError);
                return res.status(500).json({ error: 'Error parsing Python response' });
            }
        });

    } catch (error) {
        console.error(" Server error:", error);
        return res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;
