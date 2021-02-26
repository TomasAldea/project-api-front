
import React from 'react';
import { Redirect } from 'react-router-dom';
import { createProject } from '../../proyects.service';

export function NewProject() {
  const initialState = {
    title: '',
    description: '',
  };

  const [state, setState] = React.useState(initialState);
  const [redirect, setRedirect] = React.useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value});
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    await createProject(state);
    setRedirect(true);
  };
  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
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
  );
}

