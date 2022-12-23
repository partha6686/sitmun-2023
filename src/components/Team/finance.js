import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';

const D = 'https://ik.imagekit.io/72bccx2bu/NAKKINA.webp';
export default function Finance() {
    return (
        <div>
            <Heading head='Finance' />
            <div className="team-container">
                <Row>
                    <Col xs={12} md={12}>
                        <Profilecard image={D} position='Director' name='Nakkina Baba Sai' />

                    </Col>

                </Row>
            </div>
        </div>
    )
}
