const express = require('express');
const app = express;
const port = 4444;

app.get('api/hello', (res, send) => {
    return send.json({message: 'Hello, client'});
});

app.listen((port) => `Server ${port}`); 