import React from 'react'
// import Link from 'components/Link'
import Link from 'next/link'
// import { actions } from 'ducks/posts'
// import { bindActionCreators } from 'redux'
// import { connectPage } from 'app/store'

const Page = ({ update }) => {
  const handleClick = () => {
    // update({ id: 7, name: 'new' })
  }
  return (
    <div>
      <Link href="/"><a>Home</a></Link>
      <button onClick={handleClick}>Send</button>
      {/* <Link href="/all"><a>All</a></Link> */}
    </div>
  )
}

Page.getInitialProps = (ctx) => {
  // console.log('ctx', ctx)
  return {}
}

// const mapDispatchToProps = (dispatch) => {
//   const { update } = actions
//   return bindActionCreators({ update }, dispatch)
// }

// export default connectPage(null, mapDispatchToProps)(Page)
export default Page
