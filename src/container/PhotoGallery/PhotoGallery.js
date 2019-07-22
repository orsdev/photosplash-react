import React, { Component } from 'react';
import axios from '../../axiosInstance/axiosInstance';
import Layout from '../../components/Layout/Layout';
import InputField from '../../components/InputField/InputField';
import Spinner from '../../UI/Spinner/Spinner';
import Gallery from '../../components/Gallery/Gallery';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';

class PhotoSplash extends Component {
  state = {
    search: null,
    currentPage: 1,
    prevNext: 1,
    per_page: 14,
    spinnerTimer: false,
    searchTimer: false,
    error: null
  };

  GetData = (val) => {

    //destruct 
    const { currentPage, per_page } = this.state;

    let key = '95b50323e9088ff9cb2368e19fc9f970a5c08b945fbc3fbc55972e1180989fbc';

    //build up url
    let url = `?query=${val.value}&page=${currentPage}&per_page=${per_page}&client_id=${key}`;

    // make httpRequest and save response
    axios.get(url)
      .then((res) => {

        this.setState({
          spinnerTimer: true,
          searchTimer: false,
          error: null
        });

        //wait a little before setting setState
        setTimeout(() => {
          this.setState({
            search: res.data.results,
            searchTimer: true,
            spinnerTimer: false
          });
        }, 1100);

      })
      .catch(error => {
        this.setState({
          error: `${error}`
        })
      });
  };

  ButtonSearch = () => {

    //get element from dom
    let val = document.getElementById('search');

    //call function if input field value is not empty
    if (val.value) {
      this.GetData(val);
    }
  };

  KeyCodeSearch = (event) => {

    //get element from dom
    let val = document.getElementById('search');

    //listen to button keycode
    let keyCode = event.keyCode;

    //if keycode is an enter button, call function
    if (keyCode === 13) {
      this.GetData(val);
    }
  }

  toggle = () => {
    this.setState({
      error: null
    })
  }

  render() {

    //copy state
    let copyState = { ...this.state };

    //variables 
    let images = null;
    let navButton = null;

    //assign className
    let classProp = 'spinner_gallery';

    //when true, assign spinner component to images
    if (this.state.spinnerTimer) {
      images = <Spinner />;
    }

    //when search property is not empty, return map values
    if (this.state.searchTimer) {

      //assign new className
      classProp = 'gallery';

      //assign new value to images
      images = copyState.search.map((img, index) => {
        return (
          <Gallery
            key={img.id}
            alt={img.id}
            id={index}
            pic={img.urls.regular} />
        )
      });

      //asign navButton Button component
      navButton = (
        <div className='navContainer'>
          <Button name='&lArr;' />
          <Button name='&rArr;' />
        </div>
      );


    };

    return (
      <Layout>
        {
          this.state.error ?
            <Modal
              error={this.state.error}
              toggle={this.toggle} />
            :
            <React.Fragment>
              <InputField
                keyCodeSearch={this.KeyCodeSearch} buttonSearch={this.ButtonSearch} />
              <div className='galleryContainer'>
                <div className={classProp}>
                  {images}
                </div>
                {navButton}
              </div>
            </React.Fragment>
        }
      </Layout>
    )
  }
}

export default PhotoSplash; 