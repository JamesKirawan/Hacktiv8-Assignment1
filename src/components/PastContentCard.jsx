import * as React from "react";
import { css } from "../style/style";
import PropTypes from "prop-types";

class PastContentCard extends React.Component {
  render() {
    return (
      <div
        className={styles.container()}
        style={{
          marginRight: this.props.separatorRight ? 12 : 0,
        }}
      >
        <div className={styles.dateStyle()}>{this.props.item.date}</div>
        <div>{this.props.item.content}</div>
        <div>{this.props.item.with}</div>
        <div className={styles.bottomContainer()}>
          <div>{this.props.item.number}</div>
          <div className={styles.titleStyle()}>{`went`}</div>
        </div>
        <div className={styles.buttonStyle()}>{"View"}</div>
      </div>
    );
  }
}

PastContentCard.propTypes = {
  item: {
    date: PropTypes.string,
    with: PropTypes.string,
    content: PropTypes.string,
    number: PropTypes.string,
    separatorRight: PropTypes.bool,
  },
};

const styles = {
  container: css({
    backgroundColor: "#C4C4C4",
    padding: 12,
    flexDirection: "column",
    display: "flex",
    paddingRight: 24,
  }),
  buttonStyle: css({
    padding: 12,
    backgroundColor: "#828282",
    color: "white",
    textAlign: "center",
    marginTop: 12,
    cursor: "pointer",
    width: "30%",
  }),
  dateStyle: css({
    borderBottom: "1px solid black",
    marginBottom: 10,
    paddingBottom: 5,
  }),
  titleStyle: css({
    color: "#9F9F9F",
    marginLeft: 4,
  }),
  bottomContainer: css({
    flexDirection: "row",
    display: "flex",
    marginTop: 20,
    marginBottom: 8,
  }),
};

export default PastContentCard;
