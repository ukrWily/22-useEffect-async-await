function Post({ userId, id, title, body }) {
  //
  return (
    <div className="post">
      <p>userId: {userId}</p>
      <small>id: {id}</small>
      <h3>title: {title}</h3>
      <p>body: {body}</p>
    </div>
  );
}
export default Post;
