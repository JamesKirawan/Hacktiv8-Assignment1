import * as React from "react";
import PastContentCard from "./PastContentCard";

export default class PastContent extends React.Component {
  render() {
    const title = "Past Meetups";
    const renderContent = [
      {
        date: "27 November 2017",
        content: "#39 JakartaJS April Meetup with",
        with: "kumparan",
        number: "139",
      },
      {
        date: "27 October 2017",
        content: "#38 JakartaJS April Meetup with",
        with: "BliBli",
        number: "113",
      },
      {
        date: "27 September 2017",
        content: "#37 JakartaJS April Meetup with",
        with: "Hacktiv8",
        number: "110",
      },
    ];
    return (
      <div style={{ flexDirection: "column", display: "flex" }}>
        <div style={{ fontWeight: "bold", marginTop: 24 }}>{title}</div>
        <div
          style={{
            marginTop: 8,
            marginLeft: 18,
            marginRight: 18,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {renderContent.map((item, idx) => (
            <PastContentCard
              item={item}
              separatorRight={idx !== renderContent.length - 1}
            />
          ))}
        </div>
      </div>
    );
  }
}
