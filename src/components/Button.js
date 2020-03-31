import React from 'react';
import cx from 'classnames'

const Button = ({
  className,
  children,
  ...props
}) => {
  return (
    <button
      className={cx("bg-pink-400 px-4 py-2 rounded-lg shadow-md border-2", className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
