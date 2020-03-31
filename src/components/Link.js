import { motion } from 'framer-motion';
import { Link as GatsbyLink } from 'gatsby';
import React, { forwardRef } from 'react';
import cx from 'classnames'

const Link = motion.custom(forwardRef((props, ref) => (
  <GatsbyLink innerRef={ref} {...props} />
)))

export default ({ className, ...props }) =>
  <Link
    className={className ? className : "text-purple-100"}
    {...props}
  />
