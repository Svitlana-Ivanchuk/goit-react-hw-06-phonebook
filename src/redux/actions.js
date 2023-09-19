export const addContact = newContact => {
  return {
    type: 'contacts/addContact',
    payload: newContact,
  };
};

export const deleteContact = contactId => {
  return {
    type: 'contacts/deleteContact',
    payload: contactId,
  };
};

export const filterByName = value => {
  return {
    type: 'filter/filterByName',
    payload: value,
  };
};
