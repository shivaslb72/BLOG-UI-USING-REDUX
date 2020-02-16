import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";

function PostShow(props) {
  console.log(props, "heerere");
  return (
    <div>
      {props.post && (
        <div>
          <h1>USERNAME-{props.user ? props.user.name : "invalid"}</h1>
          <h2>TITLE-{props.post.title}</h2>
          <h3>BODY-{props.post.body}</h3>
          <h4>COMMENTS-</h4>
          <ul>
            {props.comment
              ? props.comment.map(comment => {
                return <li key={comment.id}>{comment.body}</li>;
              })
              : "invalid"}
          </ul>
          <h3>
            More Posts Of Authors -{" "}
            <Link to={`/userlist/${props.user.id}`}>{props.user.name}</Link>
          </h3>
        </div>
      )}
    </div>
  );
}
const mapStateToProps = (state, props) => {
  return {
    post: state.posts.find(post => post.id == props.match.params.id),
    user: state.users.find(user => user.id == (state.posts.find(post => post.id == props.match.params.id) &&
      state.posts.find(post => post.id == props.match.params.id).userId)),
    comment: state.comments.filter(
      comment => comment.postId == props.match.params.id
    )
  };
};
export default connect(mapStateToProps)(PostShow);
