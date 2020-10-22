import React, {PureComponent} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {CityNameToCoordinates} from '../../const.js';
import PropTypes from 'prop-types';
import {OFFER_PROP_TYPES} from '../../types';

const DEFAULT_ICON = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});

const ZOOM = 12;

class Map extends PureComponent {
  renderMap() {
    const city = CityNameToCoordinates[this.props.city];

    this.map = leaflet.map(`map`, {
      center: city,
      zoom: ZOOM,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, ZOOM);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(this.map);

    this.renderMarkers();
  }

  renderMarkers() {
    const {offers, activeCardId} = this.props;

    const getIcon = (id) => activeCardId === id ? ACTIVE_ICON : DEFAULT_ICON;

    offers.map((offer) => {
      const icon = getIcon(offer.id);
      leaflet
        .marker(offer.coordinates, {icon})
        .addTo(this.map);
    });
  }


  componentDidMount() {
    this.renderMap();
  }

  componentDidUpdate() {
    this.map.remove();
    this.renderMap();
  }

  render() {
    return <section id="map" className={`${this.props.className} map`} />;
  }
}

Map.propTypes = {
  className: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  activeCardId: PropTypes.number,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

export default Map;
