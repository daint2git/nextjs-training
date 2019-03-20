// import cowsay from 'cowsay-browser'

// import style_1 from './style_1.scss'
// import style_2 from './style_2.scss'

// const CowsayHi = () => <pre>{cowsay.say({ text: 'hi there!' })}</pre>

// const Home = () => (
//   <>
//     <div className={style_1.root}>
//       <h2>Welcome to Nextjs!</h2>
//       <p style={{ color: 'red' }}>Nguyen Tran Dai</p>
//       <div className={`${style_1.example} ${style_1['example_2']}`}>test 1</div>
//       <div className={style_2['red-color']}>test 2</div>
//       <p className={`${style_2.circle}`}>circle</p>
//       <CowsayHi />
//       <style jsx>
//         {`
//           div {
//             background: yellow;
//           }

//           h2 {
//             color: red;
//           }
//         `}
//       </style>
//       <style global jsx>
//         {`
//           body {
//             background: aqua;
//           }
//         `}
//       </style>
//     </div>
//     <img src="/static/image2.jpg" />
//   </>
// )

// export default Home
// import React from 'react'
// import 'isomorphic-unfetch'
// import Layout from '../components/layout'

// function Page({ stars }) {
//   return <div>Next stars: {stars}</div>
// }

// Page.getInitialProps = async ({ req }) => {
//   console.log('getInitialProps')
//   const res = await fetch('https://api.github.com/repos/zeit/next.js')
//   const json = await res.json()
//   console.log('json ne', JSON.stringify(json, null, 2))
//   return { stars: json.stargazers_count }
// }

// export default () => (
//   <Layout>
//     <div>Hello World.</div>
//     <Page />
//   </Layout>
// )
// import React from 'react'
// import Layout from '../components/layout'
// import axios from 'axios'

// const Index = ({ data }) => {
//   console.log('Index')
//   return (
//     <Layout>
//       <div>Hello World.</div>
//       {data.map(i => (
//         <div key={i.id}>{i.title}</div>
//       ))}
//     </Layout>
//   )
// }

// Index.getInitialProps = async () => {
//   console.log('getInitialProps')
//   const res = await axios.get('http://localhost:8080/posts')
//   const data = await res.data
//   // console.log('json', json)
//   // return { stars: json.stargazers_count }
//   return { data }
// }

// export default Index

// import Header from '../components/Header'

// export default () => (
//   <div>
//     <Header />
//     <p>HOME PAGE is here!</p>
//   </div>
// )

import React from 'react'
import Link from 'next/link'
import Router, { withRouter } from 'next/router'
import { format } from 'url'

let counter = 1

class Index extends React.Component {
  static getInitialProps({ res }) {
    if (res) {
      return { initialPropsCounter: 1 }
    }

    counter++
    return {
      initialPropsCounter: counter,
    }
  }

  reload() {
    const { pathname, query } = Router
    Router.push(format({ pathname, query }))
  }

  incrementStateCounter = () => {
    const { router } = this.props
    const currentCounter = router.query.counter ? parseInt(router.query.counter) : 0
    const href = `/?counter=${currentCounter + 1}`
    Router.push(href, href, { shallow: true })
  }

  render() {
    const { initialPropsCounter, router } = this.props

    return (
      <div>
        <h2>This is the Home Page</h2>
        <Link href="/about">
          <a>About</a>
        </Link>
        <button onClick={this.reload}>Reload</button>
        <button onClick={this.incrementStateCounter}>Change State Counter</button>
        <p>"getInitialProps" ran for "{initialPropsCounter}" times.</p>
        <p>
          Counter: "{router.query.counter || 0}
          ".
        </p>
      </div>
    )
  }
}

export default withRouter(Index)
