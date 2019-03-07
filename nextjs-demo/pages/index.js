import cowsay from 'cowsay-browser'

import style_1 from './style_1.scss'
import style_2 from './style_2.scss'

const CowsayHi = () => <pre>{cowsay.say({ text: 'hi there!' })}</pre>

const Home = () => (
  <>
    <div className={style_1.root}>
      <h2>Welcome to Nextjs!</h2>
      <p style={{ color: 'red' }}>Nguyen Tran Dai</p>
      <div className={`${style_1.example} ${style_1['example_2']}`}>test 1</div>
      <div className={style_2['red-color']}>test 2</div>
      <p className={`${style_2.circle}`}>circle</p>
      <CowsayHi />
      <style jsx>
        {`
          div {
            background: yellow;
          }

          h2 {
            color: red;
          }
        `}
      </style>
      <style global jsx>
        {`
          body {
            background: aqua;
          }
        `}
      </style>
    </div>
    <img src="/static/image2.jpg" />
  </>
)

export default Home
