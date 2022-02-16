import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const UsersTable = () => {
    const [users, setUsers] = useState([])
    const API_URL = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
      const fetchUsers = async() => {
          const { data } = await axios.get(`${API_URL}`)
          setUsers(data)
          console.log('data :>> ', data);
      }
    fetchUsers()
      
    }, [users])
    
    return (
        <div>
            <Table striped bordered hover variant="dark"  >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address (street (city))</th>
                        <th>Company</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    {users &&
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{`${user.address.street} (${user.address.city})`}</td>
                                <td>{user.company.name}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
        </div>
    );
};

export default UsersTable;
