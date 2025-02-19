# Express Authentication Validator 🚀

### A lightweight, customizable middleware for **validating authentication inputs** in Express.js applications.

It helps developers **secure login, registration, and password reset** forms with **minimal effort**.

## 🌟 Features

✅ **Easy to Use** – Plug and play middleware integration  
✅ **Customizable** – Define your own validation rules  
✅ **Security-Enhanced** – Prevents common input vulnerabilities  
✅ **Minimal Setup** – Works with Express Validator

---

## 📦 Installation

```sh
npm install express-authentication-validator
```

## 🔧 Usage

**Basic Setup**

Import and use the middleware in your Express routes:

```sh
const express = require("express");
const {
  registerValidator,
  errorHandler,
} = require("express-authentication-validator");

const app = express();
app.use(express.json());

app.post("/register", registerValidator, errorHandler, (req, res) => {
  const { username, email, password, confirmPassword } = req.body;

  res.send({ username, email });
});

app.listen(3000, () => console.log("Server running on port 3000"));
```

## ⚙️ Customization

Want to override validation rules? Use custom rules like this:

```sh
const express = require("express");
const customValidator = require("express-auth-validator");

const registerValidation = customValidator({
  name: { method: "notEmpty", args: [], message: "Name field is required" },
  email: { method: "isEmail", args: [], message: "Invalid email format" },
  password: { method: "isLength", args: [{ min: 8 }], message: "Password must be at least 8 characters" },
});
```

## 🎯 Why Use Express Auth Validator?

🚀 Saves time by reducing repetitive validation code

🔒 Adds security by enforcing strong input rules

🛠 Provides ready-to-use authentication validation
