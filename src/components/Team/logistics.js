import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const USG = 'https://ik.imagekit.io/72bccx2bu/SUMEET.jpg';
const USG2 = 'https://ik.imagekit.io/72bccx2bu/ALOK1.jpg';
const D = 'https://ik.imagekit.io/72bccx2bu/DEVI.JPG';
const DD = 'https://ik.imagekit.io/72bccx2bu/SIDHARTHA.jpg';

export default function Logistics() {
    return (
        <div>
            <Heading head='Logistics Team' />
            <div className="team-container">
                <Row>
                    <Col xs={12} md={6}>
                        <Profilecard image={USG} position='Under Secretary General' name='Sumeet Parida' />

                    </Col>
                    <Col xs={12} md={6}>
                        <Profilecard image={USG2} position='Under Secretary General' name='Alok Mishra' />

                    </Col>

                </Row>

            </div>
            <div className='team-container'>
                <Row>
                    <Col xs={12} md={6}>
                        <Profilecard image={D} position='Director' name='Devidutta Sahoo' />

                    </Col>
                    <Col xs={12} md={6}>
                        <Profilecard image={DD} position='Deputy Director' name='Sidhartha mohapatra' />

                    </Col>

                </Row>

            </div>
        </div>
    )
}
