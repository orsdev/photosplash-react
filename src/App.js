import React from 'react';
import PhotoGallery from './container/PhotoGallery/PhotoGallery';
import './css/style.css';
import './css/font-awesome.css';

class App extends React.Component {

  render() {
    return (
      <div className='App'>
        <PhotoGallery />
      </div>
    )
  }
}

export default App;

