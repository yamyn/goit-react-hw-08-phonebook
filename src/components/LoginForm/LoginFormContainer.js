import { connect } from 'react-redux';
import { login } from '../../redux/session/sessionOperations';
import LoginForm from './LoginForm';

const mapDispatchToProps = dispatch => ({
    onLogin: credentials => dispatch(login(credentials)),
});

export default connect(null, mapDispatchToProps)(LoginForm);
