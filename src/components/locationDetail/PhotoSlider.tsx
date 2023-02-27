import * as React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const PhotoSlider = (props: any) => {
  const { photoGallery, height, width, c_newsStore, c_theDivingBoard,c_iTeamUp,c_giftCard } = props;
  // const Happensatcultura =props?.c_newsStore?.map((link: any) => (
  const NewsStore =
    <SplideSlide>
      <a className="w-full" href={c_newsStore.cardcta.link} >
        <div className="w-full">
          <img className="h-96 w-full" src={c_newsStore.cardimage.url} />
        </div>
        <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-300px" }}>
          <h2 className="font-medium text-xl">{c_newsStore.cardTitle}</h2>
          <p>Until {c_newsStore.cardDate}</p>
          <h1 className="pt-12 font-bold">{c_newsStore.cardHeading}</h1>
          <p className="text-xl font-medium pt-12 pb-6">{c_newsStore.carddescription}</p>
          <button id="btn-kids-easter" className="rounded-lg px-4 py-4 border border-indigo-600">{c_newsStore.cardcta.label}</button>
        </div>
      </a>
    </SplideSlide>

  const TheDivingBoard =
    <SplideSlide>
      <a className="w-full" href={c_theDivingBoard.cardcta.link} >
        <div className="w-full">
          <img className="h-96 w-full" src={c_theDivingBoard.cardimage.url} />
        </div>
        <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-300px" }}>
          <h2 className="font-medium text-xl">{c_theDivingBoard.cardTitle}</h2>
          <p>Until {c_theDivingBoard.cardDate}</p>
          <h1 className="pt-12 font-bold">{c_theDivingBoard.cardHeading}</h1>
          <p className="text-xl font-medium pt-12 pb-6">{c_theDivingBoard.carddescription}</p>
          <button id="btn-kids-easter" className="rounded-lg px-4 py-4 border border-indigo-600">{c_theDivingBoard.cardcta.label}</button>
        </div>
      </a>
    </SplideSlide>

const ITeamUp =
<SplideSlide>
  <a className="w-full" href={c_iTeamUp.cardcta.link} >
    <div className="w-full">
      <img className="h-96 w-full" src={c_iTeamUp.cardimage.url} />
    </div>
    <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-300px" }}>
      <h2 className="font-medium text-xl">{c_iTeamUp.cardTitle}</h2>
      <p>Until {c_iTeamUp.cardDate}</p>
      <h1 className="pt-12 font-bold">{c_iTeamUp.cardHeading}</h1>
      <p className="text-xl font-medium pt-12 pb-6">{c_iTeamUp.carddescription}</p>
      <button id="btn-kids-easter" className="rounded-lg px-4 py-4 border border-indigo-600">{c_iTeamUp.cardcta.label}</button>
    </div>
  </a>
</SplideSlide>

const GiftCard =
<SplideSlide>
  <a className="w-full" href={c_giftCard.cardcta.link} >
    <div className="w-full">
      <img className="h-96 w-full" src={c_giftCard.cardimage.url} />
    </div>
    <div className="pl-6 -mt-64 pb-24" style={{ marginTop: "-300px" }}>
      <h2 className="font-medium text-xl">{c_giftCard.cardTitle}</h2>
      <p>Until {c_giftCard.cardDate}</p>
      <h1 className="pt-12 font-bold">{c_giftCard.cardHeading}</h1>
      <p className="text-xl font-medium pt-12 pb-6">{c_giftCard.carddescription}</p>
      <button id="btn-kids-easter" className="rounded-lg px-4 py-4 border border-indigo-600">{c_giftCard.cardcta.label}</button>
    </div>
  </a>
</SplideSlide>
  // ));
  return (
    <>
      <Splide aria-label="Photo Slider">
        {NewsStore}
        {TheDivingBoard}
        {ITeamUp}
        {GiftCard}
      </Splide>
    </>
  );
};

export default PhotoSlider;