const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    const blog = { id: 1, title: "Blog title", description: "Blog description" };
    res.status(200).send(blog);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is started on ${PORT}`));