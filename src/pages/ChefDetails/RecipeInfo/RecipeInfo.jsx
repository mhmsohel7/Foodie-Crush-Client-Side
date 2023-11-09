import React, { useState } from "react";
import recipeImg from "../../../assets/icons/recipe.png";
import { Button, Card } from "react-bootstrap";
import Rating from "react-rating";
import { FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecipeInfo = ({ info, chef_name }) => {
  const [disable, setDisable] = useState(false);
  const {
    cooking_method,
    ingredients,
    rating,
    recipe_name,
    recipe_picture,
    _id,
  } = info;

  const handleFav = () => {
    if (!disable) {
      toast.success("You added this recipe in Favorite list");
      setDisable(true);
    }
  };
  return (
    <div className="">
      <Card>
        <div className="p-4">
          <h2>
            <img className="w-10 me-2" src={recipeImg} alt="" />
            {recipe_name}
          </h2>
          <div className="">
            {/* rating dekate hole age: "npm install --save react-rating" korte hobe */}
            <Rating
              placeholderRating={rating}
              readonly
              emptySymbol={<FaRegStar />}
              placeholderSymbol={<FaStar className="text-warning" />}
              fullSymbol={<FaStar />}
            ></Rating>
            <span className="ms-4 fw-bold">{rating}</span>
          </div>

          <ol className="list_style">
            <li>
              <span className="fs-5 fw-bold ">Ingredients</span>
              <ul className="pl-5 mt-2 ">
                {ingredients?.map((ingredient) => (
                  <li>{ingredient}</li>
                ))}
              </ul>
            </li>
            <li className="mt-2">
              <span className="fs-5 fw-bold ">Cooking Method</span>
              <ul className="hight_4 overflow-scroll overflow-x-hidden pe-5 mt-2 ">
                {cooking_method?.map((method) => (
                  <li>{method}</li>
                ))}
              </ul>
            </li>
            <li></li>
          </ol>
          <Button
            type="button"
            onClick={handleFav}
            className={!disable ? "" : "disabled"}
          >
            Add Favourite
          </Button>
        </div>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default RecipeInfo;
