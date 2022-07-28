/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// })

// const strapiConfig = {
//   apiURL: "htttps://localhost:1337/api", //process.env.STRAPI_API_URL,
//   // accessToken: process.env.STRAPI_TOKEN,
//   queryLimit: 1000, //Defaults to 100
//   collectionTypes: [
//     {
//       name: `job`,
//       endpoint: `jobs/?populate=desc`,
//     },
//   ],
// }

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Awesome WebDev Portfolio built with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`,
    url: `http://localhost:8000`, //siteweb url deployed not localhost
    twitterUsername: `@john_doe`,
    image: `/mainImg.png`,
  },

  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`jobs`, `projects`],
        //If using single types place them in this array.
        singleTypes: [`about`],
        // Possibility to login with a strapi user, when content types are not publically available (optional).
      },
    },
  ],
}
