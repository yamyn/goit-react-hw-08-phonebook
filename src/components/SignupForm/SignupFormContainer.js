import { connect } from 'react-redux';
import { signup } from '../../redux/session/sessionOperations';
import SignupForm from './SignupForm';

const mapDispatchToProps = dispatch => ({
    onSignup: credentials => dispatch(signup(credentials)),
});

export default connect(null, mapDispatchToProps)(SignupForm);
