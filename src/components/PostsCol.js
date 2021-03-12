import PostsHeader from './PostsHeader'

export const PostsCol = props => {
  const { posts, postsTitle, loading, error } = props;
  return (
    <div className='usersposts-div'>
      <PostsHeader title={postsTitle}></PostsHeader>
      <div className='posts_body up'>
        {loading === false &&
          !error &&
          posts.map((post, index) => (
            <div className='post_container' key={index}>
              <div>
                <img
                  alt="user avatar"
                  className='post_user_img'
                  src='https://i.imgur.com/echx0GQ.png'
                ></img>
                <div className='user_name'>{post.userId}</div>
              </div>
              <div className='post_title'>{post.title}</div>
              <div className='post_body'>{post.body}</div>
              <hr className='post_hr' />
            </div>
          ))}
        {loading && <div className='post_title'>Loading...</div>}
        {error && (
          <div className='post_error'>
            ERROR LOADING POSTS.
            <br /> TRY AGAIN LATER
          </div>
        )}
      </div>
    </div>
  )
}

export default PostsCol
