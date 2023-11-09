import { Button, Card, Col, Row } from "react-bootstrap";
import { FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = ({ chef }) => {
  const {
    id,
    chef_name,
    chef_picture,
    likes,
    num_of_recipes,
    years_of_experience,
  } = chef;
  return (
    <div className="chef">
      <Card>
        <Card.Img className="chef_img" variant="top" src={chef_picture} />
        <Card.Body>
          <Card.Title className="fs-3">{chef_name}</Card.Title>
          <Card.Text>
            Cooking Experience :
            <span className="fw-bold"> {years_of_experience}</span> years
          </Card.Text>
          <div className="d-flex ">
            <p className="flex-grow-1">
              Number of Recipe :
              <span className="fw-bold"> {num_of_recipes}</span>
            </p>
            <div>
              <FaThumbsUp className="text-primary fs-4" />
              <span className="fw-bold ms-4">{num_of_recipes}</span>
            </div>
          </div>
        </Card.Body>
        <Button className="">
          <Link className="text-white text-decoration-none">View Recipes</Link>
        </Button>
      </Card>
    </div>
  );
};

export default ChefCard;
