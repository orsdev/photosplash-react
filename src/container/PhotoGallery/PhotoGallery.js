import React, { Component } from 'react';
import axios from '../../axiosInstance/axiosInstance';
import Layout from '../../components/Layout/Layout';
import InputField from '../../components/InputField/InputField';
import Gallery from '../../components/Gallery/Gallery';

class PhotoSplash extends Component {
	state = {
		search: null,
		currentPage: 1,
		prevNext: 1
	}


	render() {
		return (
			<Layout>
				<InputField
					keyCodeSearch={this.KeyCodeSearch} buttonSearch={this.ButtonSearch} />
			</Layout>
		)
	}
}

export default PhotoSplash; 