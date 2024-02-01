const users = require('../db/models/users');
const success_function = require('../utils/response-handler').success_function;
const error_function = require('../utils/response-handler').error_function;

async function createUser(req, res) {
    try {
        let datas = req.body;

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
        //Save to database
        let new_user = await users.create(datas);

        if(new_user){
            console.log("new_user : ", new_user);
            let response = success_function({
                statuscode :201,
                data : new_user,
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