import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsData from '../data/contacts.json';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { values: contactsData },
  reducers: {
    addContact(state, action) {
      state.values.push(action.payload);
    },
    deleteContact(state, action) {
      return {
        values: state.values.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

const persistConfig = {
  key: 'contacs',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const selectContacts = (state) => state.contacts.values;
export const { addContact, deleteContact } = contactsSlice.actions;
