import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const maansi = 'https://ik.imagekit.io/72bccx2bu/MAANSI.jpg';
const dsg = 'https://ik.imagekit.io/72bccx2bu/AVINAS.jpeg';
const DD = 'https://ik.imagekit.io/72bccx2bu/s123.jpg';
export default function CreativeTeam() {
    return (
        <div>
            <Heading head='Creativity & Designing' />
            <div className="team-container">
                <Row>
                    <Col xs={12} md={4}>
                        <Profilecard image={maansi} position="Under Secretary General" name='Manasi Sahoo' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={dsg} position='Director' name='Aditya Pradhan' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={DD} position='Director' name='Shraddha Mishra' />
                    </Col>

                </Row>
            </div>
        </div>
    )
}
