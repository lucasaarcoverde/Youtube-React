import React, { Component } from 'react';
import _ from 'lodash';
import Searchbar from './Components/Searchbar';
import YTSearch from 'youtube-api-search'
import VideoList from './Components/VideoList';
import VideoDetail from './Components/VideoDetail';
import './style/style.css';

const API_KEY = 'AIzaSyBLYkba60uuaw74NDeVd909DNOlgBSyDIE';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.onVideoSearch('Silva');
  } 

  onVideoSelect = (video) => {
    this.setState({selectedVideo: video});
  }

  onVideoSearch = (term) => {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }
  render() {
    const videoSearch = _.debounce((term) => {this.onVideoSearch(term)}, 300);
    return (
      <div>
        <Searchbar onVideoSearch={videoSearch}/>
        <div className="d-flex flex-row">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos}/>
        </div>
      </div>
    );
  }
}

export default App;
