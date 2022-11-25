import * as React from 'react';
import { Link } from 'gatsby';

export default function custom404 () {
    return (
        <main>
            <h1>Sorry, the page you're looking for could not be found!</h1>
            <Link to="/">Go home</Link>
        </main>
    );
}