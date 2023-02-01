import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';

const Nav = () => (

  <div className="nav-container">

    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(sort: {frontmatter: {id: ASC}}) {
            totalCount
            edges {
              node {
                id
                frontmatter {
                  title
                  id
                  date(formatString: "DD MMMM, YYYY")
                }
                fields {
                  slug
                }
                excerpt
              }
            }
          }
        }
      `}
      render={data2 => (
        <ul>
          {data2.allMarkdownRemark.edges.filter((element) => {
              return !element.node.fields.slug.includes('blog')
                     && element.node.frontmatter.id > 5
            }).map((element) => {
              return (
                <li key={Math.random()}>
                  <Link
                    to={element.node.fields.slug}
                  >
                    { element.node.frontmatter.title }
                  </Link>
                </li>
              )
            }
          )}
          <li className="blog-divider">
            Blog
          </li>
          {data2.allMarkdownRemark.edges.filter((element) => {
              return element.node.fields.slug.includes('blog')
            }).map((element) => {
              return (
                <li key={Math.random()}>
                  <Link
                    to={element.node.fields.slug}
                  >
                    { element.node.frontmatter.title }
                  </Link>
                </li>
              )
            }
          )}
        </ul>
      )}
    />

  </div>

)

export default Nav;
