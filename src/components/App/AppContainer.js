import { connect } from 'react-redux';

import getAlert from '../../redux/alert/alertSelectors';
import { refreshUser } from '../../redux/session/sessionOperations';

import App from './App';

const mapStateToProps = state => ({
    alert: getAlert(state),
});

const mapDispatchToProps = {
    refreshUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
