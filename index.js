const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Test caching still works with split COPY');
});

app.listen(8080, () => {
    console.log('Listening on port 8080...');
});