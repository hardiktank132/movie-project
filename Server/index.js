const express = require("express");
const moongose = require("mongoose");
const bodyparser = require("body-parser");
const cors = require("cors");
const app = express();
app.use(bodyparser.json());

app.use(cors());
const Mongourl =
    // "mongodb+srv://Krishna6609:Krishna1234@cluster0.zznsrxk.mongodb.net/?retryWrites=true&w=majority";
    "mongodb://0.0.0.0:27017/krishna"
moongose.connect(Mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("database connected")).catch((e) => console.error("database not connected"));
const users = new moongose.Schema({
    fullname: String,
    emailid: String,
    password: String,
    mobno: String,
    address: String,
})
const Users = moongose.model("Users", users);
app.post("/admin/signup", async (req, res) => {
    console.log(req.body);
    console.log("login page");
    res.send("login page");
    const { fullname, emailid, password, mobno, address } = req.body;
    const data = {
        fullname, emailid, password, mobno, address,
    };
    await Users.insertMany([data]);
})
app.post("/admin/login", async (req, res) => {
    // console.log(req.body);
    try {
        const email = req.body.emailid;
        const password = req.body.password;
        console.log(email);
        const finduser = await Users.findOne({ emailid: email });
        if (finduser) {
            if (finduser.password === password) {
                res.send(finduser);
                console.log("valid user");
            }
            else {
                console.log("invalid user");
            }
        }
        else {
            console.log("inavlid user");
        }
    } catch (error) {
        console.log(error);
    }

})
app.listen(7002, () => {
    console.log("port is running");
})