import { useLoaderData, useNavigate, useParams } from "react-router-dom";
const PostDetails = () => {
  const post = useLoaderData();
  const { postId } = useParams();
  const { id, title, body } = post;
  const navigate = useNavigate();

  console.log(postId);

  const handleGoBack = () => {
    // -1 mane 1 step pichone jaw.
    navigate(-1);
  };
  return (
    <div>
      <h3>Post Details about : {id} </h3>
      <p>Title : {title}</p>
      <p>
        <small>{body}</small>
      </p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetails;
