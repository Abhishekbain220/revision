let express=require("express")
const { currentUser, signup } = require("../controller/userController")
const { authenticateUser } = require("../middleware/authMiddleware")
let router=express.Router()

router.get("/currentUser",authenticateUser,currentUser)
router.post("/signup",signup)

module.exports=router