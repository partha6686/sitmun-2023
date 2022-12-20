import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const sg = 'https://ik.imagekit.io/72bccx2bu/AVINAS.jpeg';
const dsg = 'https://ik.imagekit.io/72bccx2bu/GEETANSA.JPG';
const dg = 'https://ik.imagekit.io/72bccx2bu/AVINAS.jpeg';
const charged = 'https://ik.imagekit.io/72bccx2bu/ARPITA.jpg';
const oios = 'https://ik.imagekit.io/72bccx2bu/AVINAS.jpeg';

export default function CoreTeam() {
    return (
        <div>
            <Heading head='Core Secreteriat' l="hi" />
            <div className="team-container">
                <Row>
                    <Col xs={12} md={4}>
                        <Profilecard image={sg} position='Secretary General' name='Avinash Prasad' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={dsg} position='Deputy Secretary General' name='Geetansa' />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard image={sg} position='Deputy General' name='Sonam Acharya' />
                    </Col>
                </Row>
            </div>
            <div className="team-container">
                <Row>
                    <Col xs={12} md={6}>
                        <Profilecard image={charged} position="Charge D' Affairs" name='Arpita Mohanty' />
                    </Col>
                    <Col xs={12} md={6}>
                        <Profilecard image={sg} position='Director General OIOS' name='Akash Pandit' />
                    </Col>

                </Row>
            </div>
        </div>
    )
}
