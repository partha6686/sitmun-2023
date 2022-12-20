import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const USG = 'https://ik.imagekit.io/72bccx2bu/ANIRUDHPANDA.JPG';
const D = 'https://ik.imagekit.io/72bccx2bu/NAMRATA.jpg';
const DD = 'https://ik.imagekit.io/72bccx2bu/SHREEYAGANTAYET.jpg';


export default function PrTeam() {
    return (
        <div>
            <Heading head='Public Relations' />
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
