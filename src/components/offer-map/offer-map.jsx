import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CityNameToCoordinates} from '../../const.js';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types';

class OfferMap extends PureComponent {
  componentDidMount() {
    const city = CityNameToCoordinates[this.props.city];
    const defaultIcon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const activeIcon = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });

    const getIcon = (id) => this.props.activeCardId === id ? activeIcon : defaultIcon;

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(map);

    const offerCords = this.props.offers;

    offerCords.map((offer) => {
      const icon = getIcon(offer.id);
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(map);
    });
  }

  render() {
    return <section id="map" className="property__map map" />;
  }
}

OfferMap.propTypes = {
  city: PropTypes.string.isRequired,
  activeCardId: PropTypes.number,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

export default OfferMap;
