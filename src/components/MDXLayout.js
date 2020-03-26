import React from 'react';
import Presence from './presence';
import SEO from './seo';

const MDXLayout = ({ children, pageContext }) => {
 return (
   <Presence>
     <SEO title={pageContext.frontmatter.title} />
      {children}
   </Presence>
 );
}

export default MDXLayout;
