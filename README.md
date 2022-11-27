# Frontend Masters Intro to Gatsby with Jason Lengstorf

This is the project we'll build together to introduce you to Gatsby!

See the [workshop site](https://frontendmasters.learnwithjason.dev/intro-to-gatsby/) for more details.

---

## ecobee sample project with Lizz Rennie

Hello, ecopeeps! This project is built ontop of the FEM Intro to Gatsby code-along course by Jason Lengstorf.

---

### Local development
- Run `npm-run-develop` to start the project on port [localhost:800](localhost:8000)
- Click here to access [GraphiQL](http://localhost:8000/___graphql)

### Build 
- Run `npm-run-build`
- Run `npm-run-serve`
- View at [localhost:9000](http://localhost:9000)

### Styles
- This project is using [CSS modules](https://www.gatsbyjs.com/docs/how-to/styling/css-modules/)

### Plugins
- React Helmet [react-helmet](https://www.npmjs.com/package/react-helmet)
- Gatsby Plugin MDX [gatsby-plugin-mdx](https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/)
- Gatsby Source Filesystem [gatsby-source-filesystem](https://www.gatsbyjs.com/plugins/gatsby-source-filesystem/)
- Gatsby Plugin Page Creator 
- Gatsby Plugin Image [gatsby-plugin-image](https://www.gatsbyjs.com/plugins/gatsby-plugin-image/)
- Gatsby Plugin Sharp [gatsby-plugin-sharp]
- Gatsby Transformer Sharp 
<!-- * Library for transforming markdown -->
- Gatsby Remark Images

### Notes
- Squoosh.app to reduce filesize - even though gatbsy processes images for us, it still has to store the original filesize to memory
- "Headless means we store the data and provide APIs to access it"