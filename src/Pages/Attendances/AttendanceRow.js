import React from 'react'

const AttendanceRow = ({ userlist, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
            <td>{userlist._id}</td>
            <td>{userlist.name}</td>
            <td>{userlist.email}</td>
            <td>
                <button type='button' onClick={(event) => handleEditClick(event, userlist)}>Present</button>
                <button type='button' onClick={() => handleDeleteClick(userlist._id)}>Absence</button>
            </td>
        </tr>
  )
}

export default AttendanceRow