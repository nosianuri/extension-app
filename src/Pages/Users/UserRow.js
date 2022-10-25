import React from 'react'

const UserRow = ({ userlist, handleEditClick, handleDeleteClick }) => {
    return (
        <tr>
            <td>{userlist._id}</td>
            <td>{userlist.name}</td>
            <td>{userlist.email}</td>
            <td>
                <button type='button' onClick={(event) => handleEditClick(event, userlist)}>Edit</button>
                <button type='button' onClick={() => handleDeleteClick(userlist._id)}>Delete</button>
            </td>
        </tr>
    )
}

export default UserRow