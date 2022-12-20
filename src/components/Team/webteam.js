import React, { useDebugValue } from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const USG = 'https://ik.imagekit.io/72bccx2bu/S3.jpeg';
const D = 'https://ik.imagekit.io/72bccx2bu/PARTHA.jpg';

export default function WebTeam() {
    return (
        <div>
            <Heading head='Web-Dev Team ' />
            <div className="team-container">
                <Row>

                    <Col xs={12} md={6}>
                        <Profilecard image={USG} position='Under Secretary General' name='Swaugat Beura' />
                    </Col>
                    <Col xs={12} md={6}>
                        <Profilecard image={D} position='Director' name='Partha Sarathi Praharaj' />
                    </Col>

                </Row>
            </div>
        </div>
    )
}
