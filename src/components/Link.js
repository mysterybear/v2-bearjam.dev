import { motion } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';
import React, { forwardRef } from 'react';

const Link = motion.custom(forwardRef((props, ref) => (
  <GatsbyLink innerRef={ref} {...props} />
)))

export default Link
