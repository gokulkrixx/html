

import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './Admin.css';
import { Link } from "react-router-dom";



async function getData() {

    let token = localStorage.getItem('token');
    console.log("listing page token : ", token);
    
    const response = await axios.get('http://localhost:2005/users', {
        "headers" : {
            "authorization" : `Bearer ${token}`
        }
    });
    
    return response.data;

  }


export default function AdminListingPage() {

    const [users, setUsers] = useState([]);
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getData().then(parsedData => {
            setUsers(parsedData.data);
        }).catch(error => {
            console.error("Error fetching data: ",error);
        });
    }, []);
     
    const handleViewUser = (userId) =>{
        console.log("handle view called");
        navigate(`/viewpage/${userId}`);
    }
    console.log("handle view called".user);
   


    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Admin Page</title>
            <div className="line">
                <header id="admin-header">
                    <h1 id="admin-h1">User Management</h1>
                 
                </header>
                <main id="admin-main">
                <table id="admin-table">
                        <thead>
                            <tr id="admin-tr">
                                <th className="admin-th">First Name</th>
                                <th className="admin-th">Last Name</th>
                                <th className="admin-th">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id}>
                                    <td>{user.firstname}</td>
                                    <td>{user.lastname}</td>
                                    <td>
                                        <button className="btn btn-primary btn-edit" onClick={() => handleViewUser(user._id)}>view</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </main>
            </div>
        </>
    );
}

