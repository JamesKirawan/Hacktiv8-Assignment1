import * as React from "react";
export default class PastContentCard extends React.Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: "#C4C4C4",
          padding: 12,
          flexDirection: "column",
          display: "flex",
          paddingRight: 24,
          marginRight: this.props.separatorRight ? 12 : 0,
        }}
      >
        <div
          style={{
            borderBottom: "1px solid black",
            marginBottom: 10,
            paddingBottom: 5,
          }}
        >
          {this.props.item.date}
        </div>
        <div>{this.props.item.content}</div>
        <div>{this.props.item.with}</div>
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 20,
            marginBottom: 8,
          }}
        >
          <div>{this.props.item.number}</div>
          <div style={{ color: "#9F9F9F", marginLeft: 4 }}>{`went`}</div>
        </div>
        <div
          style={{
            padding: 12,
            backgroundColor: "#828282",
            color: "white",
            textAlign: "center",
            marginTop: 12,
            cursor: "pointer",
            width: "30%",
          }}
        >
          {"View"}
        </div>
      </div>
    );
  }
}
