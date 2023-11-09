import { Col, Container, Row } from "react-bootstrap";
import Home from "../pages/Home/Home/Home";
import Header from "../pages/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import RightNav from "../pages/Shared/RightNav/RightNav";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Home />
      <div className="pad_tb_120">
        <Container>
          <Row>
            <Col lg={9}>
              <Outlet></Outlet>
            </Col>
            <Col lg={3}>
              <RightNav />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Main;
