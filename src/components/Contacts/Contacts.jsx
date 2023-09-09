import CSS from './Contacts.css';

export const Contacts = ({ stateArr, deleteContact }) => {
  return (
    <ul className="contactList">
      {stateArr.map(({ name, number, id }) => (
        <li key={id}>
          <p>
            {name}: {number}
          </p>
          <button type="button" onClick={() => deleteContact(id)}>
            Delete contact
          </button>
        </li>
      ))}
    </ul>
  );
};
