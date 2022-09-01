import * as React from "react";

export default class Members extends React.Component {
  render() {
    const title = "Members";
    const organizers = "Organizers";
    const name = "Adhy Wiranata";
    const others = "4 others.";
    const seeAll = "See All";
    return (
      <div
        style={{
          flexDirection: "column",
          display: "flex",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            display: "flex",
            marginTop: 12,
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: "bold" }}>{title}</div>
          <div style={{ fontWeight: "bold", marginRight: 18 }}>{seeAll}</div>
        </div>
        <div style={{ marginTop: 8, marginLeft: 18, marginRight: 18 }}>
          <div
            style={{
              backgroundColor: "#C4C4C4",
              padding: 16,
              display: "flex",
              flexDirection: "row",
            }}
          >
            <div
              style={{
                borderRadius: 999,
                width: 60,
                height: 60,
                backgroundColor: "#828282",
                marginRight: 15,
              }}
            />
            <div
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                display: "flex",
              }}
            >
              <div>{organizers}</div>
              <div
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  display: "flex",
                }}
              >
                <div>{name}</div>
                <div style={{ marginLeft: 30 }}>{others}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
