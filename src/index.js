const express= require('express');
const app = express();
const {server} =require('./config/index');

const api= require('./router')
app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use('/api',api)
app.listen(server.PORT ,()=>{
    console.log(`listening to port : ${server.PORT}`);
   

})