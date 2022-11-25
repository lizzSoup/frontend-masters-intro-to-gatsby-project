import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout.js';

export default function About () {
    return (
        <Layout
            title="About This Site"
            description="More information about this site."
        >
            <main>
                <h1>About this site</h1>
                <Link to="/">Go home</Link>
            </main>
        </Layout>
    );
}