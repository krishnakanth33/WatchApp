import {Link} from 'react-router-dom'
import {BsDot} from 'react-icons/bs'

import {formatDistanceToNow} from 'date-fns'
import NxtWatchcontext from '../../context/NxtWatchcontext'

import {Li, Container, Img, H1, P} from './styledComponents'

const TrendingItems = props => {
  const {itemDetails} = props
  const {channelName, id, thumbnailUrl, title, viewCount} = itemDetails
  const {publishedAt} = itemDetails

  const timeUploded = formatDistanceToNow(new Date(publishedAt))

  return (
    <NxtWatchcontext.Consumer>
      {value => {
        const {isDarkMode} = value
        const color = isDarkMode ? '#ffffff' : '#1e293b'

        return (
          <Link to={`videos/${id}`} className="link">
            <Li>
              <Img src={thumbnailUrl} alt="channelName" />
              <Container direction="column" width="100%" pl="40px">
                <H1 color={color}>{title}</H1>
                <P mt="3px" color="#94a3b8">
                  {channelName}
                </P>
                <Container>
                  <P mt="3px" color="#94a3b8" pr="20px">
                    {viewCount}
                  </P>
                  <P color="#94a3b8" mt="2px">
                    <BsDot />
                    {timeUploded}
                  </P>
                </Container>
              </Container>
            </Li>
          </Link>
        )
      }}
    </NxtWatchcontext.Consumer>
  )
}

export default TrendingItems
