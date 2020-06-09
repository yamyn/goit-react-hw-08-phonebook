import { createSelector } from 'reselect';

export const getContacts = state => state.contactsList.contacts;

export const getContactsLength = state => {
    const { contacts } = state.contactsList;
    if (!contacts) return 0;
    return contacts.length;
};

export const getFilter = state => state.contactsList.filter;

export const getFilteredContacts = createSelector(
    [getContacts, getFilter],
    (contacts, filter) => {
        if (contacts.length <= 1) return contacts;
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase()),
        );
    },
);
