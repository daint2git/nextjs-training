import React from 'react'
import Layout from '../components/layout'

function Post({ data }) {
  return (
    <Layout title="Post">
      <div>{`Post ${data.name}`}</div>
    </Layout>
  )
}

Post.getInitialProps = async ({ query }) => {
  console.log('SLUG', query)
  return { data: query }
}

export default Post
