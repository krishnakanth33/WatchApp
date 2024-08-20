import {Link} from 'react-router-dom'

import NxtWatchcontext from '../../context/NxtWatchcontext'

import {Li, Container, Img, H1, P} from './styledComponents'

const GamingItems = props => {
  const {itemDetails} = props
  const {channelName, id, thumbnailUrl, title, viewCount} = itemDetails

  return (
    <NxtWatchcontext.Consumer>
      {value => {
        const {isDarkMode} = value
        const color = isDarkMode ? '#ffffff' : '#1e293b'

        return (
          <Link to={`videos/${id}`} className="link">
            <Li>
              <Img src={thumbnailUrl} alt="channelName" />
              <Container direction="column" width="100%">
                <H1 color={color}>{title}</H1>
                <P mt="3px" color="#94a3b8">
                  {channelName}
                </P>
                <P mt="3px" color="#94a3b8">
                  {viewCount} Watching Worldwide
                </P>
              </Container>
            </Li>
          </Link>
        )
      }}
    </NxtWatchcontext.Consumer>
  )
}

export default GamingItems
