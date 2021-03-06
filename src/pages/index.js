import React from 'react';
import ButtonLink from '../components/ButtonLink';
import SvgIsometricOne from '../components/SvgIsometricOne';
import Presence from '../components/Presence';
import SEO from '../components/SEO';
import { motion } from 'framer-motion';
import { springTwo, springQuickExit } from '../utils/transitionProps';

const defaultVariants = i => ({
  enter: {
    opacity: 1,
    x: 0,
    transition: {
      ...springTwo
    }
  },
  exit: {
    opacity: 0,
    x: i % 2 == 0 ? -200 : 200,
    transition: {
      ...springQuickExit,
      // restSpeed: 0.5,
      // restDelta: 0.5
      // do more
    }
  }
})

const IndexPage = () => {
  return (
    <Presence key="indexPage" className="mx-3">
      <SEO title="Home" />
      <Headline />
      <StuffWeDo />
    </Presence>
  );
}

const Headline = () => (
  <section className="mt-5 sm:mt-8 flex items-center flex-col sm:flex-row sm:justify-between">
    <motion.div
      className="w-full mb-4 sm:order-last sm:flex-1 flex justify-end max-w-lg"
      variants={defaultVariants(1)}
    >
      <SvgIsometricOne className="w-full" />
    </motion.div>
    <motion.div
      className="my-6 text-center sm:flex-1 sm:text-left sm:max-w-xs"
      variants={defaultVariants(0)}
    >
      <h1 className="leading-10">Let’s build lovely web experiences</h1>
      <p className="leading-6 tracking-wide my-6">You can learn with us by reading our blog, and you can work with us.</p>
      <div className="flex justify-center mt-6 sm:justify-start">
        <ButtonLink to="/blog">Read blog</ButtonLink>
      </div>
    </motion.div>
  </section>
)

const StuffWeDo = () => (
  <section className="mt-12 sm:mt-0">
    <motion.h1
      className="leading-10 text-center sm:text-left"
      variants={defaultVariants(0)}
    >What stuff do we do?<br />Let us tell you</motion.h1>
    <div className="flex flex-wrap justify-between">
      {[
        {
          header: "User experiences",
          blurb: "We want the web to be a lovely place. For us, that means optimising for accesibility and speed, creating sites and apps that work well for all users regardless of their ability or internet bandwidth. A sound structure is the foundation and we bring this to life with playful design."
        },
        {
          header: "Visual Identity",
          blurb: "All the stuff that makes information look pretty. Logo design, typography, colour palettes, illustrations, visualiastions, photos and more(!). Developing your visual identity begins with getting to know you, your business and goals. Then we design unique brand assets that reflect your story."
        },
        {
          header: "Web Development",
          blurb: "We've tried and tested a bunch of frameworks and tools to find what is most powerful for you. Using the JAMstack approach (WTF is JAMstack?) means your sites and apps are super-fast and secure. Our modular, reusable building style makes it easy to scale up."
        },
        {
          header: "Creative Collaboration",
          blurb: "We want the web to be a lovely place. For us, that means optimising for accesibility and speed, creating sites and apps that work well for all users regardless of their ability or internet bandwidth. A sound structure is the foundation and we bring this to life with playful design."
        },
      ].map(({ header, blurb }, i) => (
        <motion.div
          key={header}
          className="w-full sm:w-5/12 sm:flex-grow sm:max-w-xs lg:max-w-sm mt-8"
          variants={defaultVariants(i)}
        >
          <h3>{header}</h3>
          <p className="my-2 sm:pr-8 md:pr-4 lg:pr-0">{blurb}</p>
        </motion.div>
      ))}
    </div>
  </section>
)

export default IndexPage;
