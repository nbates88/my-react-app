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

	render() {
		setTimeout(() => {
			this.setState({title: "Welcome, Nichole"});
		}, 2000);

    return (
	    <div>
		    <Header title={this.state.title} />
		    <Header title={"Hey, there"} />
		    <Footer />
	    </div>
    );
  }
}

export default App;

