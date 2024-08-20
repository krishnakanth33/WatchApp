import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {VscListFlat} from 'react-icons/vsc'

import NxtWatchcontext from '../../context/NxtWatchcontext'

import {Container, Img, P, Button, Hr, Img2} from './styledComponents'

class VideoDetails extends Component {
  state = {videoDetails: {}}

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Brear ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    const videoDetails = await data.video_details

    if (response.ok) {
      const updatevideoDetails = {
        channelName: videoDetails.channel.name,
        profileImgUrl: videoDetails.channel.profile_image_url,
        subscriberCount: videoDetails.channel.subscriber_count,
        description: videoDetails.description,
        id: videoDetails.id,
        publishedAt: videoDetails.published_at,
        thumbnailUrl: videoDetails.thumbnail_url,
        title: videoDetails.title,
        videoUrl: videoDetails.video_url,
        viewCount: videoDetails.view_count,
      }
      this.setState({videoDetails: updatevideoDetails})
    }
  }

  render() {
    const {videoDetails} = this.state

    return (
      <NxtWatchcontext.Consumer>
        {value => {
          const {isDarkMode, saveVideo} = value
          const {channelName, profileImgUrl, subscriberCount} = videoDetails
          const {description, thumbnailUrl} = videoDetails
          const {viewCount, title} = videoDetails

          const backgroundColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
          const color = isDarkMode ? '#ffffff' : ''

          const onClickSaveButton = () => {
            saveVideo(videoDetails)
          }

          return (
            <Container
              data-testid="videoItemDetails"
              direction="column"
              width="100%"
              backgroundColor={backgroundColor}
            >
              <Container direction="column" padding="20px">
                <Img src={thumbnailUrl} />
                <P color={color}>{title}</P>
                <Container direction="row" jc="space-between">
                  <P color="#94a3b8">{viewCount}</P>
                  <Container>
                    <Button color="#94a3b8">
                      <AiOutlineLike /> Like
                    </Button>
                    <Button color="#94a3b8">
                      <AiOutlineDislike /> Dislike
                    </Button>
                    <Button
                      color="#94a3b8"
                      type="button"
                      onClick={onClickSaveButton}
                    >
                      <VscListFlat /> Save
                    </Button>
                  </Container>
                </Container>
              </Container>
              <Hr />
              <Container direction="row" padding="20px">
                <Img2 src={profileImgUrl} />
                <Container direction="column">
                  <P color={color}>{channelName}</P>
                  <P color="#94a3b8">{subscriberCount} subscribers</P>
                  <P color={color}>{description}</P>
                </Container>
              </Container>
            </Container>
          )
        }}
      </NxtWatchcontext.Consumer>
    )
  }
}

export default VideoDetails
