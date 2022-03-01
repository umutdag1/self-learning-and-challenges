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
const router = new Router();

router.get('/index', async (ctx, next) => {
    const view = await next();
    ctx.response.status = 200;
    ctx.body = view;
});

router.get('/about', async (ctx, next) => {
    const view = await next();
    ctx.response.status = 200;
    ctx.body = view;
});

router.get('/contact', async (ctx, next) => {
    const view = await next();
    ctx.response.status = 200;
    ctx.body = view;
});

readView = async (_, next) => {
    const url = await next();
    const filePath = `./views${url}.html`;
    const isFileExist = fs.existsSync(filePath);

    if (isFileExist) {
        return fs.readFileSync(filePath).toString();
    } else {
        ctx.response.status = 404;
        ctx.response.body = "Error! Not Found";
    }
}

app.use(router.routes());
app.use(readView);
app.use(ctx => ctx.url);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is started on ${PORT}`));
```
