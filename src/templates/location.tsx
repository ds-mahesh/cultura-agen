import * as React from "react";
import Banner from "../components/locationDetail/banner";
import Cta from "../components/commons/cta";
import Contact from "../components/locationDetail/contact";
import ApiCall from "../Apis/ApiCall";
import Nearby from "../components/locationDetail/Nearby";
import { CustomFieldDebuggerReactProvider } from '@yext/custom-field-debugger';
import { JsonLd } from "react-schemaorg";
import Opening from "../components/commons/openClose";
import { nearByLocation } from "../types/nearByLocation";
import Logo from "../images/logo-header.svg"
import offerBanner from "../images/offer-banner.jpg"
import IframeMap from "../components/locationDetail/IframeMap";
import "../index.css";
import redmapimage from "../images/red-map.svg";
import {
  Template,
  GetPath,
  GetRedirects,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
  GetHeadConfig,
  TransformProps,
  HeadConfig,
} from "@yext/pages";
import PageLayout from "../components/layouts/PageLayout";
import { fetch } from "@yext/pages/util";
import Nav from "../components/layouts/Nav";
import Footer from "../components/layouts/footer";
import Menu from "../components/locationDetail/Menu";
import PhotoSlider from "../components/locationDetail/PhotoSlider";
import PhotoGallery from "../components/locationDetail/PhotoGallery";
import About from "../components/locationDetail/About";
import Breadcrumb from "../components/layouts/Breadcrumb";
import CustomMap from "../components/locationDetail/CustomMap";
import BreadCrumbs from "../components/layouts/Breadcrumb";
import StoreHighlight from "../components/locationDetail/SoreHighlight";
import OpenClose from "../components/commons/openClose";
import Faq from "../components/locationDetail/Faqs";
import { StaticData } from "../../sites-global/staticData";

import { apikey_for_entity, baseuRL, stagingBaseurl, AnalyticsEnableDebugging, AnalyticsEnableTrackingCookie, favicon } from "../../sites-global/global";
import {
  AnalyticsProvider,
  AnalyticsScopeProvider,
} from "@yext/pages/components";
import FeaturesBrand from "../components/locationDetail/FeaturesBrand";
import { Fade, Slide } from "react-awesome-reveal";
import MgmTimber from "../components/locationDetail/MgmTimber";
import { AnswerExperienceConfig } from "../config/answersHeadlessConfig";

/**
 * Required when Knowledge Graph data is used for a template.
 */
