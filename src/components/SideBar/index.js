import {IoMdHome} from 'react-icons/io'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {VscListFlat} from 'react-icons/vsc'

import {Link} from 'react-router-dom'

import './index.css'

import {UlContainer, Li, Para, Div, Img} from './styledComponents'

import NxtWatchcontext from '../../context/NxtWatchcontext'

const SideBar = () => (
  <NxtWatchcontext.Consumer>
    {value => {
      const {isDarkMode} = value
      const backgroundColor = isDarkMode ? '#424242' : '#ffffff'
      const color = isDarkMode ? '#ffffff' : '#1e293b'
      const linkColor = isDarkMode ? 'lightMode' : 'darkMode'

      return (
        <Div width="20%" backgroundColor={backgroundColor}>
          <UlContainer>
            <Link to="/" className={`${linkColor} link`}>
              <Li>
                <IoMdHome />
                <Para color={color}>Home</Para>
              </Li>
            </Link>
            <Link to="/trending" className={`${linkColor} link`}>
              <Li>
                <HiFire />
                <Para color={color}>Trending</Para>
              </Li>
            </Link>
            <Link to="/gaming" className={`${linkColor} link`}>
              <Li>
                <SiYoutubegaming />
                <Para color={color}>Gaming</Para>
              </Li>
            </Link>
            <Link to="/saved-videos" className={`${linkColor} link`}>
              <Li>
                <VscListFlat />
                <Para color={color}>Saved videos</Para>
              </Li>
            </Link>
          </UlContainer>
          <Div>
            <Para color={color} weight="600">
              CONTACT US
            </Para>
            <Div>
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </Div>
            <Para color={color}>
              Enjoy! Now to see your Channels and recommendations!
            </Para>
          </Div>
        </Div>
      )
    }}
  </NxtWatchcontext.Consumer>
)

export default SideBar
