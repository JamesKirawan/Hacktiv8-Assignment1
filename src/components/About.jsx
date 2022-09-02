import * as React from "react";

export default class About extends React.Component {
  render() {
    const title = "About Meetup";
    const renderContent = [
      "Come and meet other developers interested in the JavaScript and it's library in the Greater Jakarta area",
      "Twitter: @JakartaJS and we use the hashtag #jakartajs",
    ];
    return (
      <div style={{ flexDirection: "column", display: "flex" }}>
        <div style={{ fontWeight: "bold", marginTop: 12 }}>{title}</div>
        <div style={{ marginTop: 8, marginLeft: 18, marginRight: 18 }}>
          {renderContent.map((item, idx) => (
            <div
              style={{
                marginBottom: idx === renderContent.length - 1 ? 0 : 16,
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
