import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function PostList(props) {
  return (
    <div>
      <h2>Listing Posts -{props.posts.length}</h2>
      <ul>
        {props.posts.map(post => {
          return (
            <li key={post.id}>
              <Link to={`postlist/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
const mapStateToProps = state => {
  return { posts: state.posts };
};
export default connect(mapStateToProps)(PostList);
