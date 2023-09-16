import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';

const initialContacts = {
  contacts: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

//const localStorageKey = 'contacts';

//const getContacts = () => {
//  const savedContacts = localStorage.getItem(localStorageKey);
//  if (savedContacts !== null) {
//    return JSON.parse(savedContacts);
//  }
//  return initialContacts;
//};

////запис контактів в локалсторидж
//const setContacts = () => {
//  localStorage.setItem(localStorageKey, JSON.stringify('contacts'));
//};

const rootReducer = (state = initialContacts, action) => {
  switch (action.type) {
    case 'contacts/addContact':
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case 'contacts/deleteContact':
      return {
        ...state,
        contacts: state.contacts.filter(elem => elem.id !== action.payload),
      };
    case 'filter/filterByName':
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);
