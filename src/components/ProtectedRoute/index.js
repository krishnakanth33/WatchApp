import {Redirect, Route} from 'react-router-dom'
import Cookie from 'js-cookie'

import NxtWatchcontext from '../../context/NxtWatchcontext'

import TopHeader from '../TopHeader'
import SideBar from '../SideBar'

import {Container, HomeContainer} from './styledComponents'

const ProtectedRoute = props => {
  const token = Cookie.get('jwt_token')

  if (token === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <NxtWatchcontext.Consumer>
      {value => {
        const {isDarkMode} = value
        console.log(isDarkMode)

        return (
          <HomeContainer>
            <TopHeader />
            <Container>
              <SideBar />
              <Route {...props} />
            </Container>
          </HomeContainer>
        )
      }}
    </NxtWatchcontext.Consumer>
  )
}

export default ProtectedRoute
