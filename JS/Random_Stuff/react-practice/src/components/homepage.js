import React, { Component, useEffect, useState } from "react";
import "../scss/homepage.scss";

export default class homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			show: false,
		};
	}

	increment = () => {
		this.setState({ count: (this.state.count += 1) });
		console.log(this.state.count);
	};

	showMore = () => {
		this.state.show === true ? (
			this.setState({ show: false })
		) : this.setState({show: true})
	}

	// bg = () => {
	// 	const [bg, setBg] = useState(1)

	// 	useEffect(() => {
	// 		setBg(JSON.parse(window.sessionStorage.getItem("bg")))
	// 	}, [])
	// }

	changeBg = (color) => {
		// window.sessionStorage.setItem("bg", color)
		let query = document.querySelector('.body')
		if(color === "rgb(51, 50, 50)") {
			query.style.backgroundColor = color
			query.style.color = "white";
		}else {
			query.style.backgroundColor = color
			query.style.color = "black";
		}
	}

	
	render() {
		return (
			<div className="wrapper">
				{/* INCREMENT NUMBER */}
				<div className="increment">
					<button onClick={ this.increment }>Click Me!</button>
					<h1>{ this.state.count }</h1>
				</div>

				{/* SHOW MORE TEXT BUTTON */}
				<div className="show-more">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Velit, sit suscipit tempora quos quasi, ea aspernatur
						nesciunt esse sapiente error repudiandae praesentium
						dolorem, quibusdam vel!
						{this.state.show === false ? (
							<span>
								<br />
								<span className="show" onClick={ this.showMore }>Show More..</span>
							</span>
						) : (
							<span>
								<br />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ullam ipsum eveniet ea, voluptas atque minima impedit explicabo possimus quos. Voluptate nihil aliquid consequatur animi? <br />
								<span className="show" onClick={ this.showMore }>Show Less..</span>
							</span>
						)}
					</p>
				</div>

				<h1 className="text-center">Change Your Background Color!</h1>
				<div className="colors">
					<p className="circle red" onClick={ e => this.changeBg("red") }></p>
					<p className="circle blue" onClick={ e => this.changeBg("blue") }></p>
					<p className="circle green" onClick={ e => this.changeBg("green") }></p>
					<p className="circle purple" onClick={ e => this.changeBg("purple") }></p>
					<p className="circle dark" onClick={ e => this.changeBg("rgb(51, 50, 50)") }></p>
					<p className="circle white" onClick={ e => this.changeBg("white") }></p>
				</div>
			</div>
		);
	}
}