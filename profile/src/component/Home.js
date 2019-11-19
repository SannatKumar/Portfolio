import React, { Component } from 'react';
import '../css/App.css';

class Home extends Component {
	componentDidMount() {
		this.loadScript();
	}

	loadScript = () => {
		var prevScrollpos = window.pageYOffset;
		window.onscroll = function () {
			var currentScrollPos = window.pageYOffset;
			if (prevScrollpos > currentScrollPos) {
				document.getElementById("navbar").style.top = "0";
				document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";
			} else {
				document.getElementById("navbar").style.top = "-82px";
				document.getElementById("navbar").style.background = "rgba(0, 0, 0, 1)";
			}
			prevScrollpos = currentScrollPos;
		}

		document.querySelector("#main").addEventListener("mouseover", function () {
			console.log("clicked");
			document.getElementById("item-1").classList.toggle("item-1");
			document.getElementById("item-2").classList.toggle("item-2");
			document.getElementById("item-3").classList.toggle("item-3");
			document.getElementById("item-4").classList.toggle("item-4");
		});

		document.querySelector("#main").addEventListener("mouseout", function () {
			console.log("clicked");
			document.getElementById("item-1").classList.toggle("item-1");
			document.getElementById("item-2").classList.toggle("item-2");
			document.getElementById("item-3").classList.toggle("item-3");
			document.getElementById("item-4").classList.toggle("item-4");
		});
	}
	render() {
		return (
			<div className="Home">
				<div id="top" class="top">
					<nav id="navbar" class="navbar navbar-expand-lg navbar-light">
						<div class="container">
							<a class="navbar-brand" href="#">KRAYtech</a>
							<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
								aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon ml-auto hidden-sm-up float-md-right"></span>
							</button>
							<div class="collapse navbar-collapse collapse" id="navbarNav">
								<ul class="navbar-nav ml-auto">
									<li class="nav-item">
										<a class="nav-link" href="#top">Home</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#work">Work</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#about">About</a>
									</li>
									<li class="nav-item">
										<a class="nav-link" href="#contact">Contact</a>
									</li>
								</ul>
							</div>
						</div>
					</nav>
					<div class="jumbotron container">
						<h1 class="display-4">Welcome to my corner!</h1>
						<p class="lead">Get to know more about me.</p>
						<hr class="my-4"></hr>
						<a class="btn btn-primary btn-lg" href="#about" role="button">Learn more</a>
					</div>
				</div>

				<div id="work" class="work">
					<div class="title">Interests</div>
					<div class="container">
						<div class="row">
							<div id="work1" class="col-sm interest">
								<div class="work-title">
									<h2>Web Design</h2>
								</div>
							</div>
							<div id="work2" class="col-sm interest">
								<div class="work-title">
									<h2>Web Development</h2>
								</div>
							</div>
							<div id="work3" class="col-sm interest">
								<div class="work-title">
									<h2>Mobile App Development</h2>
								</div>
							</div>
							<div id="work4" class="col-sm interest">
								<div class="work-title">
									<h2>Photography</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="about" class="about">
					<div class="drink">
						<div id="main"></div>
						<div id="item-1" class="content">
							<h3>TUNGvo</h3>
						</div>
						<div id="item-2" class="content">
							<h3>25</h3>
						</div>
						<div id="item-3" class="content">
							<h3>VIETnam</h3>
						</div>
						<div id="item-4" class="content">
							<h3>CODEworm</h3>
						</div>
					</div>

				</div>
				<div id="contact" class="contact">
					<div id="left">
						<a id="brand" href="demo.html">KRAYtech</a>
						<div id="slogan">The slogan is supposed to be here. Yolo!</div>
					</div>
					<div id="right">
						<p><i class="fas fa-mobile-alt"></i> +358 46 9678137</p>
						<p><i class="fas fa-envelope"></i> tungvosgt@gmail.com</p>
						<p><i class="fas fa-map-marker-alt"></i> Yo-kyla , Turku, Finland.</p>
						<p><i class="fas fa-link"></i> www.kraytech.com</p>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;