import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr>
      <td className="p-4">{contact.id}</td>
      <td className="p-4">{contact.fullName}</td>
      <td className="p-4">{contact.address}</td>
      <td className="p-4">{contact.phoneNumber}</td>
      <td className="p-4">{contact.email}</td>
      <td>
        <button
        className="button-6 p-4"
          type="button"
          onClick={(event) => handleEditClick(event, contact)}
        >
          Edit
        </button>
        <button className="button-6 p-4" type="button" onClick={() => handleDeleteClick(contact.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;
