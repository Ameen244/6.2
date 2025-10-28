const express = require('express');
const app = express();
const tripRouter = require('./routes/tripRouter');

app.use(express.json());
app.use('/api/v1/trips', tripRouter);
//app.use('/api/V1/user', require('./routes/UserRouter'));
//if the request starts


module.exports=
{
    app
}