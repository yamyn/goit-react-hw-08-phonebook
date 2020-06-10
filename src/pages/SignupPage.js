import React from 'react';

import Section from '../components/shared/Section/Section';
import SignupForm from '../components/SignupForm/SignupFormContainer';
import withAuthRedirect from '../components/hoc/withAuthRedirect';

const SignupPage = () => (
    <Section title="">
        <SignupForm />
    </Section>
);

export default withAuthRedirect(SignupPage);
