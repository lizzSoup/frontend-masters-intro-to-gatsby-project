import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Hero from '../components/hero';


export default function Index () {
    const data = useStaticQuery(graphql`
        query getBlogPosts {
            allMdx(sort: {fields: frontmatter___date, order: DESC}) {
                    nodes {
                        id
                        slug
                        frontmatter {
                            title
                            date
                            description
                        }
                }
            }
        }
    `);

    const posts = data.allMdx.nodes;

    return (
        <Layout>
            <Hero />
            <h1>Smart.Secure.Sustainable</h1>
            <p>Imagine what home could be.</p>

            <h2>Check out my recent blog posts.</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={post.slug}>{post.frontmatter.title}</Link> posted {post.frontmatter.date}. About: {post.frontmatter.description}
                    </li>
                )) }
            </ul>
        </Layout>
    );
}