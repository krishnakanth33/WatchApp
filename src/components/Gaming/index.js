import {Component} from 'react'
import Cookies from 'js-cookie'

import {SiYoutubegaming} from 'react-icons/si'

import NxtWatchcontext from '../../context/NxtWatchcontext'
import GamingItems from '../GamingItems'

import {Container, Ul, H1} from './styledComponents'

class Gaming extends Component {
  state = {gamingItems: []}

  componentDidMount() {
    this.getTrendingItems()
  }

  getTrendingItems = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Brear ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    const data = await response.json()
    const videosData = await data.videos

    if (response.ok) {
      const updateVideosData = videosData.map(eachItem => ({
        id: eachItem.id,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({gamingItems: updateVideosData})
    }
  }

  renderTendingHeader = isDarkMode => {
    const color = isDarkMode ? '#ffffff' : ''
    const backgroundColor = isDarkMode ? '  #000000' : ' #cbd5e1'
    const backgroundColor1 = isDarkMode ? '  #1e293b' : ' #ebebeb'

    return (
      <Container p="20px" backgroundColor={backgroundColor1}>
        <Container
          height="50px"
          width="50px"
          backgroundColor={backgroundColor}
          alignItem="center"
          as="center"
          jc="center"
          color="red"
          bdRadius="50px"
        >
          <SiYoutubegaming />
        </Container>
        <H1 color={color}>Gaming</H1>
      </Container>
    )
  }

  render() {
    const {gamingItems} = this.state
    return (
      <NxtWatchcontext.Consumer>
        {value => {
          const {isDarkMode} = value
          const backgroundColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'

          return (
            <Container
              data-testid="gaming"
              width="80%"
              direction="column"
              backgroundColor={backgroundColor}
            >
              {this.renderTendingHeader(isDarkMode)}
              <Ul>
                {gamingItems.map(eachItem => (
                  <GamingItems itemDetails={eachItem} key={eachItem.id} />
                ))}
              </Ul>
            </Container>
          )
        }}
      </NxtWatchcontext.Consumer>
    )
  }
}
export default Gaming
