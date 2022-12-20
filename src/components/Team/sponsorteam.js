import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const D = 'https://ik.imagekit.io/72bccx2bu/MANAS.jpg';
const DD = 'https://ik.imagekit.io/72bccx2bu/ANJALI.jpg';


export default function SponsorshipTeam() {
    return (
        <div>
            <Heading head='Sponsorship Team' />
            <div className="team-container">
                <Row>

                    <Col xs={12} md={6}>
                        <Profilecard image={D} position='Director' name='Namrata Mishra' />
                    </Col>
                    <Col xs={12} md={6}>
                        <Profilecard image={DD} position='Deputy Director' name='Shreeya Gantayet' />
                    </Col>

                </Row>
            </div>
        </div>
    )
}
