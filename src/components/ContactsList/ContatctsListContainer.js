import { connect } from 'react-redux';

import {
    fetchContacts,
    deleteContacts,
} from '../../redux/contacts/contactsOperations';
import { getFilteredContacts } from '../../redux/contacts/contactsSelectors';

import ContactsList from './ContactsList';

const mapStateToProps = state => ({
    contacts: getFilteredContacts(state),
});

const mapDispatchToProps = {
    onDeleteContact: deleteContacts,
    onLoadContacts: fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
