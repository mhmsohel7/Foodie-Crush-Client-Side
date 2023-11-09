import { Card } from "react-bootstrap";
import { useLoaderData } from "react-router-dom";
import RecipeInfo from "../RecipeInfo/RecipeInfo";

const ChefDetails = () => {
  const data = useLoaderData();
  const {
    chef_name,
    chef_picture,
    likes,
    num_of_recipes,
    years_of_experience,
    description,
    recipe_info,
  } = data;
  return (
    <div className="">
      {/* chef details */}
      <div className="p-5">
        <Card>
          <div className="card-conatainer">
            <Card.Img className="chef_img" variant="top" src={chef_picture} />
            {/* chef info */}
            <Card.Body>
              <div className="ms-4">
                <h4>{chef_name}</h4>
                <p>{description}</p>
                <div>
                  <p>
                    No of Recipes :{" "}
                    <span className="fw-bold">{num_of_recipes}</span>
                  </p>
                  <p>
                    Experience :{" "}
                    <span className="fw-bold">{years_of_experience}</span>
                  </p>
                  <p>
                    Liked by <span className="fw-bold">{likes}</span> peoples
                  </p>
                </div>
              </div>
            </Card.Body>
          </div>
        </Card>
      </div>

      {/* recipe details */}
      <div>
        <div className="base-header">
          <span>
            <small className="bor_header "></small>Here are some of my Recipe
            <small className="bor_header border_right"></small>
          </span>
        </div>
      </div>
      <div className="recipe-grid p-5 pt-2">
        {recipe_info?.map((info) => (
          <RecipeInfo key={info._id} info={info} chef_name={chef_name} />
        ))}
      </div>
    </div>
  );
};

export default ChefDetails;
