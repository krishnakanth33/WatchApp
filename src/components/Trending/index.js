import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'

import NxtWatchcontext from '../../context/NxtWatchcontext'

import TrendingItems from '../TrendingItems'

import {Container, Ul, H1} from './styledComponents'

class Trending extends Component {
  state = {trendingItems: []}

  componentDidMount() {
    this.getTrendingItems()
  }

  getTrendingItems = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`

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
        channelName: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        id: eachItem.id,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({trendingItems: updateVideosData})
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
          <HiFire />
        </Container>
        <H1 color={color}>Trending</H1>
      </Container>
    )
  }

  render() {
    const {trendingItems} = this.state
    return (
      <NxtWatchcontext.Consumer>
        {value => {
          const {isDarkMode} = value
          const backgroundColor = isDarkMode ? '#0f0f0f ' : ' #f9f9f9'

          return (
            <Container
              data-testid="trending"
              width="80%"
              direction="column"
              backgroundColor={backgroundColor}
            >
              {this.renderTendingHeader(isDarkMode)}
              <Ul>
                {trendingItems.map(eachItem => (
                  <TrendingItems itemDetails={eachItem} key={eachItem.id} />
                ))}
              </Ul>
            </Container>
          )
        }}
      </NxtWatchcontext.Consumer>
    )
  }
}

export default Trending
