import React, { PropTypes } from 'react'
// import PostAdd from 'components/PostAdd'
import Page, { Header, Footer } from 'components/Page'
import Post from 'components/Post'
import { createSelector } from 'reselect'
import { connectPage } from 'app/store'
import { actions } from 'ducks/posts'
// import withRedux from 'next-redux-wrapper'
// import { initStore } from 'app/store'
// import { connect } from 'react-redux'

const PostListPage = ({ posts }) => (
  <Page>
    <Header>Header</Header>
    {/* <PostAdd/> */}
    {/* <div className={s.flows}>
      <ul>
        {Object.keys(flows).map(key =>
          <li key={key}>
            <Link to={`/flows/${key}`}>{flows[key].name}</Link>
          </li>
        )}
      </ul>
    </div> */}
    {/* TODO если массив пустой, то сообщить об отсутствии данных */}
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} isTeaser />
      ))}
    </div>
    <Footer>Footer</Footer>
  </Page>
)

PostListPage.getInitialProps = async ({ store, req }) => {
  if (req) {
    const { filterType, filterId } = req.params
    await store.dispatch(actions.fetch())
    return { filterType, filterId }
  }
  return {}
}

PostListPage.propTypes = {
  filterType: PropTypes.string,
  filterId: PropTypes.string,
  posts: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)),
  // flows: PropTypes.arrayOf(PropTypes.shape({
  //   id: PropTypes.string,
  //   name: PropTypes.string,
  // })),
}

// const getFilterType = (state, ownProps) =>
//   ownProps.filterType
//
// const getFilterId = (state, ownProps) =>
//   ownProps.filterId
//
// const getPosts = (state) =>
//   state.posts
//
// const filteredPosts = createSelector(
//   [getPosts, getFilterType, getFilterId],
//   (posts, filterType, filterId) => {
//     if (filterType === 'flow') {
//       return posts.filter(element =>
//         element.flow.id === filterId)
//     }
//     if (filterType === 'hub') {
//       // TODO фильтр по хабу
//       return []
//     }
//     if (filterType === 'all') {
//       return posts
//     }
//     return []
//   }
// )

// TODO преобразовать flows к массиву нужно тут и memoize
// TODO вынести flows в отдельный компонент

const mapStateToProps = (state, ownProps) => ({
  // posts: filteredPosts(state, ownProps)
  posts: console.log('state.posts', state.posts) || state.posts
})

// export default connectPage(mapStateToProps)(PostList)
// PostList = connect(mapStateToProps)(PostList)
// export default withRedux(initStore, mapStateToProps)(PostList)
export default connectPage(mapStateToProps)(PostListPage)
