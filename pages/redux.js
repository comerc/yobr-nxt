import React from 'react'
import { connectPage } from 'lib/store'
import Test from 'components/Test'
import Link from 'next/link'

class Page extends React.Component {
  render () {
    return (
      <h1><Test/><Link href="/"><a>Home</a></Link></h1>
    )
  }
}

export default connectPage((state) => state)(Page)
