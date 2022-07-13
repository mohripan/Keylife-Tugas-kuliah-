import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../Middleware/AuthMiddleware.js";
import User from "../models/UserModel.js";
import generateToken from "../utils/GenerateToken.js";

const userRouter = express.Router();

userRouter.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.json({
        _id: user._id,
        nim: user.nim,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        university: user.university,
        saldo: user.saldo,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401);
      throw new Error("Invalid Email or Passowrd");
    }
  })
);

userRouter.post(
    "/",
    asyncHandler(async (req, res) => {
        const { nim, username, email, password } = req.body;
        const userExists = await User.findOne({ nim });

        if(userExists) {
            res.status(400);
            throw new Error(`Email already exists`);
        }

        const user = await User.create({ 
            nim,
            username,
            email,
            password,
         });

         if(user) {
             res.status(201).json({ 
                _id: user._id,
                nim: user.nim,
                username: user.username,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id),
             });
         }
         else {
             res.status(400);
             throw new Error('Invalid User Data');
         }
    })
  );

userRouter.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if (user) {
      res.json({
        _id: user._id,
        nim: user.nim,
        username: user.username,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        university: user.university,
        saldo: user.saldo,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
        res.status(404);
        throw new Error("User not found");
    }
  })
);

userRouter.post(
  "/",
  asyncHandler(async (req, res) => {
      const { nim, username, email, password } = req.body;
      const userExists = await User.findOne({ nim });

      if(userExists) {
          res.status(400);
          throw new Error(`Email already exists`);
      }

      const user = await User.create({ 
          nim,
          username,
          email,
          password,
       });

       if(user) {
           res.status(201).json({ 
              _id: user._id,
              nim: user.nim,
              username: user.username,
              email: user.email,
              isAdmin: user.isAdmin,
              token: generateToken(user._id),
           });
       }
       else {
           res.status(400);
           throw new Error('Invalid User Data');
       }
  })
);

userRouter.put(
"/profile",
protect,
asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.username = req.body.username || user.username
    user.nim = req.body.nim || user.nim
    user.email = req.body.email || user.email
    user.firstName = req.body.firstName || user.firstName
    user.lastName = req.body.lastName || user.lastName
    user.university = req.body.university || user.university

    if(req.body.password) {
      user.password = req.body.password
    }

    const updatedUser = await user.save()
    res.json({
      _id: updatedUser._id,
      nim: updatedUser.nim,
      username: updatedUser.username,
      email: updatedUser.email,
      firstName: updatedUser.firstName,
      lastName: updatedUser.lastName,
      university: updatedUser.university,
      saldo: updatedUser.saldo,
      isAdmin: updatedUser.isAdmin,
      createdAt: updatedUser.createdAt,
      token: generateToken(updatedUser._id),
    })

  } else {
      res.status(404);
      throw new Error("User not found");
  }
})
);

export default userRouter;
