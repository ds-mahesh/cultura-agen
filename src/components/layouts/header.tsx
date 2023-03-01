import * as React from "react";
import Cta from "../commons/cta";
import logo from "../../images/logo copy.png";
import "../../index.css";
import Nav from "./Nav";

const Header = (props: any) => {
  const { label, images, _site } = props;

  function show_hide() {
    var click = document.getElementById("product-link");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display ="none";
    }
  }

  function show_hide1() {
    var click = document.getElementById("specials-link");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  }

  function show_hide2() {
    var click = document.getElementById("our-cources-link");
    if (click.style.display === "none") {
      click.style.display = "block";
    } else {
      click.style.display = "none";
    }
  }

  function show_hide3() {
    var click = document.getElementById("easter-link");
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
      <span className="text-blue-600">{link.navBarLabel.label}</span>
      <img style={{ height: "22px", width: "22px" }} src={link.image?.url} />
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
      <img className="rounded-full" style={{ height: "35px", width: "35px" }} src={link.image?.url} />
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
          <div style={{ marginLeft: "200px", color: "whitesmoke", marginTop: "15px" }} className="flex gap-x-4">
            {NavBarlinks}
          </div>
        </div>
      </div>
      <div className="pb-6" style={{ backgroundColor: "whitesmoke" }}>
        <div style={{ height: "50px" }} className="flex gap-x-8 ">
          <div style={{ color:"navy", marginTop: "20px",marginLeft:"40px",fontSize:"17px" }} className="flex gap-x-12 font-medium">
            <a className=" " href={props?._site?.c_productUniverse.link} style={{position: "relative", display: "inline-block" }}>
              <button onMouseOver={show_hide} className="text-blue-600 font-bold">{props?._site?.c_productUniverse.label}</button>
            </a>
            <a className=" " href={props?._site?.c_specials.link} style={{position: "relative", display: "inline-block"}}>
              <button onMouseOver={show_hide1} className="text-blue-600 font-bold">{props?._site?.c_specials.label}</button>
            </a>
            <a className=" " href={props?._site?.c_ourCourses.link} style={{position: "relative", display: "inline-block"}}>
              <button onMouseOver={show_hide2} className="text-blue-600 font-bold">{props?._site?.c_ourCourses.label}</button>
            </a>
            <a className="" href={props?._site?.c_easter.link} style={{position: "relative", display: "inline-block"}}>
              <button onMouseOver={show_hide3} style={{color:"red"}} className="text-blue-600 font-bold">{props?._site?.c_easter.label}</button>
            </a>            
          </div>
          <div className="flex gap-x-8" style={{marginTop: "15px",marginLeft:"520px"}}>
              {InspirationDIY}
            </div>
        </div>
      </div>
      <div id="product-link" className="flex space-x-20 pl-12 bg-red h-20 font-semibold text-2xl" style={{ display: "none"}}>{Productuniverselink}</div>
      <div id="specials-link" className="flex space-x-20 pl-12 bg-red h-20 font-semibold text-2xl" style={{ display: "none" }}>{Specialslink}</div>
      <div id="our-cources-link" className="flex space-x-20 pl-12 bg-red h-20 font-semibold text-2xl" style={{ display: "none" }}>{Ourcourselink}</div>
      <div id="easter-link" className="flex space-x-20 pl-12 bg-red h-20 font-semibold text-2xl" style={{ display: "none" }}>{Easterlink}</div>   
    </>
  );
};

export default Header;