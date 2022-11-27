import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Layout from '../components/layout';
import Hero from '../components/hero';

import {imageWrapper} from '../styles/index.module.css';


export default function Index () {
    const data = useStaticQuery(graphql`
        query getBlogPosts {
            allMdx(sort: {frontmatter: {date: DESC}}) {
                    nodes {
                        id
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
            <div className={imageWrapper}>
                <StaticImage src="../images/ivana-la-61jg6zviI7I-unsplash.jpg" alt="A corgi sitting on a bed with red paper hearts all over it. It looks unamused." placeholder="dominantColor" width={300} height={300} />
            </div>
            <h1>Smart.Secure.Sustainable</h1>
            <p>Imagine what home could be.</p>

            <h2>Check out my recent blog posts.</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <p>{post.frontmatter.title} posted {post.frontmatter.date}. About: {post.frontmatter.description}</p>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}