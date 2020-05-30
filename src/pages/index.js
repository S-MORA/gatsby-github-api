import React from "react"
import { graphql } from "gatsby"
import './index.css';
import RepositoryList from "../components/RepositoryList"
import NavBar from "../components/NavBar"


const IndexPage = ({ data }) => (
  <div>
   <NavBar />
   <RepositoryList repositories={data.githubData.data.organization.repositories} />
  </div>
)

export const query = graphql`
 query onGithub {
  githubData {
      data {
        organization {
          description
          repositories {
            nodes {
              description
              forks {
                totalCount
              }
              name
              pullRequests {
                totalCount
              }
              url
              watchers {
                totalCount
              }
            }
          }
        }
      }
    }
  }
`


export default IndexPage
