import React from 'react';

import Section from '../components/shared/Section/Section';
import LoginForm from '../components/LoginForm/LoginFormContainer';
import withAuthRedirect from '../components/hoc/withAuthRedirect';

const LoginPage = () => (
    <Section title="">
        <LoginForm />
    </Section>
);

export default withAuthRedirect(LoginPage);
