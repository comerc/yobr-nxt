import React from 'react'
import Link from 'next/link'

const LinkWrapper = ({ children, ...props }) =>
  <Link {...props}><a>{children}</a></Link>

export default LinkWrapper
