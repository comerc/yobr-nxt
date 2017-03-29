import React from 'react'
import { connectPage } from 'store'
import Link from 'next/link'

class Page extends React.Component {
  render () {
    return (
      <h1><Link href="/"><a>Home</a></Link></h1>
    )
  }
}

export default connectPage((state) => state)(Page)
