import React from "react";
import { connect } from "react-redux";
import ProfileView from "./view";

const ProfileScreen = ({ user, tasks }) => {
  return <ProfileView user={user} taskCount={tasks.length} />;
};

const mapStateToProps = (state) => ({
  user: state.auth.user, 
  tasks: state.tasks || [], 
});

export default connect(mapStateToProps)(ProfileScreen);
