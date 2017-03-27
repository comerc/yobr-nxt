import React from 'react'
import 'isomorphic-fetch'
import Link from 'next/link'

const Page = (props) => (
  <div>
    Preact stars: {props.stars}
    <Link href="/redux"><a>Redux</a></Link>
  </div>
)

Page.getInitialProps = async ({ req }) => {
  console.log('Page.getInitialProps')
  const res = await fetch('https://api.github.com/repos/developit/preact')
  const json = await res.json()
  return { stars: json.stargazers_count }
}

export default Page
