import React from 'react';
import SEO from './seo';
import Presence from './presence';

const MDXLayout = ({ children, pageContext }) => {
 return (
   <Presence>
     <SEO title={pageContext.frontmatter.title} />
     {children}
   </Presence>
 );
}

export default MDXLayout;
