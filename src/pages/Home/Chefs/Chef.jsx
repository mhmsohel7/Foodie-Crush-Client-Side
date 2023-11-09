import { useLoaderData } from "react-router-dom";
import ChefCard from "./ChefCard";

const Chef = () => {
  const chefData = useLoaderData();
  return (
    <div>
      <div className="base-header">
        <span>
          <small className="bor_header "></small>Meet Our Awesome Chef
          <small className="bor_header border_right"></small>
        </span>
      </div>
      <div className="chef_container">
        {chefData.map((chef) => (
          <ChefCard key={chef.id} chef={chef}></ChefCard>
        ))}
      </div>
    </div>
  );
};

export default Chef;
