import React, { Component, useEffect, useState } from "react";
import "../scss/homepage.scss";
import Carousel from 'react-elastic-carousel'
import img1 from "../assets/img-1.jpg";
import img2 from "../assets/img-2.jpg";
import img3 from "../assets/img-3.jpg";

export default class homepage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			show: false,
			num: 1,
		};
	}

	
	increment = () => {
		this.setState({ count: (this.state.count += 1) });
		console.log(this.state.count);
	};

	showMore = () => {
		this.state.show === true
			? this.setState({ show: false })
			: this.setState({ show: true });
	};

	changeBg = (color) => {
		let query = document.querySelector(".body");
		if (color === "rgb(51, 50, 50)") {
			query.style.backgroundColor = color;
			query.style.color = "white";
		} else {
			query.style.backgroundColor = color;
			query.style.color = "black";
		}
	};

	// changeImg = () => {
	// 	this.state.num < 3 ? this.setState({ num: this.state.num += 1 }) : this.setState({ num: 1 })
	// 	console.log("Getting to function")
	// 	console.log(this.state.num);
	// };
	nextImg = () => {
		this.state.num < 3 ? this.setState({ num: this.state.num += 1 }) : this.setState({ num: 1 })
		console.log("Getting to function")
		console.log(this.state.num);
	};
	prevImg = () => {
		this.state.num > 1 ? this.setState({ num: this.state.num -= 1 }) : this.setState({ num: 3 })
		console.log("Getting to function")
		console.log(this.state.num);
	};

	render() {
		return (
			<div className="wrapper">
				{/* INCREMENT NUMBER */}
				<div className="increment">
					<button onClick={this.increment}>Click Me!</button>
					<h1>{this.state.count}</h1>
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
								<span className="show" onClick={this.showMore}>
									Show More..
								</span>
							</span>
						) : (
							<span>
								<br />
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Voluptate ullam ipsum eveniet
								ea, voluptas atque minima impedit explicabo
								possimus quos. Voluptate nihil aliquid
								consequatur animi? <br />
								<span className="show" onClick={this.showMore}>
									Show Less..
								</span>
							</span>
						)}
					</p>
				</div>

				<h1 className="text-center">Change Your Background Color!</h1>
				<div className="colors">
					<p
						className="circle red"
						onClick={(e) => this.changeBg("red")}
					></p>
					<p
						className="circle blue"
						onClick={(e) => this.changeBg("blue")}
					></p>
					<p
						className="circle green"
						onClick={(e) => this.changeBg("green")}
					></p>
					<p
						className="circle purple"
						onClick={(e) => this.changeBg("purple")}
					></p>
					<p
						className="circle dark"
						onClick={(e) => this.changeBg("rgb(51, 50, 50)")}
					></p>
					<p
						className="circle white"
						onClick={(e) => this.changeBg("white")}
					></p>
				</div>

				<div className="img-carousel text-center">
					<img className="images" onClick={ this.changeImg } src={ this.state.num === 1 ? img1 : this.state.num === 2 ? img2 : this.state.num === 3 ? img3 : img1 } alt="1" /> <br />
					<button className="next" onClick={ this.nextImg }>Next</button>
					<button className="prev" onClick={ this.prevImg }>Previous</button>
				</div>
			</div>
		);
	}
}
