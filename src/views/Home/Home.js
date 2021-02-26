import React from "react";
import { getProjects } from "../../proyects.service";
import { useParams } from "react-router-dom";
import {removeProject} from "../../proyects.service"
import { Link } from "react-router-dom";
import "./Home.css"

export function Home() {
  const [projects, setProjects] = React.useState([]);

  const params = useParams()

  const projectsApi = async () => {
    const { data } = await getProjects();
    setProjects(data.data);
  };

  const removeById = async (projectId) => {
    const { data } = await removeProject(params.projectId);
    setProjects(projects => projects.filter(project => project._id === projectId))
  }

  React.useEffect(() => {
    projectsApi();
  }, []);


  return (
    <div>
      <h1>Projects</h1>
      <div className="table-container">
        <table className="zui-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>created at</th>
              <th>last update</th>
              <th>Details</th>
              <th>Close</th>
            </tr>
          </thead>
          {projects.map((project) => {
            return (
              <tbody key={project._id}>
                <tr>
                  <td>{project.title}</td>
                  <td>{project.createdAt}</td>
                  <td>{project.updatedAt}</td>
                  <td>
                    <Link to={`/projects/${project._id}`}>
                      <button>See more</button>
                    </Link>
                  </td>
                  <td>
                    <Link to={`/${project._id}`}><button onClick={removeById}>Delete</button></Link>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </div>
  );
}
