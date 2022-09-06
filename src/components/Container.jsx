import * as React from "react";
import { css } from "../style/style";

export default class Container extends React.Component {
  render() {
    return (
      <div className={styles.container()}>
        <div className={styles.upperContent()}>
          {this.props.title ? (
            <div className={styles.boldText()}>{this.props.title}</div>
          ) : (
            <div />
          )}
          {this.props.rightTitle && (
            <div className={styles.boldText()}>{this.props.rightTitle}</div>
          )}
        </div>
        {this.props.children}
      </div>
    );
  }
}

const styles = {
  container: css({
    flexDirection: "column",
    display: "flex",
  }),
  upperContent: css({
    flexDirection: "row",
    display: "flex",
    marginTop: 12,
    justifyContent: "space-between",
    marginRight: 18,
  }),
  boldText: css({
    fontWeight: "bold",
  }),
};
