import React from "react";
import { useParams } from "react-router-dom";
import {getRecipe} from "../../api.service"

export function Recipe() {
  const [recipe, setRecipe] = React.useState([]);
  const [steps, setSteps] = React.useState([]);

  const params = useParams()





  const getRecipeApi = async () => {
    const { data } = await getRecipe();
    console.log(data.data);
    setRecipe(data.data);
    setSteps(data.data.steps)
  };


  React.useEffect(() => {
    getRecipeApi();
  }, []);
  /*
{recipe.steps.map((step) => {
            return (
              <div>{step.text}</div>
            );
          })}*/

  return (
    <div>
      <h1>{recipe.htmltitle}</h1>
      <p>El tiempo de preparación es <b>{recipe.timestr}</b></p>
      {
        steps.map((step,num) => {
          return (
            <h3>{num+1} {step.text}</h3>
          );
        })
      }
    </div>
  );
}
