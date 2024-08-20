import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {FiSearch} from 'react-icons/fi'
import {MdCancel} from 'react-icons/md'

import NxtWatchcontext from '../../context/NxtWatchcontext'

import HomeItems from '../HomeItems'

import {
  Container,
  Input,
  Button,
  CardContainer,
  Img,
  Para,
  Ul,
  H,
} from './styledComponents'

const apiResultList = {
  initial: 'INITIAL',
  progress: 'PROGRESS',
  success: 'SUCCESS',
  failed: 'FAILED',
}

class Home extends Component {
  state = {
    searchInput: '',
    searchValue: '',
    displayCard: true,
    homeVideos: [],
    apiResult: apiResultList.initial,
  }

  componentDidMount() {
    this.getAllHomeItems()
  }

  getAllHomeItems = async () => {
    this.setState({apiResult: apiResultList.progress})
    const jwtToken = Cookies.get('jwt_token')
    const {searchValue} = this.state
    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`

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

      this.setState({
        homeVideos: updateVideosData,
        apiResult: apiResultList.success,
      })
    } else {
      this.setState({apiResult: apiResultList.failed})
    }
  }

  onCancelCard = () => {
    this.setState({displayCard: false})
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchValue: searchInput}, this.getAllHomeItems)
  }

  renderTopCard = () => (
    <CardContainer data-testid="banner">
      <Container jc="space-between">
        <Img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <Button
          onClick={this.onCancelCard}
          border="true"
          type="button"
          backgroundColor="transparent"
          borderColor="0px"
          data-testid="close"
        >
          <MdCancel />
        </Button>
      </Container>
      <Para fontSize="20px">Buy Nxt Watch Premium prepaid plans with UPI</Para>
      <Button
        type="button"
        backgroundColor="transparent"
        borderColor="1px solid #000000"
      >
        GET IT NOW
      </Button>
    </CardContainer>
  )

  renderInput = isDarkMode => {
    const {searchInput, homeVideos} = this.state
    const backColor = isDarkMode ? '#383838' : ' #e2e8f0'
    const borderColor = isDarkMode ? '1px solid #ffffff' : '1px solid #1e293b'
    const inputColor = isDarkMode ? '#ffffff' : '#000000'
    const headingColor = isDarkMode ? '#ffffff' : '#000000'

    const length = homeVideos.length === 0

    return (
      <Container
        width="100%"
        direction="column"
        p="10px"
        backgroundColor={backColor}
      >
        <Container backgroundColor={backColor}>
          <Input
            onChange={this.onChangeSearchInput}
            value={searchInput}
            type="search"
            placeholder="Search"
            borderColor={borderColor}
            color={inputColor}
          />
          <Button
            data-testid="searchButton"
            type="Button"
            borderColor={borderColor}
            onClick={this.onClickSearchButton}
          >
            <FiSearch />
          </Button>
        </Container>
        {length ? (
          <Container alignItems="center" width="100%" direction="column">
            <Img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
              width="60%"
              mt="50px"
            />
            <H color={headingColor}>No Search results found</H>
            <Para color="#94a3b8">
              Try different key words or remove search filter
            </Para>
            <Button
              color="true"
              backgroundColor="#4f46e5"
              type="button"
              data-testid="retry"
              borderColor="0px"
              br="7px"
              pl="20px"
              pr="20px"
            >
              Retry
            </Button>
          </Container>
        ) : (
          <Ul>
            {homeVideos.map(eachItem => (
              <HomeItems key={eachItem.id} itemDetails={eachItem} />
            ))}
          </Ul>
        )}
      </Container>
    )
  }

  renderFinalResult = isDarkMode => {
    const {apiResult} = this.state
    const color = isDarkMode ? '#ffffff' : '#000000'
    const headingColor = isDarkMode ? '#ffffff' : '#000000'
    const failedImg = isDarkMode
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    switch (apiResult) {
      case apiResultList.progress:
        return (
          <div className="loader-container" data-testid="loader">
            <Loader type="ThreeDots" color={color} height="50" width="50" />
          </div>
        )

      case apiResultList.success:
        return this.renderInput(isDarkMode)

      case apiResultList.failed:
        return (
          <>
            <Img width="40%" src={failedImg} alt="response failed" mt="40px" />
            <H color={headingColor}>Oops! Somthing Went Wrong</H>
            <Para color="#94a3b8">
              We are having some trouble to complete your request.
            </Para>
            <Para color="#94a3b8">Please try again</Para>
            <Button
              color="true"
              backgroundColor="#4f46e5"
              type="button"
              data-testid="retry"
              borderColor="0px"
              br="7px"
              pl="20px"
              pr="20px"
            >
              Retry
            </Button>
          </>
        )
      default:
        return (
          <Container>
            <Img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png "
              alt="no videos"
            />
          </Container>
        )
    }
  }

  render() {
    const {displayCard} = this.state
    return (
      <NxtWatchcontext.Consumer>
        {value => {
          const {isDarkMode} = value
          const backgroundColor = isDarkMode ? '#181818' : '#f9f9f9'

          return (
            <Container
              alignItems="center"
              width="80%"
              direction="column"
              backgroundColor={backgroundColor}
              data-testid="home"
            >
              {displayCard && this.renderTopCard()}
              {this.renderFinalResult(isDarkMode)}
            </Container>
          )
        }}
      </NxtWatchcontext.Consumer>
    )
  }
}

export default Home
