import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function UserList(props) {
  return (
    <div>
      <h2>Listing Users-{props.users.length}</h2>
      <ul>
        {props.users.map(user => {
          return (
            <li key={user.id}>
              <Link to={`/userlist/${user.id}`}>{user.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(mapStateToProps)(UserList);
