import React from "react";
import { getProject } from "../../proyects.service";
import { updateProject } from "../../proyects.service";
import { useParams } from "react-router-dom";



export function ProjectDetails() {

  //-------update--------//
  const initialState = {
    title: '',
    description: '',
  };

 const [state, setState] = React.useState(initialState);
 const [details, setDetails] = React.useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value});
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
   // await updateProject(state);
  };

  //------details-------// 
  const params = useParams();

  const projectsApi = async (projectId) => {
    const { data } = await getProject(params.projectId);
    setDetails(data.data);
  };

  React.useEffect(() => {
    projectsApi();
  }, []);

  return (
    <div>
      <h2>{details.title}</h2>
      <h3>{details.description}</h3>
      <h2>Task list</h2>
      <button>Edit</button>
      <form
      onSubmit={handleSubmit}
      style={{
        
        display: 'flex',
        flexDirection: 'column',
        width: '500px',
        margin: '10px auto',
      }}
    >
      <label htmlFor="name">Title</label>
      <input
        type="text"
        name="title"
        id="name"
        value={state.title}
        onChange={handleChange}
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
        value={state.description}
        onChange={handleChange}
      />
      <button type="submit">Create</button>
    </form>
    </div>
    
  );
}
