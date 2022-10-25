import React, { Fragment, useEffect, useState } from 'react';
import './Users.css';
import { nanoid } from "nanoid";
import UserRow from './UserRow';
import UserEditable from './UserEditable';


const Users = () => {
  const [users, setUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect( () =>{
    fetch('https://powerful-garden-89346.herokuapp.com/userCount')
    .then(res => res.json())
    .then(data =>{
      const count = data.count;
      const pages = Math.ceil(count/5);
      setPageCount(pages);
    })
  }, []);

  const [adduser, setAddUser] = useState({
    id: '',
    name: '',
    email: ''
  });

  const [editFormData, setEditFormData] = useState({
    id: '',
    name: '',
    email: ''
  })

  const [edituserId, setEditUserId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...adduser };
    newFormData[fieldName] = fieldValue;

    setAddUser(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newUserData = {
      id: nanoid(),
      name: adduser.name,
      email: adduser.email,
    };
    const newUsersData = [...users, newUserData];
    setUsers(newUsersData);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedUser = {
      id: edituserId,
      name: editFormData.name,
      email: editFormData.email
    }

    const newUsers = [...users];

    const index = users.findIndex((user) => user._id === edituserId);
    newUsers[index] = editedUser;
    setUsers(newUsers);
    setEditUserId(null);
  }

  useEffect(() => {
    fetch(`https://powerful-garden-89346.herokuapp.com/user?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => setUsers(data));
  }, [page, size]);

  // useEffect(() => {
  //   fetch('http://localhost:5000/user')
  //     .then(res => res.json())
  //     .then(data => setUsers(data));
  // }, []);

  const handleEditClick = (event, userlist) => {
    event.preventDefault();
    setEditUserId(userlist._id);

    const formValues = {

      name: userlist.name,
      email: userlist.email,
    }

    setEditFormData(formValues);
  };

  const handleCancleClick = () => {
    setEditUserId(null);
  };

  const handleDeleteClick = (userId) => {
    const newUsers = [...users];

    const index = users.findIndex((user) => user._id === userId);
    newUsers.splice(index, 1);
    setUsers(newUsers);
  }

  return (
    <>
    <div className='user-container'>
    <div>
      <form onSubmit={handleEditFormSubmit}>
        <table className='user-table'>
          <thead>
            <tr className='user-tr'>
              <th>ID No</th>
              <th>Name</th>
              <th>email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((userlist) => (
              <Fragment>
                {edituserId === userlist._id ? (<UserEditable key={userlist._id} editFormData={editFormData} handleEditFormChange={handleEditFormChange} handleCancleClick={handleCancleClick} />
                ) : (
                  <UserRow key={userlist._id} userlist={userlist} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />)}
              </Fragment>
            ))}

          </tbody>
        </table>
        
      </form>
      <div className='pagination'>
          {
            [...Array(pageCount).keys()].map(number => <button className={page=== number ? 'selected' : ''} onClick={() => setPage(number)}>{number}</button>)
          }
          <select onChange={e => setSize(e.target.value)}>
            <option value="5" selected >5</option>
            <option value="10">6</option>
            <option value="15">7</option>
          </select>
        </div>
      </div>

      <div className='adduser'>
      <h2>Add a User</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input type="number" name='id' required="required" placeholder='Enter a id' />
        <input type="text" name='name' required="required" placeholder='Enter a name' onChange={handleAddFormChange} />
        <input type="email" name='email' required="required" placeholder='Enter a email' onChange={handleAddFormChange} />
        <button className='add-button' type='submit'>Add</button>
      </form>
      </div>
    </div>
    
    </>
  )
}

export default Users