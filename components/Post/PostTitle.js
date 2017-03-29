import React, { PropTypes } from 'react'
import { ga } from 'app/utils'
import Link from 'next/link'

const PostTitle = ({ isTeaser, flow, id, title, isDraft }) => (
  <div>
    <h1>
      {isTeaser ?
        <span>
          <Link className={s.flow} to={`/post/flow/${flow.id}/`} onClick={ga('flow', 'feed page', flow.name)}>{flow.name}</Link>
          <span className={s.arrow}> → </span>
          <Link className={s.link} to={`/post/${id}/`}>{title}</Link>
        </span>
      :
        {title}
      }
      {isDraft && <sup>&nbsp;*&nbsp;черновик</sup>}
      <sup>&nbsp;<Link className={s.link} to={`/post/${id}/edit`}>edit</Link></sup>
    </h1>
  </div>
)

PostTitle.propTypes = {
  isTeaser: PropTypes.bool,
  flow: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  id: PropTypes.number,
  title: PropTypes.string,
  isDraft: PropTypes.bool,
}

export default PostTitle
