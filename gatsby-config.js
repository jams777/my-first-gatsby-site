module.exports = {
    siteMetadata: {
        title: "My First Gatsby Site",
        siteUrl: `https://myfirstgatsbysitemain31041.gatsbyjs.io`,
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
        },
    ]
}