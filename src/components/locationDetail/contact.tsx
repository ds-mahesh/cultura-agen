import * as React from "react";
import Cta from "../commons/cta";
import Hours from "../commons/hours";
import woodtexture from "../../images/wood-texture.jpg";
import mapimage from "../../images/map.svg";
import Phonesvg from "../../images/phone.svg";
import Address from "../commons/Address";
import GetDirection from "../commons/GetDirection";
import { StaticData } from "../../../sites-global/staticData";
import Holidayhours from "./Holdayhours";
import Model from "./Model";
import CustomMap from "./CustomMap";

const Contact = (props: any) => {
  const {
    address,
    phone,
    latitude,
    longitude,
    hours,
    c_specific_day,
    additionalHoursText,
    yextDisplayCoordinate,
    c_storeInfoHeading,
    c_getDirectionsCTAText
  } = props;

  // function show_hide_hours() {
  //   var click: any = document.getElementById("hours-btn");
  //   if (click.style.display === "none") {
  //     click.style.display = "block";
  //   } else {
  //     click.style.display = "none";
  //   }
  // }


  return (
    <>
      <div className="address-main-sec rounded-t-lg">
        <p className="box-title pl-7">{c_storeInfoHeading ? c_storeInfoHeading : "contact details"}</p>

        <div className="icon-row content-col">
          {/* <div className="icon">
            {" "}
            <img className=" " src={mapimage} width="20" height="20" alt="mapimage" />
          </div> */}
          <div className="  address-text notHighlight">
            {address.line1}
            <div>{address.line2 && <div>{address.line2}</div>}</div>
            <div className="flex">
              <div style={{width:"320px"}}>{address.postalCode} {address.city}  {phone}</div>
              <div className="location-btn rounded-lg" style={{ backgroundColor: "skyblue", color: "white" }}>
                <GetDirection
                  buttonText={c_getDirectionsCTAText ? c_getDirectionsCTAText : StaticData.getDirection}
                  address={address}
                  latitude={latitude}
                  longitude={longitude}
                />
              </div>
            </div>

            {/* <div>{address.postalCode}</div> */}
          </div>
        </div>
        <hr />

        {/* {phone ? (
          <div className="icon-row">
            <div className="icon">
              {" "}
              <img className=" " src={Phonesvg} width="22" height="22" alt="phonesvg" />
            </div>
            <div className="content-col">
              <a id="address" className=" location-phn" href={`tel:${phone}`}>
                {phone}
              </a>
            </div>
          </div>
        ) : (
          ""
        )} */}

        {/* <ul className="">
          <li className="button-bx direction-button">
            <GetDirection
              buttonText={c_getDirectionsCTAText?c_getDirectionsCTAText:StaticData.getDirection}
              address={address}
              latitude={latitude}
              longitude={longitude}
            />
          </li>
        </ul> */}

        <div className="map-sec">
          <CustomMap prop={yextDisplayCoordinate} />
        </div>

      </div>

      {hours && typeof hours.monday != "undefined" ? (
        <div className="hours rounded-b-lg">
          <div className="hours-sec ">
            <div className="title-with-link-1">
              <button className="box-title flex space-x-4" ><h6>{"Opening hours"}</h6>
                {/* <img className="h-6 w-6" src="https://cdn-icons-png.flaticon.com/512/57/57055.png" /> */}
                {/* <p>------------------------------</p> */}
                {/* <h6>{"Mon.-Sun."}</h6> */}
              </button>
            </div>
            <div className="hours-div mb-5 md:mb-1 flex flex-col" id="hours-btn">
              {hours.holidayHours && typeof hours.reopenDate == "undefined" ? (
                <>
                  <Model
                    name={StaticData.Holdiay}
                    holidayHours={hours.holidayHours}
                    c_specific_day={c_specific_day}
                  />
                </>
              ) : (
                ""
              )}

              {/* <div className="title-with-link-1"> */}
              {/* <h4 className="box-title">{"Store Hours"}</h4> */}
              {/* <h6 className="box-title">{"Mon.-Sat............................................................9:00-20:00"}</h6>
              </div>
              <div><h6 className="box-title">{"Sun...............................................................................Farm"}</h6>
              </div> */}
              {hours && (
                <Hours
                  title={" Opening"}
                  additionalHoursText={additionalHoursText}
                  hours={hours}
                  c_specific_day={c_specific_day}
                />
              )}
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Contact;
