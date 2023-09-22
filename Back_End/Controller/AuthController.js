const userModel = require("../model/userSchema.js");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const emailValidator = require("email-validator");

// const Number = (0 || 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9);

const signUp = async (req, res, next) => {
  const { name, email, password, confirmPassword } = req.body;

  /// every field is required
  if (!name || !email || !password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "Every field is required "
    });
  }

  // if (name === Number) {
  //   return res.status(501).json({
  //     success: false,
  //     message: "Enter characters only"
  //   });
  // }

  //validate email using npm package "email-validator"
  const validEmail = emailValidator.validate(email);
  if (!validEmail) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address 📩"
    });
  }

  try {
    /// send password not match err if password !== confirmPassword
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "password and confirm Password does not match ❌"
      });
    }

    const userInfo = new userModel(req.body);

    // userSchema "pre" middleware functions for "save" will hash the password using bcrypt
    // before saving the data into the database
    const result = await userInfo.save();
    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    /// send the message of the email is not unique.
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        message: `Account already exist with the provided email ${email} 😒`
      });
    }

    return res.status(400).json({
      message: error.message
    });
  }
};



const signIn = async (req, res, next) => {
  const { email, password } = req.body;

  // send response with error message if email or password is missing
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      message: "email and password are required"
    });
  }

  try {
    // check user exist or not
    const user = await userModel
      .findOne({
        email
      })
      .select("+password");

    // If user is null or the password is incorrect return response with error message
    if (!user || !(await bcrypt.compare(password, user.password))) {
      // bcrypt.compare returns boolean value
      return res.status(400).json({
        success: true,
        message: "invalid credentials"
      });
    }

    // Create jwt token using userSchema method( jwtToken() )
    const token = user.jwtToken();
    user.password = undefined;

    const cookieOption = {
      maxAge: 24 * 60 * 60 * 1000, //24hr
      httpOnly: true //  not able to modify  the cookie in client side
    };

    res.cookie("token", token, cookieOption);
    res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


const forgotPassword = async (req, res, next) => {
  const email = req.body.email;

  // return response with error message If email is undefined
  if (!email) {
    return res.status(400).json({
      success: false,
      message: "Email is required"
    });
  }

  try {
    // retrieve user using given email.
    const user = await userModel.findOne({
      email
    });

    // return response with error message user not found
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "user not found 🙅"
      });
    }

    // Generate the token with userSchema method getForgotPasswordToken().
    const forgotPasswordToken = user.getForgotPasswordToken();

    await user.save();

    return res.status(200).json({
      success: true,
      token: forgotPasswordToken
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const resetPassword = async (req, res, next) => {
  const { token } = req.params;
  const { password, confirmPassword } = req.body;

  // return error message if password or confirmPassword is missing
  if (!password || !confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "password and confirmPassword is required"
    });
  }

  // return error message if password and confirmPassword  are not same
  if (password !== confirmPassword) {
    return res.status(400).json({
      success: false,
      message: "password and confirm Password does not match ❌"
    });
  }

  const hashToken = crypto.createHash("sha256").update(token).digest("hex");

  try {
    const user = await userModel.findOne({
      forgotPasswordToken: hashToken,
      forgotPasswordExpiryDate: {
        $gt: new Date() // forgotPasswordExpiryDate() less the current date
      }
    });

    // return the message if user not found
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid Token or token is expired"
      });
    }

    user.password = password;
    await user.save();

    return res.status(200).json({
      success: true,
      message: "successfully reset the password"
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

const logout = async (req, res, next) => {
  try {
    const cookieOption = {
      expires: new Date(), // current expiry date
      httpOnly: true //  not able to modify  the cookie in client side
    };

    // return response with cookie without token
    res.cookie("token", null, cookieOption);
    res.status(200).json({
      success: true,
      message: "Logged Out"
    });
  } catch (error) {
    res.stats(400).json({
      success: false,
      message: error.message
    });
  }
};

const getUser = async (req, res, next) => {
  const userId = req.user.id;
  try {
    const user = await userModel.findById(userId);
    return res.status(200).json({
      success: true,
      data: user
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

module.exports = {
  signUp,
  signIn,
  forgotPassword,
  getUser,
  resetPassword,
  logout
};
