import React, { Component } from 'react';
import axios from '../../axiosInstance/axiosInstance';
import Layout from '../../components/Layout/Layout';
import InputField from '../../components/InputField/InputField';
import Gallery from '../../components/Gallery/Gallery';

class PhotoSplash extends Component {
	state = {
		search: null,
		currentPage: 1,
		prevNext: 1,
		per_page: 14
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
					search: res.data.results
				});
			});
	};

	ButtonSearch = () => {

		let val = document.getElementById('search');

		if (val.value) {
			this.GetData(val);
		}
	};

	KeyCodeSearch = (event) => {

		let val = document.getElementById('search');
		let keyCode = event.keyCode;

		if (keyCode === 13) {
			this.GetData(val);
		}
	}

	render() {

		//destruct
		let copyState = { ...this.state };

		let images = null;
		let imageContainer = null;

		//when search property is not empty, return map values
		if (copyState['search'] !== null) {
			images = copyState.search.map((img, index) => {
				return (
					<Gallery
						key={img.id}
						alt={img.id}
						id={index}
						pic={img.urls.regular} />
				)
			})
		};

		//wrap images in container if true
		if (images) {
			imageContainer = (
				<div className='gallery'>
					{images}
				</div>
			)
		}

		return (
			<Layout>
				<InputField
					keyCodeSearch={this.KeyCodeSearch} buttonSearch={this.ButtonSearch} />
				{imageContainer}
			</Layout>
		)
	}
}

export default PhotoSplash; 