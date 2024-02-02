let succss_function = require ('../utils/response-handler').success_function;
const error_function = require('../utills/response-handler').error_function;
let users = require('../db/models/users');
let jwt = require('jsonwebtoken');
let dotenv = require('dotenv');
dotenv.config();

exports.login = async function (req,res){
    try{
        let email = req.body.email;
        console.log ("email:",email);

        let password = req.body.password;
        console.log ("password:",password);

        if(!email){
            let response = error_function({
                statusCode : 400,
                message : "email is required",
            });
            res.status(response.statusCode).send(response);
            return
        }

        if(!password){
            let response = error_function({
                statusCode : 400,
                message : "password is required"
            });
            res.status(response.statusCode).send(response);
            return;
        }

        let user = await user.findOne({email});
        console.log("user:",user);

        if(user){
            let db_password = user.db_password;
            console.log("db_passord :",db_password);

            if (password === user.password){
                //openssl genpkey - algoritham RSA - outprivate_key.pem _ae256
                let access_token = jwt.sign({user_id : user.user_id},process.env.
                PRIVATE_KEY,{expiresIn : "id"});
                console.log("access_token : ",access_token);
                
             let response = success_function({
                statusCode : 200,
                data : access_token,
                message : "Loigin Successful",
             });
             res.status(response.statusCode).send(response);
             return;

             

        }
        else{
                let response = error_function({
                    statusCode : 404,
                    message : "Invalid password",
                });
                res.status(response.statusCode).send(response);
                return;
            }
        
            



        }else{
            let response = error_function({
                statusCode : 404,
                message : "user not found",
            });
            res.status(response.statusCode).send(response);
            return;
        }




    } catch (error){
        console.log("error:",error);
        let response = error_function({
            statusCode : 400,
            message : error.message ? error.message : error, 
        });
        res.status(response.statusCode).send(response);
        return;

    }


    
}
