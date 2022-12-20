import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const USG = 'https://ik.imagekit.io/72bccx2bu/ANIRUDHPANDA.JPG';
const D = 'https://ik.imagekit.io/72bccx2bu/SUBHDEEP.jpg';
const DD = 'https://ik.imagekit.io/72bccx2bu/ARUNIMA.jpg';

export default function DATeam() {
    return (
        <div>
            <Heading head='Delegate Affairs' />
            <div className="team-container">
                <Row>
                    <Col xs={12} md={4}>
                        <Profilecard image={USG} position="Under Secretary General" name='Anirudh Panda' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={D} position='Director' name='Shubhadeep Dash' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={DD} position='Deputy Director' name='Arunima Mohapatra' />
                    </Col>

                </Row>
            </div>
        </div>
    )
}
