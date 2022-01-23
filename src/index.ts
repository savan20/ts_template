import dotenv from "dotenv"

if (proces.env.NODE_ENV !== "production") {
  dotenv.config()
}

console.log(process.env.PORT)
