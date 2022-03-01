# Koa Web Server

## Installation (Yükleme)

Use the git clone command to clone the project to local.

(Projeyi bilgisayara klonlamak için git clone komutunu kullanın.)

```bash
git clone https://github.com/umutdag1/patika/
```

## Usage (Kullanım)

```bash
cd patika/NodeJS/Koa_Web_Server_Odev6
node index.js 
```

## Example Code (Örnek Kod)
```js
const app = new Koa();

sendView = async (ctx, next) => {
    const view = await next();
    ctx.response.status = view ? 200 : 404;
    ctx.body = view ? view : "Error! Not Found";
}

getView = async (ctx, next) => {
    const contentView = await next();
    return contentView ? contentView.toString() : null;
}

readView = async (_, next) => {
    const url = await next();
    const filePath = `./views${url}.html`;
    const isFileExist = fs.existsSync(filePath);

    if(isFileExist) {
        return fs.readFileSync(`./views${url}.html`);
    } else {
        return null;
    }
}

app.use(sendView);
app.use(getView);
app.use(readView);
app.use(ctx => ctx.url);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is started on ${PORT}`));
```
