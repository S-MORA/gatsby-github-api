const fs = require(`fs`)
const fetch = require(`node-fetch`)
const { buildClientSchema } = require(`graphql`)
const { createHttpLink } = require(`apollo-link-http`)

module.exports = {
  siteMetadata: {
    title: `Github with Gatsby`,
    description: `Shows repositories with their information such as (contributors, name, starts...) from the Debt Collective organisation on Github `,
    author: `Sharon Morato`,
  },
  plugins: [
  `gatsby-plugin-react-helmet`, {
  resolve: `gatsby-source-github-api`,
      options: {
      token: `${process.env.GITHUB_TOKEN}`,
      variables: {},
      graphQLQuery: `
      query {
        organization(login: "debtcollective") {
            description
            repositories(orderBy: {field: CREATED_AT, direction: ASC}, first:100) {
              nodes {
                name
                description
                url
                pullRequests {
                  totalCount
                }
                watchers {
                  totalCount
                }
                forks {
                  totalCount
                }
               }
              }
             }
            }
          `
       }
    }
  ]
}
