import { Router } from "express";
import { addUser, editById, fetchUsers, getById } from "../controller/user.controller.js";
import passport from "passport";

const router = Router()

router.post('/add', addUser)
router.post('/fetch_users', fetchUsers)
router.post('/getById', getById)
router.post('/edit', editById)
router.post('/login', passport.authenticate('local', { failureRedirect: '/login_page'}),(req,res)=>{
  res.send({status:true,user_id:req.user._id,user_role:req.user.role}).status(200)
})

passport.serializeUser(function(user, cb) {
  process.nextTick(function() {
    cb(null, { id: user.id, username: user.username });
  });
});

passport.deserializeUser(function(user, cb) {
  process.nextTick(function() {
    return cb(null, user);
  });
});
export default router
