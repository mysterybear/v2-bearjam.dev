import React from 'react';
import Presence from './Presence';
import SEO from './SEO';

const MDXLayout = ({ children, pageContext }) => {
 return (
   <Presence>
     <SEO title={pageContext.frontmatter.title} />
      {children}
   </Presence>
 );
}

export default MDXLayout;
