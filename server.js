const http = require('http');
const url = require('url');

module.exports = (req, res) => {
    // Parse the request URL
    const queryObject = url.parse(req.url, true).query;

    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Check if a message was passed
    const message = queryObject.message;

    // Send the response
    if (message) {
        res.end(`You sent the message: ${message}`);
    } else {
        res.end('Please provide a message in the query, e.g., /?message=hi');
    }
};
