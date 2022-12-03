import * as React from 'react';

export default function RichText({ html }) {
  return (
    <div dangerouslySetInnerHTML={{ __html: html }} className="rich-text" />
  );
}
