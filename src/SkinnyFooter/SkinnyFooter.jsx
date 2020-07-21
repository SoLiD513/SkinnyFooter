import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./SkinnyFooter.css";

class SkinnyFooter extends Component {
  state = {
    changeNavBar: false,
  };

  componentDidMount() {
    console.log(this.state.changeNavBar);
  }
  componentDidUpdate() {
    console.log(this.state.changeNavBar);
    this.openBottomMenu();
  }

  toggleMenu = (e) => {
    e.preventDefault();
    this.setState({ changeNavBar: !this.state.changeNavBar });
  };

  openBottomMenu() {
    if (this.state.changeNavBar === true) {
      console.log("Bottom Menu Opened");
      this.displayBottomMenu();
    } else if (this.state.changeNavBar === false) {
      console.log("Bottom Menu Closed");
    }
  }

  displayBottomMenu() {
    console.log("Displaying Bottom Menu");
  }

  render() {
    return (
      <>
        <Container className="skinnyFooter">
          <Row>
            <Col>
              <div
                id="menuIconContainer"
                className={this.state.changeNavBar ? "change" : ""}
                onClick={this.toggleMenu}
              >
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default SkinnyFooter;
