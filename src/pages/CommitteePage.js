import React from "react";
import { Container } from "react-bootstrap";
import '../css/committee.css'
import disec from '../img/DISEC.png';
import ip from '../img/IPLOGO.png';
import unhrc from '../img/UNHRC.png';
import HeroCommittee from "../components/committee/HeroCommittee";
import Footer from "../components/common/Footer";

function CommitteePage() {
    const pic = 'https://s25.postimg.cc/frbd9towf/cta-2.png';

    return (
        <div>
            <HeroCommittee />
            <div className="box-container real">
                <div class="box-item">
                    <div class="flip-box">
                        <div class="flip-box-front unhrc">
                            <img src={unhrc} />
                        </div>
                        <div class="flip-box-back text-center">
                            <div class="inner color-white">
                                <p>Human rights are an innate virtue that we all should possess and
                                    have for the utility. Since the dawn of civilization, numerous
                                    ideologies and political revolutions have led to a dire
                                    circumstance in matters of human rights. Ranging from the refugee
                                    crisis to the poverty issues, many lives have been subjugated to
                                    utter disdain, to tackle this issue, UNHRC was established.
                                </p>
                                <button class="flip-box-button">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-item">
                    <div class="flip-box">
                        <div class="flip-box-front disec" >
                            <div>
                                <img src={disec} />
                                <div>
                                    <h3 class="flip-box-header">DISEC </h3>
                                </div>
                            </div>


                        </div>
                        <div class="flip-box-back text-center">
                            <div class="inner color-white">
                                <p>The very idea of humanity creating methodologies to protect their
                                    sovereignty as had come across numerous changes. Now we reside in
                                    the age where nuclear power, space technology and bioweapons are
                                    the imminent threat to the mortal existence on the planet. As is
                                    the truth, every coin has two sides, so does this situation, thus
                                    their needs to be a mechanism which ensures the safety.</p>
                                <button class="flip-box-button">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="box-item">
                    <div class="flip-box">
                        <div class="flip-box-front disec" >
                            <div>
                                <img src={disec} />
                                <div>
                                    <h3 class="flip-box-header">WHA </h3>
                                </div>
                            </div>
                        </div>
                        <div class="flip-box-back text-center">
                            <div class="inner color-white">
                                <p>The World Health Assembly is the governing body of World Health Organization, the technical health agency of the United Nations. The World Health Assembly takes place annually on the month of May at the United Nations in Geneva, Switzerland. During this one-week meeting, member states determine the policies of the Organization, appoint the Director-General, discuss upon resolutions, analyze action plans, supervise finances, review and approve the proposed budgets and further deliberate on key public health issues.
                                </p>
                                <button class="flip-box-button">Details</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div class="box-container real">
                <div class="box-item">
                    <div class="flip-box">
                        <div class="flip-box-front ip" >
                            <div>
                                <img src={ip} />
                                <div>
                                    <h3 class="flip-box-header">IP </h3>
                                </div>
                            </div>
                        </div>
                        <div class="flip-box-back text-center">
                            <div class="inner color-white">
                                <p>A revolution is a characteristic feature of ideation and
                                    curiosity, nevertheless this goes hand-in-hand with recognition
                                    and observation. International Press is the committee responsible
                                    for formulating reports and capturing the paramount snippets of
                                    the entire conference. The International Press Delegation allows
                                    participants to act as unbiased journalists, reporting on the
                                    proceedings of each simulation in the Conference.
                                </p>
                                <button class="flip-box-button">Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="medium">
                <div className="box-container ">
                    <div class="box-item">
                        <div class="flip-box">
                            <div class="flip-box-front unhrc">
                                <img src={unhrc} />
                            </div>
                            <div class="flip-box-back text-center">
                                <div class="inner color-white">
                                    <p>Human rights are an innate virtue that we all should possess and
                                        have for the utility. Since the dawn of civilization, numerous
                                        ideologies and political revolutions have led to a dire
                                        circumstance in matters of human rights. Ranging from the refugee
                                        crisis to the poverty issues, many lives have been subjugated to
                                        utter disdain, to tackle this issue, UNHRC was established.
                                    </p>
                                    <button class="flip-box-button">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-item">
                        <div class="flip-box">
                            <div class="flip-box-front disec" >
                                <div>
                                    <img src={disec} />
                                    <div>
                                        <h3 class="flip-box-header">DISEC </h3>
                                    </div>
                                </div>


                            </div>
                            <div class="flip-box-back text-center">
                                <div class="inner color-white">
                                    <p>The very idea of humanity creating methodologies to protect their
                                        sovereignty as had come across numerous changes. Now we reside in
                                        the age where nuclear power, space technology and bioweapons are
                                        the imminent threat to the mortal existence on the planet. As is
                                        the truth, every coin has two sides, so does this situation, thus
                                        their needs to be a mechanism which ensures the safety.</p>
                                    <button class="flip-box-button">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

                <div class="box-container ">
                    <div class="box-item">
                        <div class="flip-box">
                            <div class="flip-box-front disec" >
                                <div>
                                    <img src={disec} />
                                    <div>
                                        <h3 class="flip-box-header">WHA </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="flip-box-back text-center">
                                <div class="inner color-white">
                                    <p>The World Health Assembly is the governing body of World Health Organization, the technical health agency of the United Nations. The World Health Assembly takes place annually on the month of May at the United Nations in Geneva, Switzerland. During this one-week meeting, member states determine the policies of the Organization, appoint the Director-General, discuss upon resolutions, analyze action plans, supervise finances, review and approve the proposed budgets and further deliberate on key public health issues.
                                    </p>
                                    <button class="flip-box-button">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-item">
                        <div class="flip-box">
                            <div class="flip-box-front ip" >
                                <div>
                                    <img src={ip} />
                                    <div>
                                        <h3 class="flip-box-header">IP </h3>
                                    </div>
                                </div>
                            </div>
                            <div class="flip-box-back text-center">
                                <div class="inner color-white">
                                    <p>A revolution is a characteristic feature of ideation and
                                        curiosity, nevertheless this goes hand-in-hand with recognition
                                        and observation. International Press is the committee responsible
                                        for formulating reports and capturing the paramount snippets of
                                        the entire conference. The International Press Delegation allows
                                        participants to act as unbiased journalists, reporting on the
                                        proceedings of each simulation in the Conference.
                                    </p>
                                    <button class="flip-box-button">Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />

        </div>

    );
}

export default CommitteePage;
