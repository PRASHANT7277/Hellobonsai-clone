const users = require("../users/users.model");
const authMiddleware = async (req, res, next) => {
    let token=req.headers.cookie;
    
    if (token) {
      let a = token.split("=");
      let tokena= a[1].split("%3A");
      let id = tokena[0];
      let email = tokena[1].split("%40");
      email = email.join("@");
      // console.log("email",email);
      // console.log(id);
      let user = await users.findById(id);
      console.log(user);
      if (user.email == email) {
        req.userId = id;
        next();
      } else {
        res.status(401).send("cannot perform this operation,missing permission");
      }
    } else {
      res.status(401).send("cannot perform this operation,missing permission");
    }
  };

module.exports = authMiddleware;