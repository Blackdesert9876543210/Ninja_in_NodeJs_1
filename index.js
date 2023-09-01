const http = require('http');
const PORT = 3000;
const fs = require('fs');//use to reading or writting in file


function requestHandler(req, res) {
    console.log("hello jee kaise ho saare");
    res.writeHead(200,{'context-type': 'text/html'});
    
    let filePath;
    switch(req.url) {
        case '/':
            filePath = './index.html';
            break;
        case '/profile':
            filePath = './profile.html';
            break;
        default:
            filePath = './404.html'        
    }

    fs.readFile(filePath, function(err, data) {
        if(err) {
            console.log('error', err);
            return res.end('<h1>Error!</h1>');
        }
        return res.end(data);
    })
}
const server = http.createServer(requestHandler);

server.listen(PORT, () => {
    console.log(`server started at port ${PORT}`);
})
