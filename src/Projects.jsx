import React, { Component } from "react";
import { Container, Grid } from "semantic-ui-react";
import ProjectCard from "./ProjectCard";
import axios from "axios";

class Projects extends Component {

  state = {
    projects: [],
  };

  componentDidMount() {
    axios.get("./data/projects.json").then((response) => {
      this.setState({ projects: response.data });
    });
  };

  render() {
    const { projects } = this.state;

    let projectsList = projects.map((project) => {
      return (
        <div id={`project-${project.id}`} key={project.id}>
          <ProjectCard project={project} />
        </div>
      );
    });

    return (
      <Container>
        <h1 id="project-header">My Projects</h1>
        <Grid>{projectsList}</Grid>
      </Container>
    );
  }
}

export default Projects;