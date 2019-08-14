import React, { Component } from 'react';
import axios from '../../axiosInstance/axiosInstance';
import Layout from '../../components/Layout/Layout';
import InputField from '../../components/InputField/InputField';
import Spinner from '../../UI/Spinner/Spinner';
import Gallery from '../../components/Gallery/Gallery';
import Modal from '../../UI/Modal/Modal';
import Button from '../../UI/Button/Button';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Popup from '../../UI/Popup/Popup';

class PhotoSplash extends Component {
  state = {
    search: null,
    currentPage: 1,
    per_page: 14,
    spinnerTimer: false,
    searchTimer: false,
    error: null,
    showPopup: false,
    popupImage: null
  };

  GetData = (val) => {

    //destruct 
    const { currentPage, per_page } = this.state;

    let key = '95b50323e9088ff9cb2368e19fc9f970a5c08b945fbc3fbc55972e1180989fbc';

    //build up url
    let url = `?query=${val}&page=${currentPage}&per_page=${per_page}&client_id=${key}`;

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

    //call function (make httpRequest) if input field value is not empty
    if (val.value) {
      this.GetData(val.value);
    }
  };

  predifinedSearch = (event) => {

    //get element from dom
    let val = document.getElementById('search');

    let target = event.target;

    //variable holds targeted element textContent
    let textContent = target.textContent;

    //set input field value automatically
    val.value = textContent;

    //call function (make httpRequest) is textContent is not true ( not empty )
    if (textContent) {
      this.GetData(textContent);
    }

  };

  KeyCodeSearch = (event) => {

    //get element from dom
    let val = document.getElementById('search');

    //listen to button keycode
    let keyCode = event.keyCode;

    //if keycode is an enter button, call function (make httpRequest)
    if (keyCode === 13) {
      this.GetData(val.value);
    }
  }

  toggle = () => {
    this.setState({
      error: null
    })
  };

  backButton = () => {

    //get element from dom
    let val = document.getElementById('search');

    //only decrement currentPage state when greater than 0
    if (this.state.currentPage > 0) {

      this.setState((prevState) => {
        return {
          currentPage: prevState.currentPage - 1
        }
      });

      //wait for currentPage state to update before making httpRequest
      setTimeout(() => {
        this.GetData(val.value);
      }, 100)

    };

  }

  nextButton = () => {

    //get element from dom
    let val = document.getElementById('search');

    //only increment currentPage state when lesser than 10
    if (this.state.currentPage < 10) {

      this.setState((prevState) => {
        return {
          currentPage: prevState.currentPage + 1
        }
      });

      //wait for currentPage state to update before making httpRequest
      setTimeout(() => {
        this.GetData(val.value);
      }, 100)

    };

  }

  imagePopup = (event) => {

    //get selected dom element
    let target = event.target;

    //update state
    this.setState({
      popupImage: target.src,
      showPopup: true
    })

  };

  closePopup = () => {

    //update state
    this.setState({
      popupImage: null,
      showPopup: false
    })

  };

  render() {

    //copy state
    let copyState = { ...this.state };

    //variables 
    let images = null;
    let navButton = null;
    let output = null;

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
            getSrc={this.imagePopup}
            pic={img.urls.regular} />
        )
      });

      //asign navButton Button component
      navButton = (
        <div className='navContainer'>
          <Button clicked={this.backButton} name='&lArr;' />
          <Button clicked={this.nextButton} name='&rArr;' />
        </div>
      );


    };

    //
    if (!this.state.error) {
      output = (
        <React.Fragment>
          <InputField
            keyCodeSearch={this.KeyCodeSearch}
            buttonSearch={this.ButtonSearch}
            search={this.predifinedSearch} />
          <div className='galleryContainer'>
            <div className={classProp}>
              {images}
            </div>
            {navButton}
          </div>
        </React.Fragment>
      );
    } else {
      output = (
        <Backdrop>
          <Modal
            error={this.state.error}
            toggle={this.toggle} />
        </Backdrop>
      );
    }

    return (
      <Layout>

        <React.Fragment>
          {this.state.showPopup ?
            <Backdrop >
              <Popup 
                src={this.state.popupImage}
                close={this.closePopup} />
            </Backdrop>
            : output
          }
        </React.Fragment>

      </Layout>
    )
  }
}

export default PhotoSplash; 