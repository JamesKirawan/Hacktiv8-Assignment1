import * as React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <div
        style={{
          marginTop: 30,
          padding: 40,
          borderTop: "1px solid black",
          textAlign: "center",
        }}
      >
        <h3>Copyright Hacktiv8 2018</h3>
      </div>
    );
  }
}
