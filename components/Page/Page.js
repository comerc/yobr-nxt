import React, { PropTypes } from 'react'

const Page = ({ children }) => (
  <div>
    {children}
  </div>
)

Page.propTypes = {
  children: PropTypes.any.isRequired,
}

export { Header } from './Header'
export { Footer } from './Footer'
export default Page
