const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    const url = req.url;

    fs.readFile(`./views${url}.html`, (err, data) => {
        if (err) {
            res.end("Error! Not Found");
        } else {
            res.write(data);
            res.end();
        } 
    });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server is started on ${PORT}`));