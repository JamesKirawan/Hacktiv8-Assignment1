import * as React from "react";

class Profile extends React.Component {
  render() {
    const renderContent = {
      title: "Hacktiv8 Meetup",
      location: "Jakarta, Indonesia",
      members: "1,078",
      organizers: "Adhy Wiranata",
      join: "Join Us",
    };
    return (
      <div
        style={{
          marginTop: 5,
        }}
      >
        <div
          style={{
            backgroundColor: "#C4C4C4",
            flexDirection: "row",
            paddingTop: 12,
            paddingBottom: 12,
            paddingLeft: 20,
            display: "flex",
          }}
        >
          <div
            style={{
              height: 150,
              width: 150,
              backgroundColor: "#BDBDBD",
              marginRight: 30,
            }}
          />
          <div
            style={{
              flexDirection: "column",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div style={{ fontWeight: "bold" }}>{`${renderContent.title}`}</div>
            <div>{`Location   ${renderContent.location}`}</div>
            <div>{`Members    ${renderContent.members}`}</div>
            <div>{`Organizers ${renderContent.organizers}`}</div>
            <div
              style={{
                paddingLeft: 12,
                paddingRight: 12,
                paddingTop: 6,
                paddingBottom: 6,
                backgroundColor: "#4F4F4F",
                cursor: "pointer",
                width: "40%",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {renderContent.join}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
