import React from 'react'
import { connectPage } from 'app/store'
import Link from 'next/link'

class Page extends React.Component {
  render () {
    return (
      <h1><Link href="/"><a>Home</a></Link></h1>
    )
  }
}

Page.getInitialProps = async (ctx) => {
  // console.log('ctx', ctx)
  return {}
}

export default connectPage()(Page)
// export default Page
