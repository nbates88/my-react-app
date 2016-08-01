import React, { Component } from 'react';
import Footer from './Footer';
import Header from './Header';
import '../../App.css';

//everything in react is a component. each component returns exactly one DOM element. To return multiple, wrap in div
//default of state is null
//manages virtual DOM. If there are changes in DOM, it will update only relevant nodes
//state only gets used if component has internal value that only affects that component. Else, use props
class App extends Component {
	constructor() {
		super();
		this.state = {
			title: "Welcome",
		};
	}

	changeTitle(title) {
		this.setState({title});
	}

	render() {
    return (
	    <div>
		    <Header changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
		    <Footer />
	    </div>
    );
  }
}

export default App;

