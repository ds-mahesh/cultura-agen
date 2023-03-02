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
	console.log(props)
	React.useEffect(() => {
		document.body.setAttribute("id", "body");
	})
	// const toggle = () => {
	//   (document.getElementById("body") as HTMLInputElement).classList.toggle('');
	// }
	// function show_hide_help() {
	// 	var click = document.getElementById("help-regards");
	// 	if (click.style.display === "none") {
	// 		click.style.display = "block";
	// 	} else {
	// 		click.style.display = "none";
	// 	}
	// }

	const Topfooterlinks = props?._site?.c_topfooterlinks?.map((link: any) => (
		<div className="" style={{ width: "160px" }}>
			<a className="" href={link.link} >
				<img src={link.image?.url} className=" h-12 w-12 flex justify-center" />
				<span className=""> {link.navBarLabel.label}</span>
			</a>
		</div>
	));

	const SocialNetworks = props?._site?.c_socialNetworks?.map((link: any) => (
		<div className="" style={{}}>
			<a className="" href={link.link} >
				<img src={link.image?.url} className="" style={{ height: "15px", width: "18px" }} /><br />
				{/* <span className=""> {link.navBarLabel?.label}</span> */}
			</a>
		</div>
	));

	const HelpServicesRegards = props?._site?.c_helpServicesRegards?.map((link: any) => (
		<a className="" href={link.link} >
			<span>||{link.label} ||</span><br />
		</a>
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

				<div className="flex space-x-28 " style={{ paddingTop: "20px", paddingLeft: "50px" }}>
					<div className="" style={{ paddingLeft: "100px" }}>
						<h2 className="text-xl font-bold" style={{ color: "darkslateblue", marginLeft: "50px" }}>Social networks</h2>
						<div className="flex space-x-6 pt-6">
							{SocialNetworks}
						</div>
					</div>
					<div className="">
						<h2 className="text-xl font-bold" style={{ color: "darkslateblue", marginLeft: "100px" }}>Newsletter</h2>
						<Newsletter />
					</div>
					<div style={{ width: "380px" }}>
						<h2 className="flex justify-center text-xl font-bold" style={{ color: "darkslateblue", marginLeft: "30px" }}>Customer service</h2>
						<div className="flex justify-center pt-4">
							<img className="" style={{ height: "20px", width: "250px" }} src={props._site?.c_coustomerservices.image?.url} />
						</div>
						<p className="flex justify-center pt-4">{props._site?.c_coustomerservices.description}</p>
					</div>

				</div>
				<div className="pt-12 pb-24" style={{}}>
					<div style={{ backgroundColor: "" }} className="flex gap-x-4 ">
						<div style={{ color: "darkslateblue", marginLeft: "280px", position:"absolute", display: "inline-block" }} className="text-xl font-bold">
							<button className="flex space-x-28">{HelpServicesRegards}</button>
						</div>
					</div>
				</div>
				{/* <div className="container flex" id="help-regards" style={{ display: "none",position:"relative" }}>
					<div className="flex space-x-28">
						<div className="text-xl">
							<ul style={{ color: "black" }} className="menu_footer">
								<li><a >{Needhelp}</a></li>
							</ul>
						</div>
						<div className="text-xl">
							<ul style={{ color: "black"}} className="menu_footer">
								<li><a >{Whoareyou}</a></li>
							</ul>
						</div>
						<div className="text-xl">{props._site?.c_company?.headingName}
							<ul style={{ color: "black" }} className="menu_footer">
								<li><a >{Servicesandproducts}</a></li>
							</ul>
						</div>
						<div className="text-xl">
							<ul style={{ color: "black" }} className="menu_footer">
								<li><a >{Inregardsto}</a></li>
							</ul>
						</div>
					</div>
				</div> */}


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

