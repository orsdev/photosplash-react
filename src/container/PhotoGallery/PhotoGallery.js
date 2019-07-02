import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import InputField from '../../components/InputField/InputField';

class PhotoSplash extends Component {

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