import * as React from "react";
import "../../index.css";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";
import Newsletter from "../commons/Newsletter";

const Footer = (props: any) => {
	const { label, images, _site } = props;
	// console.log(props)
	React.useEffect(() => {
		document.body.setAttribute("id", "body");
	})
	const toggle = () => {
		(document.getElementById("body") as HTMLInputElement).classList.toggle('');
	}
	function show_hide_help() {
		var click: any = document.getElementById("help-regards");
		if (click.style.display === "none") {
			click.style.display = "block";
		} else {
			click.style.display = "none";
		}
	}

	const Topfooterlinks = props?._site?.c_topfooterlinks?.map((link: any) => (
		<div className="" style={{ width: "180px" }}>
			<a className="" href={link.link} >
				<img src={link.image?.url} className=" h-12 w-12 flex justify-center" />
				<span className=""> {link.navBarLabel.label}</span>
			</a>
		</div>
	));

	const SocialNetworks = props?._site?.c_socialNetworks?.map((link: any) => (
			<a className="" href={link.link} >
				<img src={link.image?.url} className="" style={{ height: "15px", width: "18px" }} /><br />
				{/* <span className=""> {link.navBarLabel?.label}</span> */}
			</a>
	));

	const HelpServicesRegards = props?._site?.c_helpServicesRegards?.map((link: any) => (
		<div className="footer-dropdown-btn">|{link.label}| </div>
	));

	const Needhelp = props?._site?.c_needhelp?.map((link: any) => (
		<a className="" href={link.link} >
			<span>{link.label}</span><br />
		</a>
	));

	const Whoareyou = props?._site?.c_whoareyou?.map((link: any) => (
		<a className="" href={link.link} >
			<span>{link.label}</span><br />
		</a>
	));

	const Servicesandproducts = props?._site?.c_servicesandproducts?.map((link: any) => (
		<a className="" href={link.link} >
			<span>{link.label}</span><br />
		</a>
	));

	const Inregardsto = props?._site?.c_inregardsto?.map((link: any) => (
		<a className="" href={link.link} >
			<span>{link.label}</span><br />
		</a>
	));

	return (
		<>
			<footer className="site-footer inline-block w-full pt-6 " style={{ paddingTop: "20px" }}>
				<div className="flex justify-center pb-9 text-lg font-bold pt-6 " style={{ color: "navy" }}>
					<button>
						{props?._site?.c_back_to_top}
					</button>
				</div>
				<div style={{ backgroundColor: "#252855", height: "160px" }} >
					<div className="flex space-x-24 pt-6" style={{ width: "1000px", marginLeft: "250px", color: "white" }}>
						{Topfooterlinks}
					</div>
				</div>

				<div className="mid-footer">
					<div className="social-icons">
						<h2 className="text-xl font-bold" style={{ color: "darkslateblue"}}>Social networks</h2>
						<span className="flex space-x-6 pt-6">
							{SocialNetworks}
						</span>
					</div>
					<div className="newsletter">
						<h2 className="text-xl font-bold" style={{ color: "darkslateblue"}}>Newsletter</h2>
						<Newsletter />
					</div>
					<div className="coustomers-services">
						<h2 className=" text-xl font-bold" style={{ color: "darkslateblue"}}>Customer service</h2>
						<img className="" src={props._site?.c_coustomerservices.image?.url} />
						<p className="pt-4">{props._site?.c_coustomerservices.description}</p>
					</div>
				</div>
				<div className="footer-dropdown" style={{ color: "darkslateblue", display: "inline-block" }} >
					<div className="footer-dropdown-list" id="help-regards" style={{ display: "none", position: "absolute" }}>
						<ul className="flex space-x-16">
							<li >{Needhelp}</li>
							<li style={{ marginLeft: "10px" }}>{Whoareyou}</li>
							<li style={{ marginLeft: "120px" }}>{Servicesandproducts}</li>
							<li style={{ marginLeft: "150px" }}>{Inregardsto}</li>
						</ul>
					</div>
					<button onMouseOver={show_hide_help} onMouseOut={show_hide_help}>{HelpServicesRegards}</button>
				</div>
			</footer>
			<CookieConsent
				buttonText={"Accept"}
				buttonStyle={{
					marginLeft: "100px",
				}}
			>
				<p>
					{cookieText}
					<a className="text-cookies-link" href={cookiesUrl}>
						{StaticData.cookie}
					</a>

				</p>
			</CookieConsent>
		</>
	);
};

export default Footer;
// function handleMediaQueryChange(mediaQuery: MediaQueryList) {
// 	throw new Error("Function not implemented.");
// }

