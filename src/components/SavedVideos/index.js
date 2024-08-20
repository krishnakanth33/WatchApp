import {Component} from 'react'

import NxtWatchcontext from '../../context/NxtWatchcontext'

import SavedItems from '../SavedItems'

import {Container, Ul, Img, H1, Para} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <NxtWatchcontext.Consumer>
        {value => {
          const {isDarkMode, savedVideos} = value
          const backgroundColor = isDarkMode ? '#0f0f0f' : '#f9f9f9'
          const headingColor = isDarkMode ? '#ffffff' : ''

          const isEmpty = savedVideos.length === 0

          return (
            <Container
              data-testid="savedVideos"
              width="80%"
              direction="column"
              backgroundColor={backgroundColor}
            >
              {isEmpty ? (
                <>
                  <Img
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                    alt="no saved videos"
                  />
                  <H1 color={headingColor}>No saved videos found</H1>
                  <Para>You can save your videos while watching them</Para>
                </>
              ) : (
                <Ul>
                  {savedVideos.map(eachItem => (
                    <SavedItems itemDetails={eachItem} key={eachItem.id} />
                  ))}
                </Ul>
              )}
            </Container>
          )
        }}
      </NxtWatchcontext.Consumer>
    )
  }
}

export default SavedVideos
