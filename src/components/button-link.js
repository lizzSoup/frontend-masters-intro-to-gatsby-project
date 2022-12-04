import * as React from 'react';
import { Link } from 'gatsby';

export default function ButtonLink({ path, label }) {
  return (
    <Link to={path} className="button">
      {label}
    </Link>
  );
}
