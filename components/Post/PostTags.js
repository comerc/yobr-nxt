import React, { PropTypes } from 'react'
import { urlencode } from 'src/core/utils'
import Link from 'next/link'

const PostTags = ({ tags }) => {
  if (!tags || tags.length === 0) {
    return null
  }
  return (
    <ul>
      {tags.map(tag =>
        <li key={tag}>
          <Link
            to={`/search/?q=%5B${urlencode(tag)}%5D&target_type=posts`}
            rel="tag"
          >{tag}</Link>
        </li>
      )}
    </ul>
  )
}

PostTags.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default PostTags
