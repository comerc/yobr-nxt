import { connectPage } from 'app/store'

const posts = [
  { slug: 'hello-world', title: 'Hello world' },
  { slug: 'another-blog-post', title: 'Another blog post' }
]


const Page = ({ post: { title } }) => (
  <div>{title}</div>
)

Page.getInitialProps = async ({ req: { params: { slug } } }) => {
  const post = posts.find(post => post.slug === slug)
  if (!post) {
    const err = new Error()
    err.code = 'ENOENT'
    throw err
  }
  return { post }
}

export default Page
