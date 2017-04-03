import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import PostHeader from './PostHeader'
import PostBody from './PostBody'
import PostReadMore from './PostReadMore'
import PostTags from './PostTags'
import PostInfoPanel from './PostInfoPanel'

const Post = ({ id, published, flow, hubs, title, isDraft,
  author, company, tags, content, viewsCount, favoritesCount, isTeaser }) => (
  <div>
    <PostHeader isTeaser {...{ id, published, flow, hubs, title, isDraft }} />
    <PostBody isTeaser {...{ content }}>
      {isTeaser
        ?
        <PostReadMore {...{ id }} />
        :
        <PostTags {...{ tags }} />
      }
    </PostBody>
    <div className="footer">
      <PostInfoPanel isTeaser {...{ id, author, viewsCount, favoritesCount }} />
    </div>
    <br/>
  </div>
)

Post.propTypes = {
  id: PropTypes.number,
  published: PropTypes.string,
  flow: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }),
  hubs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  })).isRequired,
  title: PropTypes.string,
  isDraft: PropTypes.bool,
  author: PropTypes.shape({
    id: PropTypes.number,
    nick: PropTypes.string,
    name: PropTypes.string,
    specialization: PropTypes.string,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
    })),
    votingCounter: PropTypes.number,
    karma: PropTypes.number,
    rating: PropTypes.number,
  }),
  company: PropTypes.shape({
    id: PropTypes.number,
    avatar: PropTypes.string,
    name: PropTypes.string,
    specialization: PropTypes.string,
    contacts: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
    })),
    rating: PropTypes.number,
  }),
  tags: PropTypes.arrayOf(PropTypes.string),
  content: PropTypes.string,
  viewsCount: PropTypes.number,
  favoritesCount: PropTypes.number,
  isTeaser: PropTypes.bool,
}

export default Post
