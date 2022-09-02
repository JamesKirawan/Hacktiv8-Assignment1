import * as React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 20,
          paddingRight: 20,
          color: "white",
          backgroundColor: "#828282",
          height: 60,
          position: "sticky",
          top: 0,
          zIndex: 1100,
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: "bold" }}>{"QTemu"}</div>
          <div style={{ color: "#DEDEDE", cursor: "pointer", marginLeft: 24 }}>
            {"Create Meetup"}
          </div>
          <div style={{ color: "#DEDEDE", cursor: "pointer", marginLeft: 24 }}>
            {"Explore"}
          </div>
        </div>
        <div style={{ color: "#DEDEDE" }}>{"Login"}</div>
      </div>
    );
  }
}

export default Navbar;
