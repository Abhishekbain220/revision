let express=require("express")
const { currentUser, signup, logout, updateUser } = require("../controller/userController")
const { authenticateUser } = require("../middleware/authMiddleware")
let router=express.Router()

router.get("/currentUser",authenticateUser,currentUser)
router.post("/signup",signup)
router.get("/logout",authenticateUser,logout)
router.put("/updateUser",authenticateUser,updateUser)

module.exports=router