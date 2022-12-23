import React from "react";
import { Suspense, lazy } from "react";
import "../App.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import Profilecard from "../components/common/profilecard";
import { useState } from 'react';
import '../css/team.css';
// import CoreTeam from "../components/Team/coreteam";
// import Footer from "../components/common/Footer";
// import CreativeTeam from "../components/Team/creatived";
// import DATeam from "../components/Team/daAffairs";
// import PrTeam from "../components/Team/pr";
// import WebTeam from "../components/Team/webteam";
// import Finance from "../components/Team/finance";
// import Logistics from "../components/Team/logistics";
// import SponsorshipTeam from "../components/Team/sponsorteam";
// import Hospitality from "../components/Team/hospitality";
// import EBATeam from "../components/Team/eAffairs";

const HeroTeam = lazy(() => import('../components/Team/HeroTeam'));
const Footer = lazy(() => import('../components/common/Footer'));
const CreativeTeam = lazy(() => import('../components/Team/creatived'));
const CoreTeam = lazy(() => import('../components/Team/coreteam'));
const DATeam = lazy(() => import('../components/Team/daAffairs'));
const PrTeam = lazy(() => import('../components/Team/pr'));
const WebTeam = lazy(() => import('../components/Team/webteam'));
const Finance = lazy(() => import('../components/Team/finance'));
const Logistics = lazy(() => import('../components/Team/logistics'));
const SponsorshipTeam = lazy(() => import('../components/Team/sponsorteam'));
const Hospitality = lazy(() => import('../components/Team/hospitality'));
const EBATeam = lazy(() => import('../components/Team/eAffairs'));
function TeamPage() {

    return (
        <div className="team-section">
            <HeroTeam />
            <Suspense fallback={<div />}>
                <CoreTeam />
            </Suspense>
            <Suspense fallback={<div />}>
                <CreativeTeam />
            </Suspense>
            <Suspense fallback={<div />}>
                <DATeam />
            </Suspense>
            <Suspense fallback={<div />}>
                <PrTeam />
            </Suspense>
            <Suspense fallback={<div />}>
                <WebTeam />
            </Suspense>
            <Suspense fallback={<div />}>
                <Logistics />
            </Suspense>
            <Suspense fallback={<div />}>
                <EBATeam />
            </Suspense>
            <Suspense fallback={<div />}>
                <SponsorshipTeam />
            </Suspense>
            <Suspense fallback={<div />}>
                <Hospitality />
            </Suspense>
            <Suspense fallback={<div />}>
                <Finance />
            </Suspense>
            <Suspense fallback={<div />}>
                <Footer />
            </Suspense>











        </div>
    );
}

export default TeamPage;
