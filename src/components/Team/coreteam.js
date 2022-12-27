import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const sg = 'https://ik.imagekit.io/72bccx2bu/AVINAS.jpeg';
const dsg = 'https://ik.imagekit.io/72bccx2bu/GEETANSA.webp';
const dg = 'https://ik.imagekit.io/72bccx2bu/SONAM.png';
const charged = 'https://ik.imagekit.io/72bccx2bu/ARPITA.jpg';
const oios = 'https://ik.imagekit.io/72bccx2bu/AKASH.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1672117174518';

export default function CoreTeam() {
    return (
        <div>
            <Heading head='Core Secretariat' />
            <div className="team-container">
                <Row>
                    <Col xs={12} md={4}>
                        <Profilecard image={sg} position='Secretary General' name='Avinash Prasad' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={dsg} position='Deputy Secretary General' name='Geetansa' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={dg} position='Deputy General' name='Sonam Acharya' />
                    </Col>
                </Row>
            </div>
            <div className="team-container">
                <Row>
                    <Col xs={12} md={6}>
                        <Profilecard image={charged} position="Charge D' Affairs" name='Arpita Mohanty' />
                    </Col>
                    <Col xs={12} md={6}>
                        <Profilecard image={oios} position='Director General OIOS' name='Akash Pandit' />
                    </Col>

                </Row>
            </div>
        </div>
    )
}
