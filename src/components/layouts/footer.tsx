import * as React from "react";
import "../../index.css";
import { cookieText, cookiesUrl } from "../../../sites-global/global"
import CookieConsent from "react-cookie-consent";
import { StaticData } from "../../../sites-global/staticData";
import { useEffect, useState } from "react";
import Link from "../commons/Link";
import Newsletter from "../commons/Newsletter";

// const Footer = ( props: any) => { 
// 	let NewVAr : any = props.label;
// 	console.log(props.label,"Props");
// 	const linkDoms = NewVAr.map((link:any) => (
// 	  <div className="grid place-items-center"> 
// 	  <a className="navbar-item" href={link.link} >   
// 		 <span> {link.label}</span>
// 		  <img src={link.icon?.url} className="h-10 w-10"/><br/>          
// 		</a>
// 		</div>      

// 	));
// 	const Services = props?._site?.c_digitalBusiness?.links?.map((link: any) => (
// 		<a className="navbar-item" href={link.link} >
// 		  <span>{link.label}</span><br />
// 		</a>
// 	  ));
const Footer = (props: any) => {
	const { label, images, _site } = props;
	console.log(props)
	React.useEffect(() => {
		document.body.setAttribute("id", "body");
	})
	// const toggle = () => {
	//   (document.getElementById("body") as HTMLInputElement).classList.toggle('');
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

	// const Pizzarestaurants = props?._site?.c_pizzarestaurant?.map((link: any) => (
	// 	<a className="navbar-item" href={link.link} >
	// 	  <span>{link.label}</span><br />
	// 	</a>
	//   ));

	//   const Aboutus = props?._site?.c_about?.map((link: any) => (
	// 	<a className="navbar-item" href={link.link} >
	// 	  <span>{link.label}</span><br />
	// 	</a>
	//   ));

	//   const Legal = props?._site?.c_legal?.map((link: any) => (
	// 	<a className="navbar-item" href={link.link} >
	// 	  <span>{link.label}</span><br />
	// 	</a>
	//   ));



	//   const services = c_servicesIn?.map((link: any) => (
	// 	<a className="navbar-item" href={link.link} >
	// 	  <span>{link.label}</span><br />
	// 	</a>
	//   ));

	return (
		<>
			<footer className="site-footer inline-block w-full pt-6 " style={{ paddingTop: "20px" }}>
			<div className="flex justify-center pb-9 text-lg font-bold pt-6 " style={{color:"navy"}}>
				<button>
              { props?._site?.c_back_to_top}
			  </button>
            </div>
				<div style={{ backgroundColor: "#252855", height: "160px" }} >
					<div className="flex space-x-24 pt-6" style={{ width: "1000px", marginLeft: "250px", color: "white" }}>
						{Topfooterlinks}
					</div>
				</div>

				<div className="flex space-x-28 " style={{paddingTop:"20px",paddingLeft:"50px"}}>
					<div className="" style={{paddingLeft:"100px"}}>
						<h2 className="text-xl font-bold" style={{ color: "darkslateblue",marginLeft:"50px" }}>Social networks</h2>
						<div className="flex space-x-6 pt-6">
							{SocialNetworks}
						</div>
					</div>
					<div className="">
						<h2 className="text-xl font-bold" style={{ color: "darkslateblue",marginLeft:"100px" }}>Newsletter</h2>
						<Newsletter />
					</div>
					<div style={{ width: "380px" }}>
						<h2 className="flex justify-center text-xl font-bold" style={{ color: "darkslateblue",marginLeft:"30px" }}>Customer service</h2>
						<div className="flex justify-center pt-4">
							<img className="" style={{ height: "20px", width: "250px" }} src={props._site?.c_coustomerservices.image?.url} />							
						</div>
						<p className="flex justify-center pt-4">{props._site?.c_coustomerservices.description}</p>
					</div>

				</div>



				<div className="pt-12" style={{ height: "150px" }}>
					<div style={{ height: "25px", backgroundColor: "" }} className="flex gap-x-4 ">
						<div style={{ color: "darkslateblue",  marginLeft: "260px" }} className="text-xl font-bold">
							<b className="flex space-x-28">{HelpServicesRegards}</b>
						</div>
					</div>
				</div>

				{/* <div  className="container px-6 pt-6" style={{height:"330px"}}>
					<div className="store-locator">					   
		              <h2>COMPANY</h2> 
                           <div className="text-2xl pt-6 ">
		                       {props._site?.c_company?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer">
                               <li><a >{Company}</a></li>
                               </ul>
                           </div>
			          					  					  					 
				    </div>
					<div className="store-locator">					   
		                 <h2>PIZZA RESTAURANTS</h2>
                           <div className=" text-2xl pt-6">
		                       {props._site?.c_pizzarestaurant?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer  ">
                               <li><a >{Pizzarestaurants}</a></li>
                               </ul>
                           </div>
			          					  					  					 
				    </div>
					<div className="store-locator">					   
		               <h2>ABOUT</h2>
                           <div className="text-2xl  pt-6">
		                       {props._site?.c_about?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer ">
                               <li><a >{Aboutus}</a><br /></li>
                               </ul>
                           </div>
			         					  					  					 
				    </div>
					<div className="store-locator">					   
		                <h2>LEGAL</h2>
                           <div className="text-2xl  pt-6">
		                       {props._site?.c_legal?.headingName}
                               <ul style={{ color: "black" }} className="menu_footer ">
                               <li><a >{Legal}</a></li>
                               </ul>
                           </div>
			          					  					  					 
				    </div>
					<div className="store-locator">	
					<h2>SOCIAL MEDIA</h2>				   
                           <div className="flex grid grid-cols-4 gap-4 pt-6">
		                       {props._site?.c_icons?.headingName}
								 {Icons} 
								<div className="w-56"> <img src={_site?.c_logo?.url} alt="" className="h-16"/>  </div>                                        
                           </div>
			          </div>
					<div> */}
				{/* <div style={{fontSize:"Oswald" ,backgroundColor:"",height:"70px"}} className="flex gap-x-10">
               <img src={_site.c_footerlogo?.url} style={{height:"70px",width:"100px"}}/>
                  <div style={{padding:"20px"}} className="flex gap-x-10 text-2xl">
                     {_site.c_footerDescription}
                  </div>
            </div> */}
				{/* </div>
					      														
				</div>	 */}

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

