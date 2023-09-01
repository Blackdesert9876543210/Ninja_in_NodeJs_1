const http = require('http');
const PORT = 3000;

function requestHandler(req, res) {
    console.log("hello jee kaise ho saare");
    res.writeHead(200,{'context-type': 'text/html'});
    res.end('<h1>Got it!</h1>');
}
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})
