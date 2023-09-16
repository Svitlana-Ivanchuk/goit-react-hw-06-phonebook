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

export const filterByName = valueName => {
  return {
    type: 'filter/filterByName',
    payload: valueName,
  };
};
