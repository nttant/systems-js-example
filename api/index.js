const express = require('express');
var cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello from mock CDN');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
