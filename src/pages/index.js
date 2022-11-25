import * as React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';


export default function Index () {
    return (
        <Layout>
            <h1>Hello Frontend Masters</h1>
            <Link to="/about">About this site</Link>
        </Layout>
    );
}