const router = require('express').Router;

router.post('/login', (loginValidation, login) => {
    req.send("login success")
});

router.post('/signup', (signupValidation, signup) => {
    req.send("signup success")
});

module.exports = router;
