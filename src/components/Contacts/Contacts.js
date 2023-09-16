import { useDispatch, useSelector } from 'react-redux';
import { StyledBtnDelete, StyledContact, StyledList } from './Contacts.styled';
import { TiUserDelete } from 'react-icons/ti';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/actions';

export const Contacts = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();
  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const selectedName = contacts.filter(elem => {
    console.log(elem.name);
    if (filter !== '') {
      elem.name.toLowerCase().includes(filter);
    }
    return contacts;
  });

  return (
    <>
      <StyledList>
        {selectedName.map(contact => (
          <StyledContact key={contact.id}>
            {contact.name} : {contact.number}
            <StyledBtnDelete onClick={() => handleDelete(contact.id)}>
              <TiUserDelete></TiUserDelete>
            </StyledBtnDelete>
          </StyledContact>
        ))}
      </StyledList>
    </>
  );
};