import Router from 'next/router'

export default () => (
  <div>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/error">Error</Link>
  </div>
)

function onClickHandler(href) {
  return e => {
    e.preventDefault()
    Router.push(href)
  }
}

const Link = ({ children, href }) => (
  <a href="#" style={{ marginRight: '20px' }} onClick={onClickHandler(href)}>
    {children}
  </a>
)
