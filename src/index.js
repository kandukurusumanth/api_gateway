const express= require('express');
const app = express();
const {server} =require('./config/index');
const  { rateLimit } =require('express-rate-limit'); 
const { createProxyMiddleware } = require('http-proxy-middleware');
const api = require('./router/index')
const limiter = rateLimit({
	windowMs: 1 * 60 * 1000, 
	limit: 4, 
	message:"to many request try again" 
})

app.use(limiter)

app.use(express.urlencoded({ extended: false }));
app.use(express.json())

app.use('/api',api)
app.use('/flightservice', createProxyMiddleware({ target: server.FLIGHT_PORT, changeOrigin: true }));
app.use('/bookingservice',createProxyMiddleware({ target: server.BOOKING_PORT, changeOrigin: true }))

app.listen(server.PORT ,()=>{
    console.log(`listening to port : ${server.PORT}`);
    

})