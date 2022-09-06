import * as React from "react";
import { css } from "../style/style";

function ItemComponent(props) {
  const { name, labelStyle } = props;
  return (
    <div className={styles.navItemStyle()} style={labelStyle}>
      {name}
    </div>
  );
}
class Navbar extends React.Component {
  render() {
    const options = [
      {
        name: "Create Meetup",
      },
      {
        name: "Explore",
      },
    ];
    return (
      <div className={styles.navContainer()}>
        <div className={styles.navItemContainer()}>
          <div className={styles.boldText()}>{"QTemu"}</div>
          {options.map((item) => (
            <ItemComponent name={item.name} />
          ))}
        </div>
        <div style={{ color: "#DEDEDE" }}>{"Login"}</div>
      </div>
    );
  }
}

const styles = {
  boldText: css({
    fontWeight: "bold",
  }),
  navContainer: css({
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
  }),
  navItemContainer: css({
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
  }),
  navItemStyle: css({
    color: "#DEDEDE",
    cursor: "pointer",
    marginLeft: 24,
  }),
};

export default Navbar;
