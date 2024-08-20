import {Li, Container, Img, H1, P} from './styledComponents'

import NxtWatchcontext from '../../context/NxtWatchcontext'

const SavedItems = props => {
  const {itemDetails} = props
  const {channelName, thumbnailUrl, title, viewCount} = itemDetails
  return (
    <NxtWatchcontext.Consumer>
      {value => {
        const {isDarkMode} = value
        const color = isDarkMode ? '#ffffff' : '#000000'

        return (
          <Li>
            <Img src={thumbnailUrl} alt="channelName" />
            <Container direction="column" width="100%" pl="40px">
              <H1 color={color}>{title}</H1>
              <P mt="3px" color="#94a3b8">
                {channelName}
              </P>
              <P mt="3px" color="#94a3b8">
                {viewCount}
              </P>
            </Container>
          </Li>
        )
      }}
    </NxtWatchcontext.Consumer>
  )
}

export default SavedItems
