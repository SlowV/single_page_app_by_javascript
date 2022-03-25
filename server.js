const express = require('express');
const path = require('path');

const app = express();

app.use('/app', express.static(path.resolve(__dirname, 'client', 'app')));
app.use('/assets', express.static(path.resolve(__dirname, 'client/app', 'assets')));

app.get('/*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'index.html'));
});
app.listen(process.env.PORT || 8080, () => console.log('Server running...'));
