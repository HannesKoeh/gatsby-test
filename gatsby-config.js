module.exports = {
  siteMetadata: {
    title: `An example to learn how to source data from WordPress`,
    description: `Sourcing data from WordPress`,
  },
  plugins: [
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        /*
         * The base URL of the WordPress site without the trailingslash and the protocol. This is required.
         * Example : 'dev-gatbsyjswp.pantheonsite.io' or 'www.example-site.com'
         */
        /*
        baseUrl: `backend.esc-geretsried.de`, //demo.wp-api.org
        */
        baseUrl: `escwp.azurewebsites.net`,
        protocol: `https`,
        hostingWPCOM: false,
        useACF: true,
        minimizeDeprecationNotice: true
      },
    },
    {
      resolve: `gatsby-theme-blog`,
      options: {
        preset: `theme-ui-sketchy-preset`,
        prismPreset: `oceanic-next`,
        webfontURL:
          "https://fonts.googleapis.com/css?family=Architects+Daughter",
      },
    },
  ],
}

