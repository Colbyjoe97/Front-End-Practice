import React, { Component } from "react";
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

	render() {
		return (
			<div>
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
								<span className="blue" onClick={this.showMore}>Show More..</span>
							</span>
						) : (
							<span>
								<br />
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate ullam ipsum eveniet ea, voluptas atque minima impedit explicabo possimus quos. Voluptate nihil aliquid consequatur animi? <br />
								<span className="blue" onClick={this.showMore}>Show Less..</span>
							</span>
						)}
					</p>
				</div>
			</div>
		);
	}
}
