import React from 'react';
import '../../css/team.css';
import Heading from '../common/heading';
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../common/profilecard";
import { useState } from 'react';


export default function PrTeam() {
    return (
        <div>
            <Heading head='Public Relations' />
            <div className="team-container">
                <Row>
                    <Col xs={12} md={4}>
                        <Profilecard />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard />
                    </Col>
                    <Col xs={12} md={4}>
                        <Profilecard />
                    </Col>
                </Row>
            </div>
        </div>
    )
}
