import React from 'react';
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { useFirestoreConnect } from "react-redux-firebase";

const Dashboard = (props) => {
  useFirestoreConnect([
    {collection: 'projects'}
  ]);

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={props.projects}/>
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications/>
        </div>
      </div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    projects: state.firestore.ordered.projects
  };
};

export default connect(mapStateToProps)(Dashboard);

