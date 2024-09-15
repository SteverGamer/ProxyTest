const express = require('express');
const axios = require('axios');
const app = express();

app.get('/search', async (req, res) => {
    const query = req.query.q;
    const response = await axios.get(`https://www.google.com/search?q=${query}`);
    res.send(response.data);
});

app.listen(3000, () => {
    console.log('Proxy server running on port 3000');
});
