import express from 'express';
import mongoose from 'mongoose';
import data from "./data.js";
import productRouter from './routers/productRouter.js';
import userRouter from './routers/userRouter.js';

const app = express();
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/shoppingsite', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
});




app.use('/api/users', userRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.use('/api/products', productRouter);
app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
});

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server at http://localhost:${port}`);
});