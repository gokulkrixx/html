const users = require('../db/models/users');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;
const bcrypt = require('bcryptjs');

exports.createUser = async function createUser(req, res) {
    try {
        //let datas = req.body;
        let name = req.body.name;
        let email = req.body.email;
        let password = req.body.password

        //Validate
        let userFound = await users.findOne({email : datas.email});

        if(userFound){
            let response = error_function({
                statusCode : 400,
                message : "User already exist",
            });
            res.status(response.statusCode).send(response);
            return;
        }

        //Hashing password
        let salt = await bcrypt.genSalt(10);
        console.log("salt:",salt);

        let hashed_passed = bcrypt.hashSync(password,salt);
        console.log("hashed_password : ", hashed_passed);

        //Save to database
        let new_user = await users.create({
            name,
            email,
            password : hashed_passed,
        });

        if(new_user){
            let response_data = {
                _id : new_user._id,
                name : new_user.name,
                email : new_user.email,
            }
            console.log("new_user : ", new_user);
            let response = success_function({
                statuscode :201,
                data : response_datas,
                message : "User created successfully",
            })
            res.status(response.statusCode).send(response);
            return;
        }else{
            let response = error_function({
                statusCode : 400,
                message : "User creation failed",
            })
            res.status(response.statusCode).send(response);
            return;
            
        }

       
  } catch (error) {
        console.log("error : ", error);
        let response = error_function({
            statusCode : 400,
            message : "something went wrong",
        })
        res.status(response.statusCode).send(response);
        return;
        
    }

}

async function getUserData() {

}

async function updateUser() {

}

async function deleteUser() {

}

module.exports = {
    createUser,
    getUserData,
    updateUser,
    deleteUser,
}