import React from 'react';
import Container from 'react-bootstrap/Container';
import Section1 from './section1/Section1';
import Section2 from './section2/Section2';
import Section3 from './section3/Section3';
import Section4 from './section4/Section4';
import Section5 from './section5/Section5';
import Section6 from './section6/Section6';
import Section7 from './section7/Section7';
import Section8 from './section8/Section8';
import Section9 from './section9/Section9';
import Section10 from './section10/Section10';
import Section11 from './section11/Section11';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sections.css'

const Sections = () => {

    return (
        <Container fluid>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
            <Section6 />
            <Section7 />
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
        </Container>
    )
}

export default Sections;