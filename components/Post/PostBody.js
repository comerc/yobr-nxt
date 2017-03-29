import React, { PropTypes } from 'react'
import cx from 'classnames'

const PostBody = ({ isTeaser, content, children }) => (
  <div className={isTeaser ? s.crop : null}>
    <div
      className={cx(s.content, s.htmlFormat)}
      // TODO dangerouslySetInnerHTML={{ __html: content }}
    >{content}</div>
    {children}
  </div>
)

PostBody.propTypes = {
  isTeaser: PropTypes.bool,
  content: PropTypes.string,
  children: PropTypes.element,
}

export default PostBody
