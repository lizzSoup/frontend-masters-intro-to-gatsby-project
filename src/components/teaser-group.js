import * as React from 'react';

export default function TeaserGroup({
  heading,
  headingAs,
  children,
  as = 'div',
  ...rest
}) {
  const Element = as;
  const Heading = headingAs;
  return (
    <Element {...rest}>
      <Heading className="heading">{heading}</Heading>
      {children}
    </Element>
  );
}
