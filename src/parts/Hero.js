import React from 'react'

import ImageHero from 'assets/images/img-hero.jpg'
import ImageHeroFrame from 'assets/images/img-hero-frame.jpg'
import IconCities from 'assets/images/icons/icon-cities.svg'
import IconTraveler from 'assets/images/icons/icon-traveler.svg'
import IconTreasure from 'assets/images/icons/icon-treasure.svg'

import Button from 'elements/Button'

import numberFormat from 'utils/formatNumber'

export default function Hero(props) {

  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: 'smooth'
    })
  }

  return (
    <section className="container pt-4">
      <div className="row align-item">
        <div className="col pr-5" style={{ width: 500 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p className="mb-5 font-weight-light text-gray-500 w-75">
            We provide what you need to enjoy your holiday with family. Time to make another memorable moments.
          </p>
          <Button className="btn px-5" hasShadow isPrimary onClick={showMostPicked}>Show Me</Button>
          <div className="row mt-5">
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={IconTraveler} alt={`${props.data.travelers} Travelers`} />
              <h6 className="mt-3">
                {numberFormat(props.data.travelers)} <span className="text-gray-500 font-weight-light">travelers</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={IconCities} alt={`${props.data.cities} Cities`} />
              <h6 className="mt-3">
                {numberFormat(props.data.cities)} <span className="text-gray-500 font-weight-light">cities</span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 35 }}>
              <img width="36" height="36" src={IconTreasure} alt={`${props.data.treasures} Treasure`} />
              <h6 className="mt-3">
                {numberFormat(props.data.treasures)} <span className="text-gray-500 font-weight-light">treasure</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 pl-5">
          <img src={ImageHero} className="img-fluid position-absolute" alt="Rome with couches" style={{ width: 420, zIndex: 2, left: 60 }} />
          <img src={ImageHeroFrame} className="img-fluid position-absolute" alt="Rome with couches frame" style={{ width: 420, zIndex: 1, left: 90, top: 30 }} />
        </div>
      </div>
    </section>
  )
}