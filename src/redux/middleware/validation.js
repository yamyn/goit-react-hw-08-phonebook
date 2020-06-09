import * as alertActions from '../alert/alertActions';
import { addContact } from '../contacts/contactsOperations';
import Validation, { META } from '../../helpers/Validation';
import { getContacts } from '../contacts/contactsSelectors';

const validation = store => next => action => {
    if (action.meta && action.meta.addContact) {
        const state = store.getState();
        const contacts = getContacts(state);
        const { contact } = action.payload;
        const validateRes = Validation.validate(contacts, contact);
        if (validateRes.meta === META.success) {
            store.dispatch(addContact(validateRes.contact));
        }
        const alertMessage = validateRes.message ? validateRes.message : '';

        store.dispatch(alertActions.toShowAlert(alertMessage));

        setTimeout(() => {
            store.dispatch(alertActions.toHideAlert());
        }, 3000);
        return;
    }

    next(action);
};

export default validation;
