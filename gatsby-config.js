module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.testdomain.com',
        title: 'ecobee Sample Project',
        description: 'Sample project based off of frontend masters intro to gatsby course',
        image: 'https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg'
    },
    plugins: [ 
        'gatsby-plugin-react-helmet',

        // MDX config for src/posts
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'posts',
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: 'gatsby-plugin-page-creator',
            options: {
                path: `${__dirname}/src/posts`
            }
        },
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    posts: require.resolve('./src/components/post-layout.js')
                }
            }
        }
        // End MDX config
    ],
};