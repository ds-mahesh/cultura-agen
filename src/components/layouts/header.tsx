import * as React from "react";
import Cta from "../commons/cta";
import logo from "../../images/logo copy.png";
import "../../index.css";
import Nav from "./Nav";

const Header = (props: any) => {
  const { label, images, _site } = props;

  // const toggle = () => {
	//   (document.getElementById("body") as HTMLInputElement).classList.toggle('');
	// }

  function show_hide() {
    var click :any= document.getElementById("product-link");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display ="none";
    }
  }



  function show_hide1() {
    var click :any = document.getElementById("specials-link");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  }

  function show_hide2() {
    var click :any= document.getElementById("our-cources-link");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  }

  function show_hide3() {
    var click :any= document.getElementById("easter-link");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  }

  let NewVAr: any = props.label;
  // console.log(props.label,"Props");
  const TopHeaderLink = props?._site?.c_topHeaderLink?.map((link: any) => (
    <a className="navbar-item" href={link.link} >
      <span className="text-blue-600">{link.label}   ||</span>
    </a>
  ));

  const NavBarlinks = props?._site?.c_navBarlinks?.map((link: any) => (
    <a className="flex navbar-item" href={link.link} >
      <span className=" text-blue-600">{link.navBarLabel.label}</span>
      <img className="pl-2" style={{ height: "23px", width: "28px"}} src={link.image?.url} />
    </a>
  ));

  const Productuniverselink = props?._site?.c_productuniverselink?.map((link: any) => (
    <a className="flex" href={link.link}>
     <button className="flex">{link.label}</button>      
    </a>
  ));

  const Specialslink = props?._site?.c_specialslink?.map((link: any) => (
    <a className="flex" href={link.link}>
     <button >{link.label}</button>      
    </a>
  ));

  const Ourcourselink = props?._site?.c_ourcourselink?.map((link: any) => (
    <a className="flex" href={link.link}>
     <button >{link.label}</button>      
    </a>
  ));

  const Easterlink = props?._site?.c_easterlink?.map((link: any) => (
    <a className="flex" href={link.link}>
     <button >{link.label}</button>      
    </a>
  ));

  const InspirationDIY = props?._site?.c_inspirationDIY?.map((link: any) => (
    <a className="flex gap-x-4 navbar-item" href={link.link} >
      <img className="rounded-full" style={{ height: "40px", width: "40px" }} src={link.image?.url} />
      <span className="text-blue-600" style={{marginTop:"5px"}}>{link.navBarLabel.label}</span>     
    </a>
  ));

  const CulturaImage = props?._site?.c_culturaImage?.map((link: any) => (
    <a className="flex gap-x-4 navbar-item" href="">
      <img className="" style={{ height: "24px", width: "80px" }} src={link.url} />     
    </a>
  ));

  return (
    <>
      <div className="" style={{ backgroundColor: "#252855" }}>
        <div style={{ height: "25px", backgroundColor: "" }} className="flex gap-x-4 ">
          <div style={{ color: "whitesmoke", fontSize: "12px", marginLeft: "970px" }} className="flex gap-x-8 text-2xl ">
            {TopHeaderLink}
          </div>
        </div>
      </div>
      <div className="" style={{ backgroundColor: "#5459bb" }}>
        <div style={{ height: "50px" }} className="flex gap-x-4">
          <div className="mt-4 ml-4">{CulturaImage}</div>
           <div className=""><Nav/></div> 
          <div style={{ marginLeft: "160px", color: "whitesmoke", marginTop: "15px" }} className="flex gap-x-6">
            {NavBarlinks}
          </div>
        </div>
      </div>
      <div className="pb-6" style={{ backgroundColor: "whitesmoke" }}>
        <div style={{ height: "50px" }} className="flex gap-x-8 ">
          <div style={{ color:"navy", marginTop: "20px",marginLeft:"40px",fontSize:"17px" }} className="flex gap-x-12 font-medium">
            <a className="flex " href={props?._site?.c_productUniverse.link} style={{position: "relative", display: "inline-block" }}>
              <button id="dropdown_button" onClick={show_hide} className="text-blue-600 font-bold">
                {props?._site?.c_productUniverse.label}
                <img className="h-6 w-40" src="https://www.freepnglogos.com/uploads/line-png/draw-black-line-transparent-png-11.png" />
              </button>
              
            </a>
            <a className=" " href={props?._site?.c_specials.link} style={{position: "relative", display: "inline-block"}}>
              <button onClick={show_hide1} className="text-blue-600 font-bold">
                {props?._site?.c_specials.label}
                <img className="h-6 w-32" src="https://www.freepnglogos.com/uploads/line-png/draw-black-line-transparent-png-11.png" />
                </button>
            </a>
            <a className=" " href={props?._site?.c_ourCourses.link} style={{position: "relative", display: "inline-block"}}>
              <button onClick={show_hide2} className="text-blue-600 font-bold">
                {props?._site?.c_ourCourses.label}
                <img className="h-6 w-36" src="https://www.freepnglogos.com/uploads/line-png/draw-black-line-transparent-png-11.png" />
                </button>
            </a>
            <a className="" href={props?._site?.c_easter.link} style={{position: "relative", display: "inline-block"}}>
              <button onClick={show_hide3} style={{color:"red"}} className="text-blue-600 font-bold">
                {props?._site?.c_easter.label}
                <img className="h-6 w-40" src="https://www.freepnglogos.com/uploads/line-png/draw-black-line-transparent-png-11.png" />
                </button>
            </a>            
          </div>
          <div className="flex gap-x-8" style={{marginTop: "15px",marginLeft:"350px"}}>
              {InspirationDIY}
            </div>
        </div>
      </div>
      <div id="product-link" className="font-semibold text-2xl" style={{ display: "none"}}>
        {Productuniverselink}
        </div>
      <div id="specials-link" className=" font-semibold text-2xl" style={{ display: "none" }}>
        {Specialslink}
        </div>
      <div id="our-cources-link" className=" font-semibold text-2xl" style={{ display: "none" }}>
        {Ourcourselink}
        </div>
      <div id="easter-link" className="font-semibold text-2xl" style={{ display: "none" }}>
        {Easterlink}
        </div>   
    </>
  );
};

export default Header;