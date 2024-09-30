const http = require('http');
const url = require('url');
const { MESSAGE_PREFIX } = require('../text/constants');

// Define the request handler
const requestHandler = (req, res) => {
    // Parse the request URL
    const queryObject = url.parse(req.url, true).query;

    // Set the response headers
    res.writeHead(200, { 'Content-Type': 'text/plain' });

    // Check if a message was passed
    const message = queryObject.message;

    // Send the response
    if (message) {
        res.end(`${MESSAGE_PREFIX}${message}`);
    } else {
        res.end('Please provide a message in the query, e.g., /?message=hi');
    }
};

// Check if we are running locally or in Vercel
if (require.main === module) {
    // Running locally
    const PORT = 3000;
    const server = http.createServer(requestHandler);
    server.listen(PORT, () => {
        console.log(`Server is running locally on port ${PORT}`);
    });
} else {
    // Running in Vercel
    module.exports = requestHandler;
}
