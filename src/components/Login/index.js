import {Component} from 'react'
import Cookies from 'js-cookie'
// import {Redirect} from 'react-router-dom'

import {
  Container,
  Form,
  Img,
  Input,
  LoginContainer,
  Label,
  Label2,
  Button,
  Para,
} from './styledComponents'

import NxtWatchcontext from '../../context/NxtWatchcontext'

class Login extends Component {
  state = {username: '', password: '', showPass: false, error: ''}

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok) {
      this.submitedSuccessful(data.jwt_token)
    } else {
      this.setState({error: data.error_msg})
    }
  }

  submitedSuccessful = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 100})

    const {history} = this.props
    history.replace('/')
  }

  onChangeUserName = event => {
    this.setState({username: event.target.value})
  }

  onChangePass = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPass = () => {
    this.setState(prev => ({showPass: !prev.showPass}))
  }

  returnUserNameInput = () => {
    const {username} = this.state
    return (
      <Container margin="15px" width="80%">
        <Label htmlFor="usernameId">USERNAME</Label>
        <Input
          onChange={this.onChangeUserName}
          value={username}
          placeholder="Username"
          id="usernameId"
          type="text"
        />
      </Container>
    )
  }

  returnPassword = () => {
    const {showPass, password} = this.state
    const type = showPass ? 'text' : 'password'
    return (
      <Container margin="15px" width="80%">
        <Label htmlFor="passId">PASSWORD</Label>
        <Input
          onChange={this.onChangePass}
          value={password}
          placeholder="Password"
          id="passId"
          type={type}
        />
      </Container>
    )
  }

  rendershowPass = isDarkMode => {
    const color = isDarkMode ? '#ffffff' : ''
    return (
      <Container direction="true" selfAlign="true" ml="35px">
        <input id="showpassId" type="checkbox" onClick={this.onClickShowPass} />
        <Label2 color={color} htmlFor="showpassId">
          Show Password
        </Label2>
      </Container>
    )
  }

  render() {
    const {error} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)

    return (
      <NxtWatchcontext.Consumer>
        {value => {
          const {isDarkMode} = value
          const backgroundColor = isDarkMode ? '#383838' : ''
          const fomBackground = isDarkMode ? '#000000' : ''

          return (
            <LoginContainer backgroundcolor={backgroundColor}>
              <Form
                onSubmit={this.onSubmitForm}
                backgroundcolor={fomBackground}
              >
                <Img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="logo"
                />
                {this.returnUserNameInput()}
                {this.returnPassword()}
                {this.rendershowPass(isDarkMode)}
                <Button type="submit">Loing</Button>
                <Para>{error}</Para>
              </Form>
            </LoginContainer>
          )
        }}
      </NxtWatchcontext.Consumer>
    )
  }
}

export default Login
