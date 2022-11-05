import React, { Fragment, useEffect, useState } from 'react';
import AddAttendance from './AddAttendance';
import './Attendance.css';
import AttendanceRow from './AttendanceRow';

const Attendance = () => {
  const [users, setUsers] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(5);

  useEffect(() => {
    fetch(`https://powerful-garden-89346.herokuapp.com/user?page=${page}&size=${size}`)
      .then(res => res.json())
      .then(data => setUsers(data));
    }, [page, size]);

    const [attendanceUserId, setAttendanceUserId] = useState(null);

    useEffect( () =>{
      fetch('https://powerful-garden-89346.herokuapp.com/userCount')
      .then(res => res.json())
      .then(data =>{
        const count = data.count;
        const pages = Math.ceil(count/5);
        setPageCount(pages);
      })
    }, []);
  
  return (
    <>
    <div className='user-container'>
    <div>
      <form >
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
                {attendanceUserId === userlist._id ? (<AddAttendance key={userlist._id}  />
                ) : (
                  <AttendanceRow key={userlist._id} userlist={userlist} />)}
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
      <h2>Add a Attendance</h2>
      <form >
        <input type="number" name='id' required="required" placeholder='Enter a id' />
        <input type="text" name='name' required="required" placeholder='Enter a name'  />
        <input type="email" name='email' required="required" placeholder='Enter a email'  />
        <button className='add-button' type='submit'>Add</button>
      </form>
      </div>
    </div>
    
    </>
  )
}

export default Attendance;