import React from "react";
import { connect } from "react-redux";
import { startGetPost } from "../actions/posts";
import { Link } from "react-router-dom";

function UserShow(props) {
  return (
    <div>
      {props.user && (
        <div>
          <h1>UserName-{props.user.name}</h1>
          <h2>Posts Written By User</h2>
          <ul>
            {props.post.map(post => {
              return (
                <li key={post.id}>
                  <Link to={`/postlist/${post.id}`}>{post.title}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state, props) => {
  return {
    user: state.users.find(user => user.id == props.match.params.id),
    post: state.posts.filter(post => post.userId == props.match.params.id)
  };
};
export default connect(mapStateToProps)(UserShow);
