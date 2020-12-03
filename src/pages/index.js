import React, { Component } from "react"
import { Link, graphql } from "gatsby"

class Homepage extends Component {
  render() {
    const data = this.props.data

    return (
      <>
        {/* <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))}
        </div> */}

        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <div>{node.date}</div>
            <div>{node.author.name}</div>
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