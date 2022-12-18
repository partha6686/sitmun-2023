import React from 'react';
import '../../css/committee.css';

export default function committeecard() {
    return (
        <div>
            <div class="box-item">
                <div class="flip-box">
                    <div class="flip-box-front text-center" >
                        <div class="inner color-white">
                            <h3 class="flip-box-header">Custom Domains</h3>
                            <p>A short sentence describing this callout is.</p>
                            <img src="https://s25.postimg.cc/65hsttv9b/cta-arrow.png" alt="" class="flip-box-img" />
                        </div>
                    </div>
                    <div class="flip-box-back text-center" style="background-image: url('https://s25.postimg.cc/frbd9towf/cta-2.png');">
                        <div class="inner color-white">
                            <h3 class="flip-box-header">Custom </h3>
                            <p>A short sentence describing this callout is.</p>
                            <button class="flip-box-button">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
