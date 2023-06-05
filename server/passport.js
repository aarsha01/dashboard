import passport from "passport";
import LocalStrategy from 'passport-local'
import crypto from 'crypto'
import usersModel from "./model/users.model.js";

export default function initPassport(){
  const salt = 'ksdkjsjldsldnlsdsb,'
  passport.use(new LocalStrategy(async function verify(username, password, cb) {
    try{
      const user = await usersModel.findOne({username:username})
      if (!user ) { return cb(null, false, { message: 'Incorrect username or password.' }); }
      crypto.pbkdf2(password, salt, 310000, 32, 'sha256', function(err, hashedPassword) {
        if (err) { return cb(err); }
        if (!crypto.timingSafeEqual(user.password, hashedPassword)) {
          return cb(null, false, { message: 'Incorrect username or password.' });
        }
        return cb(null, user);
      });
    }catch(err){
      if (err) { return cb(err); }
    }
  }));
}