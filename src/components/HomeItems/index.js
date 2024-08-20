import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'

import {BsDot} from 'react-icons/bs'

import NxtWatchcontext from '../../context/NxtWatchcontext'

import {Li, Container, Img, Img2, P} from './styledComponents'

const HomeItems = props => {
  const {itemDetails} = props
  const {
    channelName,
    id,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    title,
    viewCount,
  } = itemDetails

  const timeUploded = formatDistanceToNow(new Date(publishedAt))
  return (
    <NxtWatchcontext.Consumer>
      {value => {
        const {isDarkMode} = value
        const color1 = isDarkMode ? '#ffffff' : ' #1e293b'
        const color2 = isDarkMode ? '#94a3b8' : '#616e7c'

        return (
          <Link to={`videos/${id}`} className="link">
            <Li>
              <Img src={thumbnailUrl} alt="video thumbnail" />
              <Container>
                <Img2 src={profileImageUrl} alt="channel logo" />
                <Container direction="column" p="6px">
                  <P color={color1}>{title}</P>
                  <P color={color2} mt="4px">
                    {channelName}
                  </P>
                  <P color={color2} mt="2px">
                    {publishedAt}
                  </P>
                  <Container alignItems="center">
                    <P color={color2} mt="2px" pr="20px">
                      {viewCount}
                    </P>
                    <P color={color2} mt="2px">
                      <BsDot />
                      {timeUploded}
                    </P>
                  </Container>
                </Container>
              </Container>
            </Li>
          </Link>
        )
      }}
    </NxtWatchcontext.Consumer>
  )
}

export default HomeItems
