import * as React from "react";
import { css } from "../style/style";
import PropTypes from "prop-types";

export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.container()}>
        <h3>Copyright Hacktiv8 2018</h3>
      </div>
    );
  }
}

const styles = {
  container: css({
    marginTop: 30,
    padding: 40,
    borderTop: "1px solid black",
    textAlign: "center",
  }),
};
