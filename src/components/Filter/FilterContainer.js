import { connect } from 'react-redux';

import { changeFilter } from '../../redux/contacts/contactsActions';
import { getFilter } from '../../redux/contacts/contactsSelectors';

import Filter from './Filter';

const mapStateToProps = state => ({
    value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
    onChangeFilter: event => dispatch(changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
