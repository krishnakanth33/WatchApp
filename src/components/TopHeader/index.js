import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import {Nav, Img, Container, Button} from './styledComponents'

import NxtWatchcontext from '../../context/NxtWatchcontext'

const TopHeader = props => {
  const logoutButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <NxtWatchcontext.Consumer>
      {value => {
        const {isDarkMode, changeMode} = value

        const modeIcon = isDarkMode ? 'LightMode' : 'DarkMode'
        const modeColor = isDarkMode ? ' #424242' : '#ffffff'
        const websiteLogo = isDarkMode
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

        const modeButton = () => {
          changeMode()
        }

        return (
          <Nav backgroundColor={modeColor}>
            <Img w="200px" alt="website logo" src={websiteLogo} />
            <Container>
              <Button data-testid="theme" onClick={modeButton}>
                {modeIcon}
              </Button>
              <Img
                w="40px"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Button border="true" type="button" onClick={logoutButton}>
                Logout
              </Button>
            </Container>
          </Nav>
        )
      }}
    </NxtWatchcontext.Consumer>
  )
}
export default withRouter(TopHeader)
