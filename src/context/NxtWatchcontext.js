import React from 'react'

const NxtWatchcontext = React.createContext({
  isDarkMode: false,
  changeMode: () => {},
  savedVideos: [],
  saveVideo: () => {},
})

export default NxtWatchcontext
