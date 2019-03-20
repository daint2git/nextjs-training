import Link from 'next/link'
import Head from 'next/head'

export default function Layout({ children, title = 'This is the default title' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header
        style={{
          width: '25%',
          position: 'fixed',
        }}
      >
        <nav>
          <Link href="/">
            <a>Home</a>
          </Link>
          |
          <Link scroll={false} href="/about">
            <a>About</a>
          </Link>
          |
          <Link scroll={false} href="/contact">
            <a>Contact</a>
          </Link>
          |{/* <Link href="/post?name=dai" as="/post/something#title-1"> */}
          <Link
            href={{
              pathname: '/post',
              query: { name: 'dai' },
            }}
            as={{
              pathname: '/about/something',
              hash: 'title-1',
            }}
          >
            <a>Post</a>
          </Link>
        </nav>
      </header>
      <div style={{ marginLeft: '25%', height: '200vh' }}>{children}</div>
      <footer>I'm here to stay</footer>
    </>
  )
}
