# Web Server

## Installation (Yükleme)

Use the git clone command to clone the project to local.

(Projeyi bilgisayara klonlamak için git clone komutunu kullanın.)

```bash
git clone https://github.com/umutdag1/patika/
```

## Usage (Kullanım)

```bash
cd patika/NodeJS/Web_Server_Odev5
node index.js 
```

## Example Code (Örnek Kod)
```js
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
```
