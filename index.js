const http = require('http');
const PORT = 3000;

function requestHandler(req, res) {
    console.log("hello jee kaise ho saare");
}
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})