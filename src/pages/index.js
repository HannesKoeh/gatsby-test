import React, { Component } from "react"
import { Link, graphql } from "gatsby"

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2><span dangerouslySetInnerHTML={{__html: node.title}} /></h2>
            </Link>
            <div>{node.date}</div>
          
            <div>{node.categories.name}</div>
            <div><span dangerouslySetInnerHTML={{__html: node.excerpt}} /></div>
            
            <div><ul>{node.categories.map(cat=>(
              <div><li>{cat.name}</li></div>
            ))}</ul></div>
          </div>
        ))}
      </>
    )
  }
}

export default Homepage

export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          date
          excerpt
          slug
          categories { id, name }
          author { name }
        }
      }
    }
  }
`
