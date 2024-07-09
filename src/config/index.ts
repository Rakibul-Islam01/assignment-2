import dotenv from "dotenv"
dotenv.config()

export default  {
    port : process.env.PORT,
    data_url : process.env.DATA_URL
}