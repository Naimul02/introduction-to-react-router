import { Link, useNavigate } from "react-router-dom";
const Post = ({ post }) => {
  const { id, title } = post;

  // btn a click ba onno kichu te click korle tumi kono ekta route a jete caw . se khetre tumi useNavigate() use korte paro.
  const navigate = useNavigate();

  const postStyle = {
    border: "2px solid green",
    padding: "5px",
    borderRadius: "20px",
  };

  const handleShowDetail = () => {
    navigate(`/post/${id}`);
  };
  return (
    <div style={postStyle}>
      <h3>Post of id : {id}</h3>
      <p>{title}</p>
      <Link to={`/post/${id}`}>Post Detail</Link>
      <Link to={`/post/${id}`}>
        <button>Show Details</button>
      </Link>

      <button onClick={handleShowDetail}>Click to see details</button>
    </div>
  );
};

export default Post;
