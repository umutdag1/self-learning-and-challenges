const Koa = require('koa');
const fs = require('fs');

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

