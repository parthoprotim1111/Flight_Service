const {serverPort}= require('./config');
const express= require('express');
const app= express();
const apiRouter= require('./routes');


app.use(express.json());

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));


app.use('/api',apiRouter);

app.listen(serverPort.PORT,()=>{
    console.log(`Successfully connected on port: ${serverPort.PORT}`);
})

