import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';
const USG = 'https://ik.imagekit.io/72bccx2bu/ANANYAJENA.jpg';
const D = 'https://ik.imagekit.io/72bccx2bu/ISHIKAAGARWAL.jpg';
const DD = 'https://ik.imagekit.io/72bccx2bu/NAVNEET.jpg';


export default function Hospitality() {
    return (
        <div>
            <Heading head='Hospitality' />
            <div className="team-container">
                <Row>
                    <Col xs={12} md={4}>
                        <Profilecard image={USG} position="Under Secretary General" name='Ananya Jena' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={D} position='Director' name='Ishika Agarwal' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={DD} position='Deputy Director' name='Navneet Singh' />
                    </Col>

                </Row>
            </div>
        </div>
    )
}
