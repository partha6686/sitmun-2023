import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../../css/gallery.css";
import Heading from "../common/heading";

import TimeLogo from "./TimeLogo";

const TimeLine = () => {
  return (
    <div className="timeline_main">
      <Heading head="Timeline" />
      <div className="time_line">
        <VerticalTimeline lineColor="#a222cc">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="November 30,2022"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<TimeLogo />}
          >
            <h3 className="vertical-timeline-element-title">
              Committe Declaration
            </h3>
            <h6 className="vertical-timeline-element-subtitle"></h6>
            <p>
              Committees were declared for the 2023 edition that included WHA,UNHRC,DISEC,IP.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 16,2022"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<TimeLogo />}
          >
            <h3 className="vertical-timeline-element-title">Dates Revealed</h3>
            <h6 className="vertical-timeline-element-subtitle">

            </h6>
            <p>
              Official dates for SITMUN 2023 are declared now that starts from 24th February,2023 - 26th February,2023.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="December 21,2022"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<TimeLogo />}
          >
            <h3 className="vertical-timeline-element-title">Early Bird Application</h3>
            <h6 className="vertical-timeline-element-subtitle">

            </h6>
            <p>Early bird Registration is live now. Hurry up!,Book your seats now.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="TBD"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<TimeLogo />}
          >
            <h3 className="vertical-timeline-element-title">To Be Revealed Soon!!!</h3>
            <h6 className="vertical-timeline-element-subtitle">

            </h6>
            <p>Other event dates will be disclosed soon. Stay tuned to the website or follow our Instagram page to stay updated.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="24th Feb - 26th Feb,2023"
            iconStyle={{ background: "#fff", color: "#fff" }}
            icon={<TimeLogo />}
          >
            <h3 className="vertical-timeline-element-title">Event Dates</h3>
            <h6 className="vertical-timeline-element-subtitle">

            </h6>
            <p>Official dates of SITMUN 2023 are 24th of February to 26th of February 2023.</p>
          </VerticalTimelineElement>
        </VerticalTimeline>

      </div>
    </div>
  );
};

export default TimeLine;
