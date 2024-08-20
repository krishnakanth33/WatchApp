import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'

import './App.css'

import NxtWatchcontext from './context/NxtWatchcontext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import VideoDetails from './components/VideoDetails'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'

class App extends Component {
  state = {isDarkMode: false, savedVideos: []}

  changeMode = () => {
    this.setState(prev => ({isDarkMode: !prev.isDarkMode}))
  }

  saveVideo = saveTheVideo => {
    this.setState(prev => ({savedVideos: [...prev.savedVideos, saveTheVideo]}))
  }

  render() {
    const {isDarkMode, savedVideos} = this.state
    console.log(savedVideos)
    return (
      <NxtWatchcontext.Provider
        value={{
          isDarkMode,
          changeMode: this.changeMode,
          savedVideos,
          saveVideo: this.saveVideo,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <ProtectedRoute exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </NxtWatchcontext.Provider>
    )
  }
}

export default App
