const express = require('express');
const app = express();

app.use('/',  (req,res) => {
    res.send("Hello")
})

function login(username, password) {
    if (username && password) {
        return "Login successful!";
    }
    return "Login failed!";
}


console.log(login("admin", "1234"));



app.listen('5000', () => {
   console.log("Another DEV commit before feature merge");

})