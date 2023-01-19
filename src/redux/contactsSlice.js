import { createSlice, nanoid } from '@reduxjs/toolkit';
import contactsData from '../data/contacts.json';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { values: contactsData },
  reducers: {
    addContact(state, action) {
      state.values.push(action.payload);
    },
    prepare(name, number) {
      return {
        payload: {
          id: nanoid(),
          name,
          number,
        },
      };
    },
    deleteContact(state, action) {
      // const index = state.values.find(contact => contact.id === action.payload);
      // state.values.splice(index, 1);

      return {
        values: state.values.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});

export const selectContacts = (state) => state.contacts.values;
export const { addContact, deleteContact } = contactsSlice.actions;
