import React from 'react';

import Section from '../components/shared/Section/Section';
import cat from '../img/cat.jpg';

const imgStyle = {
    borderRadius: '5%',
    border: '3px solid #000',
};
const HomePage = () => (
    <Section title="">
        <h1>Welcome to Phonebook</h1>

        <img
            src={cat}
            style={{
                ...imgStyle,
            }}
            alt="cat"
            width="400"
            height="400"
        />
    </Section>
);

export default HomePage;
