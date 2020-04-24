import React from 'react';
import { useFirestoreConnect } from "react-redux-firebase";
import { connect } from "react-redux";

const ProjectDetails = (props) => {
  useFirestoreConnect([
    {collection: 'projects'}
  ]);
  const {project} = props;
  if (project) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{project.title} - {project.id}</span>
            <p>{project.content}</p>
            <div className="card-action grey lighten-4 grey-text">
              <div>Posted by: {project.authorFirstName} {project.authorLastName}</div>
              <div>April 21, 2020</div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>
          Project Loading...
        </p>
      </div>
    )
  }
};

const mapStateToProps = (state, ownProps) => {
  // Laziness and time constraint, need to refactor
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project
  }
};

export default connect(mapStateToProps)(ProjectDetails);
