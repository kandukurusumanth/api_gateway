const dotenv= require('dotenv');
dotenv.config();
module.exports={
    PORT:process.env.PORT,
    SALT_ROUNDS:process.env.SALT_ROUNDS,
    SECERT_KEY:process.env.SECERT_KEY,
    FLIGHT_PORT:process.env.FLIGHT_PORT,
    BOOKING_PORT:process.env.BOOKING_PORT
   
}
