import { CorsOptions } from "cors";

const allowedOrigins = [
  "https://localhost:3000",
  "http://127.0.0.1:3000"
]

export const corsOptions: CorsOptions = {
  origin(requestOrigin, callback) {
      if (!requestOrigin || allowedOrigins.indexOf(requestOrigin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error("Not allowed by CORS."))
      }
  },
  credentials: true, 
  optionsSuccessStatus: 200
}