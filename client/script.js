async function getData() {

    console.log("Hello World");
    let data = await fetch('http://localhost:3000/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let content = document.getElementById("content");
    console.log("content : ", content);

    let rows = "";

    for(let i=0; i<parsedData.length;i++) {
        rows = rows + `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="text" name="firstname" id="firstname-${parsedData[i]._id}" value=${parsedData[i].firstname}" disabled=true></td>
        <td><input type="text" name="lastname" id="lastname-${parsedData[i]._id}" value="${parsedData[i].lastname}" disabled=true></td>
        <td><input type="email" name="email" id="email-${parsedData[i]._id}" value="${parsedData[i].email}" disabled=true></td>
        <td><input type="password" name="password" id="password-${parsedData[i]._id}" value="${parsedData[i].password}" disabled=true></td>
        <td><button onclick="handleEdit('${parsedData[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedData[i]._id}')">Save</button></td>
        
        `
    }

    content.innerHTML = rows;
}

getData();

function handleEdit(id) {
    console.log("id :", id);

    let firstname = document.getElementById(`firstname-${id}`);
    console.log("firstname : ", firstname);
    firstname.disabled = false;

    let lastname = document.getElementById(`lastname-${id}`);
    console.log("lastname : ", lastname);
    lastname.disabled = false;

    let email = document.getElementById(`email-${id}`);
    console.log("email : ", email);
    email.disabled = false;

    let password = document.getElementById(`password-${id}`);
    console.log("password : ", password);
    password.disabled = false;
}

// async function handleSave(id) {
//     console.log("id : ", id);

//     let firstnameTag = document.getElementById(`firstname-${id}`);
//     console.log("firstnameTag : ", firstnameTag);
//     let firstname = firstnameTag.value;
//     console.log("firstname : ", firstname);

//     let lastnameTag = document.getElementById(`lastname-${id}`);
//     console.log("lastnameTag : ", lastnameTag);
//     let lastname = lastnameTag.value;
//     console.log("lastname : ", lastname);

//     let emailTag = document.getElementById(`email-${id}`);
//     console.log("emailTag : ", emailTag);
//     let email = emailTag.value;
//     console.log("email : ", email);

//     let passwordTag = document.getElementById(`password-${id}`);
//     console.log("passwordTag : ", passwordTag);
//     let password = passwordTag.value;
//     console.log("password : ", password);

// }
async function handleSave(id){
    console.log("id:",id);

    let firstname = document.getElementById(`firstname-${id}`);
    console.log("firstname :",firstname);
    let firstname = firstname.value;
    console.log("firstname:", firstname);


    let lastnamestname = document.getElementById(`lastname-${id}`);
    console.log("lastname :",lastname);
    let lastname = lastname.value;
    console.log("lastname:", lastname);


    let emailTag = document.getElementById(`email-${id}`);
    console.log("emailTag:",emailTag);
    let email = emailTag.value;
    console.log("email:",email);

    let passwordTag = document.getElementById(`password-${id}`);
    console.log("passwordTag :",passwordTag);
    let password = passwordTage . value;
    console.log("password:",password);

    let data = {
        id,
        name,
        email,
        password,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ",jsonData);

    let response = await fetch('http://localhost:3000/editData',{
    method : "PUT",
    Headers :{
        "content-Type" : "application/json",
    },
    body : jsonData,
    });

    console.log("response:",response);
    let parsed_response = await response.text();

    if(parsed_response = "success"){
        alert("updation Success");
    }else{
        alert("updation failed");
    }
    

// if(req.method === "PUT" && parsedUrl.pathname ==='/editData'){

//     let body = "";
//     erq.on('data',(chunks)=>{
//         console.log( "chunks :",chunks);
//         body = body + chunks.toString();
//         console.log("body : ", body);
//     });

// req.on('end', async()=>{
//     let data = JSON.parse(body);

//     let finalData = {
//         name : data.name,
//         email : data.email,
//         password : data.password,
//     }
//     console.log("data : ", data);

//     let id = data.id;
//     console.log("id :",id);
//     console.log("typeof(id):",typeof(_id));

//     let_id = new object(id);
//     console.log("_id:",_id);
//     console.log("typeof (_id): ",typeof(_id));

//     await collection.updateOne({_id},{$set : finalData})
//     .then((message)=>{
//         console.log("message : ", message);
//         response.writeHead(200,{"Content-Type": "text/plain"});
//         response.end("success")
//     })
//     .catch((error)=>{
//         console.log("error : ", error);
//         response.writeHead(200,{"Content-Type": "text/plain"});
//         response.end("failed");
//     })

//   })
//  }
// };

async function connect(){

    await client.connect()
}};