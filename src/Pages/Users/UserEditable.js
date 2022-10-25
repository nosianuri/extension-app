import React from 'react'

const UserEditable = ({ editFormData, handleEditFormChange, handleCancleClick}) => {
    return (
        <tr>
            <td>
                <input type="number" required="required" placeholder='Enter a id...' name='id' value={editFormData._id} onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="text" required="required" placeholder='Enter a name...' name='name' value={editFormData.name} onChange={handleEditFormChange} />
            </td>
            <td>
                <input type="email" required="required" placeholder='Enter a email...' name='email' value={editFormData.email} onChange={handleEditFormChange} />
            </td>
            <td>
                <button type='submit'>Save</button>
                <button type='button' onClick={handleCancleClick}>Cancle</button>
            </td>
            <td></td>
        </tr>
    )
}

export default UserEditable