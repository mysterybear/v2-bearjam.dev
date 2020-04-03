import React from 'react';
import ButtonLink from '../components/ButtonLink';
import SvgIsometricOne from '../components/SvgIsometricOne';
import Presence from '../components/Presence';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';

const Headline = () => (
  <section className="my-3 flex items-center flex-col sm:flex-row">
    <motion.div
      className="w-full mb-4 sm:order-last sm:flex-1"
      variants={{
        enter: {
          opacity: 1,
          x: 0
        },
        exit: {
          opacity: 0,
          x: 50
        }
      }}
    >
      <SvgIsometricOne className="w-full"/>
    </motion.div>
    <motion.div
      className="my-6 text-center sm:flex-1 sm:text-left"
      variants={{
        enter: {
          opacity: 1,
          x: 0
        },
        exit: {
          opacity: 0,
          x: -50
        }
      }}
    >
      <h1 className="leading-10">Lalala doing nice websites and ones</h1>
      <p className="leading-6 tracking-wide">Learning about ones by making ones, then building ones for you too. You can learn with us by reading our blog, and you can work with us.</p>
      <div className="flex justify-center mt-6 sm:justify-start">
        <ButtonLink to="/blog">Read more</ButtonLink>
      </div>
    </motion.div>
  </section>
)

const StuffWeDo = () => (
  <section className="mt-8">
    <h1 className="leading-10 text-center sm:text-left">What do we do? We do this...</h1>
    <p className="mt-4 leading-6 tracking-wide">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium iusto animi mollitia qui tenetur obcaecati consectetur reprehenderit nulla? Blanditiis, deserunt commodi molestiae quisquam repudiandae odit in molestias nobis quis enim!</p>
  </section>
)

const IndexPage = () => {
 return (
   <Presence key="indexPage" className="mx-3">
     <SEO title="Home" />
     <Headline />
     <StuffWeDo />
   </Presence>
 );
}

export default IndexPage;
