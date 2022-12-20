import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const D = 'https://ik.imagekit.io/72bccx2bu/MRIGANK.jpg';
const DD = 'https://ik.imagekit.io/72bccx2bu/SOURAV.jpg';
export default function EBATeam() {
    return (
        <div>
            <Heading head='EB Affairs' />
            <div className="team-container">
                <Row>
                    <Col xs={12} md={6}>
                        <Profilecard image={D} position="Director" name='Mrigank Patnaik' />
                    </Col>
                    <Col xs={12} md={6}>
                        <Profilecard image={DD} position='Deputy Director' name='Sourav Pratap Kanungo' />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
