import NxtWatchcontext from '../../context/NxtWatchcontext'

import {Container, Heading, Img, Para} from './styledComponents'

const NotFound = () => (
  <NxtWatchcontext.Consumer>
    {value => {
      const {isDarkMode} = value

      const color = isDarkMode ? '#ffffff' : '#000000'
      const backgroundColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
      const notFoundImgUrl = isDarkMode
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'

      return (
        <Container backgroundColor={backgroundColor} fd="column" width="80%">
          <Img src={notFoundImgUrl} alt="not found" />
          <Heading color={color}>Page Not Found</Heading>
          <Para>We are sorry, the page you requested could not be found.</Para>
        </Container>
      )
    }}
  </NxtWatchcontext.Consumer>
)

export default NotFound
