import * as React from "react";
import Cta from "../commons/cta";
import logo from "../../images/logo copy.png";
import "../../index.css";
import Nav from "./Nav";

const Header = (props: any) => {
  const { label, images, _site } = props;

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
          <div style={{ color: "whitesmoke", fontSize: "12px", marginLeft: "930px" }} className="flex gap-x-8 text-2xl ">
            {TopHeaderLink}
          </div>
        </div>
      </div>
      <div className="" style={{ backgroundColor: "#5459bb" }}>
        <div style={{ height: "50px" }} className="flex gap-x-4">
          <div className="mt-4 ml-4">{CulturaImage}</div>
           <div className=""><Nav/></div> 
          <div style={{ marginLeft: "230px", color: "whitesmoke", marginTop: "15px" }} className="flex gap-x-4">
            {NavBarlinks}
          </div>
        </div>
      </div>
      <div className="pb-6" style={{ backgroundColor: "whitesmoke" }}>
        <div style={{ height: "50px" }} className="flex gap-x-8 ">
          <div style={{ color:"navy", marginTop: "15px",marginLeft:"50px",fontSize:"16px" }} className="flex gap-x-8 font-medium">
            <a className="flex navbar-item" href={props?._site?.c_productUniverse.link} >
              <span className="text-blue-600">{props?._site?.c_productUniverse.label}</span>
            </a>
            <a className="flex navbar-item" href={props?._site?.c_specials.link} >
              <span className="text-blue-600">{props?._site?.c_specials.label}</span>
            </a>
            <a className="flex navbar-item" href={props?._site?.c_ourCourses.link} >
              <span className="text-blue-600">{props?._site?.c_ourCourses.label}</span>
            </a>
            <a className="flex navbar-item" href={props?._site?.c_easter.link} >
              <span style={{color:"red"}} className="text-blue-600">{props?._site?.c_easter.label}</span>
            </a>            
          </div>
          <div className="flex gap-x-8" style={{marginTop: "15px",marginLeft:"580px"}}>
              {InspirationDIY}
            </div>
        </div>
      </div>
    </>
  );
};

export default Header;