function Posts(props) {
  return (
    <div>
      <h1>{`My blog post #${props.postId}`}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua.
      </p>
    </div>
  )
}

Posts.getInitialProps = ({ query: { id } }) => {
  return { postId: id }
}

export default Posts
