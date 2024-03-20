import { Link } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title } = post;

  const postStyle = {
    border: "2px solid green",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={postStyle}>
      <h3>Post of id : {id}</h3>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>
    </div>
  );
};

export default Post;
