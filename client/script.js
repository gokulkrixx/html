async function SubmitFunction() {
    let name = document.getElementById('name').value;
    console.log("name : ", name);

    let email = document.getElementById('email').value;
    console.log("email : ", email);

    let password = document.getElementById('password').value;
    console.log("password : ", password);

    let data = {
        name,
        email,
        password
    }

    let json_data = JSON.stringify(data);

    let response = await fetch('http://192.168.150.131/submit', {
        "method" : "POST",
        "headers" : {
            "Content-Type" : "application/json",
        },
        "body" : json_data,
    });

    let parsed_response = await response.text();

    if(parsed_response === "success") {
        alert("Form submitted successfully");
    }else {
        alert("Form submission failed");
    }
}


async function getData() {

    console.log("Hello world");
    let data = await fetch('http://localhost:5000/getData');
    console.log("data : ", data);

    let parsedData = await data.json();
    console.log("parsedData : ", parsedData);

    let content = document.getElementById("content");
    console.log("content : ", content);

    let rows = "";

    for(let i = 0; i<parsedData.length; i++) {
        rows = rows + `
        <tr>
        <td>${parsedData[i]._id}</td>
        <td><input type="text" name="name" id="name-${parsedData[i]._id}" value="${parsedData[i].name}" disabled=true></td>
        <td><input type="email" name="email" id="email-${parsedData[i]._id}" value="${parsedData[i].email}" disabled=true></td>
        <td><input type="password" name="password" id="password-${parsedData[i]._id}" value="${parsedData[i].password}" disabled=true></td>
        <td><button onclick="handleEdit('${parsedData[i]._id}')">Edit</button></td>
        <td><button onclick="handleSave('${parsedData[i]._id}')">Save</button></td>
        </tr>
        `
    }

    content.innerHTML = rows;
}

// getData();

function handleEdit(id) {
    console.log("id : ", id);

    let name = document.getElementById(`name-${id}`);
    console.log("name : ", name);
    name.disabled = false;

    let email = document.getElementById(`email-${id}`)
    console.log("email : ", email);
    email.disabled = false;

    let password  = document.getElementById(`password-${id}`);
    console.log("password : ", password);
    password.disabled = false;


}

async function handleSave(id) {
    console.log("id : ", id);

    let nameTag = document.getElementById(`name-${id}`);
    console.log("nameTag : ", nameTag);
    let name = nameTag.value;
    console.log("name : ", name);


    let emailTag = document.getElementById(`email-${id}`)
    console.log("emailTag : ", emailTag);
    let email = emailTag.value;
    console.log("email : ", email);

    let passwordTag  = document.getElementById(`password-${id}`);
    console.log("passwordTag : ", passwordTag);
    let password = passwordTag.value;
    console.log("password : ", password);

    let data = {
        id,
        name,
        email,
        password,
    }

    let jsonData = JSON.stringify(data);
    console.log("jsonData : ", jsonData);

    let response = await fetch('/editData',{
        method : "PUT",
        headers : {
            "Content-Type" : "application/json",
        },
        body : json_Data,
    });

    console.log("response : ", response);
    let parsed_response = await response.text();

    if(parsed_response == "success") {
        alert("Updation Success");
    }else {
        alert("Updation failed");
    }

}

function validateName() {
    let name = document.getElementById('name').value;
    console.log("name : ", name);

    let name_error = document.getElementById('name-error');

    let name_regex = /^[a-zA-Z]{2,30}( [a-zA-Z]{2,30})?$/;

    let isNameValid = name_regex.test(name);
    console.log("isNameValid : ", isNameValid);

    if(!isNameValid) {
        name_error.innerHTML = "Invalid Name";
        return;
    }else {
        name_error.innerHTML = "";
        return;
    }
}