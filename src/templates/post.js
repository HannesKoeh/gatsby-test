import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <>
        <h1><span dangerouslySetInnerHTML={{__html: post.title}} /></h1>
        <div>{post.date}</div>
        <div><span dangerouslySetInnerHTML={{__html: post.content}}/></div>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post
export const postQuery = graphql`
query {
posts (first:1) {
    edges {
      node  {
        id
        title
        date
        content
        categories {
          nodes {
            id
            name
          }
        }
        author {
          node {
            name
          }
        }
      }
    }
  }
}
`
export const postQueryold = graphql`
  query($id: String!) {
    wordpressPost(id: { eq: $id }) {
      title
      date
      content
    }
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