export const config: TemplateConfig = {
  stream: {
    $id: "locations",
    // Specifies the exact data that each generated document will contain. This data is passed in
    // directly as props to the default exported function.
    fields: [
      "id",
      "uid",
      "meta",
      "name",
      "address",
      "mainPhone",
      "hours",
      "slug",
      "timezone",
      "yextDisplayCoordinate",
      "displayCoordinate",
      "cityCoordinate",
      // "c_kidsandEaster",
      "c_registernowctaimage",
      "c_registernowbgimage",
      "c_notToBeMissed",
      "c_happensatculturaheading",
      "c_newsStore",
      "c_theDivingBoard",
      "c_iTeamUp",
      "c_giftCard",
      // "c_happensatcultura",
      "c_join",
      "c_joinheading",
      "c_newsOfthemoment",
      "c_tendency"

    ],
    // Defines the scope of entities that qualify for this stream.
    filter: {
      entityTypes: ['location']

    },
    // The entity language profiles that documents will be generated for.
    localization: {
      locales: ["en"],
      primary: false,
    },
  },
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<TemplateProps> = ({ document }) => {
  // var url = "";
  // var name: any = document.name.toLowerCase();
  // var string: any = name.toString();;
  // let result: any = string.replaceAll(" ", "-");
  // document.dm_directoryParents.map((result: any, i: Number) => {
  //   if (i > 0) {
  //     url += result.slug + "/"
  //   }
  // })
  // if (!document.slug) {
  //   url += `${result}.html`;
  // } else {
  //   url += `${document.slug.toString()}.html`;
  // }

  return document.id;
};
/**
 * Defines a list of paths which will redirect to the path created by getPath.
 *
 * NOTE: This currently has no impact on the local dev path. Redirects will be setup on
 * a new deploy.
 */
export const getRedirects: GetRedirects<TemplateProps> = ({ document }) => {
  return [`index-old/${document.id}`];
};

/**
 * This allows the user to define a function which will take in their template
 * data and procude a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = ({
  relativePrefixToRoot,
  path,
  document,
}): HeadConfig => {
  return {
    title: document.c_meta_title ? document.c_meta_title : `${document.name} Cultura Agen - Infos pratiques `,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find the ${document.name} Cultura Agen - Infos pratiques in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },


      {
        type: "meta",
        attributes: {
          name: "author",
          content: StaticData.Brandname,
        },
      },

      {
        type: "meta",
        attributes: {
          name: "robots",
          content: "noindex, nofollow",
        },
      },

      {
        type: "link",
        attributes: {
          rel: "canonical",
          href: `${document._site.c_canonical ? document.c_canonical : stagingBaseurl

            }${document.slug ? document.slug : `${document.name.toLowerCase()}`}.html`,
        },
      },

      {
        type: "meta",
        attributes: {
          property: "og:description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find the ${document.name} Cultura Agen - Infos pratiques in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      {
        type: "link",
        attributes: {
          rel: "shortcut icon",
          href: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:title",
          content: `${document.name}`,
        },
      },
      {
        type: "meta",
        attributes: {
          property: "og:image",
          content: favicon,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:card",
          content: "summary",
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:title",
          content: document.c_meta_title ? document.c_meta_title : `${document.name} Cultura Agen - Infos pratiques`,
        },
      },
      {
        type: "meta",
        attributes: {
          name: "twitter:description",
          content: `${document.c_meta_description ? document.c_meta_description : `Find the ${document.name} Cultura Agen - Infos pratiques in ${document.address.city}. We stock high-quality, robust products at competitive rates.`}`,
        },
      },
      /// twitter tag






    ],

  };
};
type ExternalApiData = TemplateProps & { externalApiData: nearByLocation };
export const transformProps: TransformProps<ExternalApiData> = async (
  data: any
) => {

  var location = `${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.latitude : data.document.displayCoordinate.latitude},${data.document.yextDisplayCoordinate ? data.document.yextDisplayCoordinate.longitude : data.document.displayCoordinate.longitude}`;

  const url = `${AnswerExperienceConfig.endpoints.verticalSearch}?experienceKey=${AnswerExperienceConfig.experienceKey}&api_key=${AnswerExperienceConfig.apiKey}&v=20220511&version=${AnswerExperienceConfig.experienceVersion}&locale=${AnswerExperienceConfig.locale}&location=${location}&locationRadius=${AnswerExperienceConfig.locationRadius}&verticalKey=${AnswerExperienceConfig.verticalKey}&limit=4&retrieveFacets=true&skipSpellCheck=false&sessionTrackingEnabled=true&source=STANDARD`;
  console.log(url)
  const externalApiData = (await fetch(url).then((res: any) =>
    res.json()

  )) as nearByLocation;
  return { ...data, externalApiData };
};



type ExternalApiRenderData = TemplateRenderProps & {
  externalApiData: nearByLocation;
};

const Location: Template<ExternalApiRenderData> = ({
  relativePrefixToRoot,
  path,
  document,
  __meta,
  externalApiData,
}) => {
  const {
    _site,
    name,
    address,
    slug,
    hours,
    mainPhone,
    photoGallery,
    c_banner_image,
    c_canonical,
    description,
    additionalHoursText,
    timezone,
    yextDisplayCoordinate,
    displayCoordinate,
    cityCoordinate,
    // c_kidsandEaster,
    c_newsOfthemoment,
    c_tendency,
    c_registernowctaimage,
    c_registernowbgimage,
    c_notToBeMissed,
    c_happensatculturaheading,
    // c_happensatcultura,
    c_join,
    c_joinheading,
    c_newsStore,
    c_theDivingBoard,
    c_iTeamUp,
    c_giftCard
  } = document;

  // const Hours= hours?.monday?.openIntervals?.map((link: any) => (
  //   <span>{link.start}-{link.end}</span>
  // ));


  const NewsOfthemoment = 
    <a className="w-full" href={c_newsOfthemoment.cardcta.link} >
      <div className="w-full">
        <img className="h-80 w-full" src={c_newsOfthemoment.cardimage.url} />
      </div>
      <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-260px" ,color:"darkslateblue" }}>
        <h2 className="font-medium text-xl">{c_newsOfthemoment.cardTitle}</h2>
        <p>Until {c_newsOfthemoment.cardDate}</p>
        <h1 className="pt-9 font-bold">{c_newsOfthemoment.cardHeading}</h1>
        <p className="text-xl font-medium pt-12 pb-6">{c_newsOfthemoment.carddescription}</p>
        <button id="btn-kids-easter" className="rounded-lg px-6 py-4 border border-indigo-600">{c_newsOfthemoment.cardcta.label}</button><br />
      </div>
    </a>

const Tendency = 
<a className="w-full" href={c_tendency.cardcta.link} >
  <div className="w-full">
    <img className="h-80 w-full" src={c_tendency.cardimage.url} />
  </div>
  <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-260px" ,color:"orangered" }}>
    <h2 className="font-medium text-xl">{c_tendency.cardTitle}</h2>
    <p>Until {c_tendency.cardDate}</p>
    <h1 className="pt-9 font-bold">{c_tendency.cardHeading}</h1>
    <p className="text-xl font-medium pt-12 pb-6">{c_tendency.carddescription}</p>
    <button id="btn-kids-easter" className="rounded-lg px-6 py-4 border border-indigo-600">{c_tendency.cardcta.label}</button><br />
  </div>
</a>
 

  const Registernowbgimage = c_registernowbgimage?.map((link: any) => (
    <img className="w-full h-96" src={link?.url} />
  ));

  // const NewsStore =
  //   <a className="w-full" href={c_newsStore.cardcta.link} >
  //     <div className="w-full">
  //       <img className="h-96 w-full" src={c_newsStore.cardimage.url} />
  //     </div>
  //     <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-300px" }}>
  //       <h2 className="font-medium text-xl">{c_newsStore.cardTitle}</h2>
  //       <p>Until {c_newsStore.cardDate}</p>
  //       <h1 className="pt-12 font-bold">{c_newsStore.cardHeading}</h1>
  //       <p className="text-xl font-medium pt-12 pb-6">{c_newsStore.carddescription}</p>
  //       <button id="btn-kids-easter" className="rounded-lg px-4 py-4 border border-indigo-600">{c_newsStore.cardcta.label}</button>
  //     </div>
  //   </a>

  // const TheDivingBoard =
  //   <a className="w-full" href={c_theDivingBoard.cardcta.link} >
  //     <div className="w-full">
  //       <img className="h-96 w-full" src={c_theDivingBoard.cardimage.url} />
  //     </div>
  //     <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-300px" }}>
  //       <h2 className="font-medium text-xl">{c_theDivingBoard.cardTitle}</h2>
  //       <p>Until {c_theDivingBoard.cardDate}</p>
  //       <h1 className="pt-12 font-bold">{c_theDivingBoard.cardHeading}</h1>
  //       <p className="text-xl font-medium pt-12 pb-6">{c_theDivingBoard.carddescription}</p>
  //       <button id="btn-kids-easter" className="rounded-lg px-4 py-4 border border-indigo-600">{c_theDivingBoard.cardcta.label}</button>
  //     </div>
  //   </a>

  // const ITeamUp =
  //   <a className="w-full" href={c_iTeamUp.cardcta.link} >
  //     <div className="w-full">
  //       <img className="h-96 w-full" src={c_iTeamUp.cardimage.url} />
  //     </div>
  //     <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-300px" }}>
  //       <h2 className="font-medium text-xl">{c_iTeamUp.cardTitle}</h2>
  //       <p>Until {c_iTeamUp.cardDate}</p>
  //       <h1 className="pt-12 font-bold">{c_iTeamUp.cardHeading}</h1>
  //       <p className="text-xl font-medium pt-12 pb-6">{c_iTeamUp.carddescription}</p>
  //       <button id="btn-kids-easter" className="rounded-lg px-4 py-4 border border-indigo-600">{c_iTeamUp.cardcta.label}</button>
  //     </div>
  //   </a>

  // const GiftCard =
  //   <a className="w-full" href={c_giftCard.cardcta.link} >
  //     <div className="w-full">
  //       <img className="h-96" src={c_giftCard.cardimage.url} />
  //     </div>
  //     <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-300px" }}>
  //       <h2 className="font-medium text-xl">{c_giftCard.cardTitle}</h2>
  //       <p>Until {c_giftCard.cardDate}</p>
  //       <h1 className="pt-12 font-bold">{c_giftCard.cardHeading}</h1>
  //       <p className="text-xl font-medium pt-12 pb-6">{c_giftCard.carddescription}</p>
  //       <button id="btn-kids-easter" className="rounded-lg px-4 py-4 border border-indigo-600">{c_giftCard.cardcta.label}</button>
  //     </div>
  //   </a>

  const Join = c_join?.map((link: any) => (
    <a className="" href={link.link} >
      <button id="btn-join" className="rounded-full px-4 py-2 border border-indigo-600">{link.label}</button><br />
    </a>
  ));


  let templateData = { document: document, __meta: __meta };
  let hoursSchema = [];
  let breadcrumbScheme = [];
  for (var key in hours) {
    if (hours.hasOwnProperty(key)) {
      let openIntervalsSchema = "";
      if (key !== "holidayHours") {
        if (hours[key].isClosed) {
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: key,
          };
        } else {
          let end = "";
          let start = "";
          if (typeof hours[key].openIntervals != "undefined") {
            let openIntervals = hours[key].openIntervals;
            for (var o in openIntervals) {
              if (openIntervals.hasOwnProperty(o)) {
                end = openIntervals[o].end;
                start = openIntervals[o].start;
              }
            }
          }
          openIntervalsSchema = {
            "@type": "OpeningHoursSpecification",
            closes: end,
            dayOfWeek: key,
            opens: start,
          };
        }
      } else {
      }

      hoursSchema.push(openIntervalsSchema);
    }
  }
  document.dm_directoryParents &&
    document.dm_directoryParents.map((i: any, index: any) => {
      if (i.meta.entityType.id == "ce_country") {
        document.dm_directoryParents[index].name =
          document.dm_directoryParents[index].name;
        document.dm_directoryParents[index].slug =
          document.dm_directoryParents[index].slug;

        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +

              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_region") {
        let url = "";
        document.dm_directoryParents.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_region" &&
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url + "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      } else if (i.meta.entityType.id == "ce_city") {
        let url = "";
        document.dm_directoryParents.map((j: any) => {
          if (
            j.meta.entityType.id != "ce_city" &&
            j.meta.entityType.id != "ce_root"
          ) {
            console.log(j, "j");
            url = url + "/" + j.slug;
          }
        });
        breadcrumbScheme.push({
          "@type": "ListItem",
          position: index,
          item: {
            "@id":
              stagingBaseurl +
              url + "/" +
              document.dm_directoryParents[index].slug +
              ".html",
            name: i.name,
          },
        });
      }
    });

  breadcrumbScheme.push({
    "@type": "ListItem",
    position: 4,
    item: {
      "@id": stagingBaseurl + path,
      name: document.name,
    },
  });
  let imageurl = photoGallery ? photoGallery.map((element: any) => {
    return element.image.url
  }) : null;
  console.log(document)
  let bannerimage = c_banner_image && c_banner_image.image.url;


  return (

    <>

      <JsonLd<Store>
        item={{
          "@context": "https://schema.org",
          "@type": "DepartmentStore",
          name: name,
          address: {
            "@type": "PostalAddress",
            streetAddress: address.line1,
            addressLocality: address.city,
            addressRegion: address.region,
            postalCode: address.postalCode,
            addressCountry: address.countryCode,
          },
          openingHoursSpecification: hoursSchema,
          description: description,
          image: imageurl,
          telephone: mainPhone,
          url: `${c_canonical ? c_canonical : stagingBaseurl}${slug ? slug : `${name}`}.html`
        }}
      />
      <JsonLd<BreadcrumbList>
        item={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",

          itemListElement: breadcrumbScheme,
        }}
      />



      <AnalyticsProvider
        templateData={templateData}
        enableDebugging={AnalyticsEnableDebugging}
        enableTrackingCookie={AnalyticsEnableTrackingCookie}
      >
        {" "}
        <AnalyticsScopeProvider name={""}>
          <PageLayout _site={_site}>
            <div className="breadcrumb-header" style={{backgroundColor:"darkslateblue",color:"white",height:"250px"}}>
            <BreadCrumbs
              name={name}
              address={address}
              // parents={dm_directoryParents}
              baseUrl={relativePrefixToRoot}
            ></BreadCrumbs>
            
            <div className="container">
              <div className='banner-text banner-dark-bg'>
                <h1 className="" style={{fontSize:"50px",color:"whitesmoke"}}><b>{name}</b></h1>
                <div className="openClosestatus detail-page closeing-div pt-2">
                  <OpenClose timezone={timezone} hours={hours} />
                </div>
               <div className=" flex space-x-2 pt-3 pl-2"><img className=" " src="https://th.bing.com/th/id/R.38cd95fd9b5c36f07cb7283acb457abd?rik=9KyAWm1gpxL6uQ&riu=http%3a%2f%2fimages.clipartpanda.com%2flocation-icon-iphone-near-me.png&ehk=P4psrXav0nvYH93VgR%2bH52hOSydRzYWI3PJTxgTlvso%3d&risl=&pid=ImgRaw&r=0" width="20" height="20"
                alt={''} />
                <h6>Set as favorite store</h6>
                </div>
              </div>
            </div>
            </div>
            <div className="location-information">
            {/* <Contact address={address}  phone={mainPhone} ></Contact> */}
            <div className="address-sec rounded-t-lg">
              <Contact address={address}
                phone={mainPhone} latitude={yextDisplayCoordinate ? yextDisplayCoordinate.latitude : displayCoordinate?.latitude}
                yextDisplayCoordinate={yextDisplayCoordinate} longitude={yextDisplayCoordinate ? yextDisplayCoordinate.longitude : displayCoordinate?.longitude} additionalHoursText={additionalHoursText} hours={hours}></Contact>
              </div>
              {
                hours ?
                  <div className="map-sec" id="map_canvas">
                    <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
                  </div> :
                  <div className="map-sec without-hours" id="map_canvas">
                    <CustomMap prop={yextDisplayCoordinate ? yextDisplayCoordinate : displayCoordinate} />
                  </div>
              }
            </div>
          {/* <div>{Hours}</div> */}
            <div className="nearby-sec">
              <div className="container">
                <div className="sec-title"><h2 className="" >{StaticData.NearStoretext}</h2></div>
                <div className="nearby-sec-inner">
                  {yextDisplayCoordinate || cityCoordinate || displayCoordinate ?
                    <Nearby externalApiData={externalApiData} />
                    : ''}
                </div>
              </div>
            </div>
            <div className="flex space-x-6  pl-20 pr-20">
              {NewsOfthemoment}
              {Tendency}
            </div>
            <div className="pt-6">
              <div>{Registernowbgimage}</div>
              <div className="text-red" style={{ marginTop: "-280px" }}>
                <h2 className="font-semibold flex justify-center">{c_registernowctaimage.title}</h2>
                <h1 className="font-bold text-5xl flex justify-center pt-16">{c_registernowctaimage.heading}</h1>
                <a className="flex justify-center pt-16" href={c_registernowctaimage.cta.link}>
                  <button id="register-now" className="rounded-lg px-4 py-4 border border-indigo-600" >
                    {c_registernowctaimage.cta.label}
                  </button>
                </a>
              </div>
            </div>
            <div className="pl-20 pt-36">
              <div className="text-xl font-semibold" style={{ color: "darkslateblue" }}>{c_notToBeMissed}</div>
              <div className="font-bold text-5xl text-gray-800 pt-4 pb-6" style={{ color: "darkslateblue" }}>{c_happensatculturaheading}</div>
              <div className="flex space-x-6"style={{}}>
                {/* <div style={{width:"300px"}}>{NewsStore} </div>
                <div style={{width:"300px"}}>{TheDivingBoard} </div>
                <div style={{width:"300px"}}>{ITeamUp}</div>
                <div style={{width:"300px"}}>{GiftCard}</div> */}
                <PhotoSlider 
                c_newsStore={c_newsStore}
                c_theDivingBoard={c_theDivingBoard}
                c_iTeamUp={c_iTeamUp}
                c_giftCard={c_giftCard}
            /> 
            {/* <Slide c_newsStore={c_newsStore}/> */}
              </div>
            </div>
            
            <div className="pt-16">
              <h1 className="flex justify-center  text-6xl text-gray-800" style={{ color: "darkslateblue"}}><b>{c_joinheading}</b></h1>
              <div className="flex space-x-8 justify-center pt-6" id="join-btn">
                {Join}
              </div>
            </div>

          </PageLayout>
        </AnalyticsScopeProvider>
      </AnalyticsProvider>
    </>
  );
};

export default Location;