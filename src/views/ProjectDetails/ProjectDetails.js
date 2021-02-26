import React from "react";
import { getProject } from "../../proyects.service";
import { useParams } from "react-router-dom";

export function ProjectDetails() {
  const [details, setDetails] = React.useState([]);

  const params = useParams();

  const projectsApi = async (projectId) => {
    const { data } = await getProject(params.projectId);
    console.log("hola")
    setDetails(data.data);
  };
console.log("details", details)

  React.useEffect(() => {
    projectsApi();
  }, []);

  return (
<div>
    <h2>{details.title}</h2>
    <h3>{details.description}</h3>
    <h2>Task list</h2>
</div>

  )
}
