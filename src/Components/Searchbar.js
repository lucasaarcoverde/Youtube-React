import React from 'react';

class Searchbar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}
	}

	onInputChange = (event) => {
		this.setState({term: event.target.value});
		this.props.onVideoSearch(event.target.value);
	}

	render() {
		return (
			<div  className="search-bar">
				<input onChange={this.onInputChange}/>
			</div>
		);
	}
}

export default Searchbar;