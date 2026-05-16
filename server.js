require("dotenv").config()
let db = require("./model/connect")
let express = require("express")
let cookieParser = require("cookie-parser")
let morgan = require("morgan")
let cors = require("cors")
const { errorHandler } = require("./middleware/errorHandler")
let PORT = process.env.PORT || 3000
let userRouter=require("./Routes/userRouter")
let app = express()

// middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan("tiny"))

const allowedOrigins = [
  "https://revision-frontend-seven.vercel.app",
  "http://localhost:5173",
  
];

app.use(cors({
  origin: allowedOrigins,
  credentials: true
}))

// Routes
app.use("/user",userRouter)

app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// ---------------- 404 Handler ----------------
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Route not found"
  });
});

// Error middleware
app.use(errorHandler)

app.listen(PORT, () => {
  console.log("Server running on PORT", PORT)
})


