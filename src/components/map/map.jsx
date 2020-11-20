import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';

import {OFFER_PROP_TYPES} from '../../types';

import 'leaflet/dist/leaflet.css';

const DEFAULT_ICON = leaflet.icon({
  iconUrl: `/img/pin.svg`,
  iconSize: [30, 30]
});

const ACTIVE_ICON = leaflet.icon({
  iconUrl: `/img/pin-active.svg`,
  iconSize: [30, 30]
});

const LAYER = `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`;
const COPYRIGHT = `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`;

const getCityLocation = ([offer]) => {
  const {latitude, longitude, zoom} = offer.city.location;
  const city = [latitude, longitude];

  return {city, zoom};
};

class Map extends PureComponent {
  renderMarkers() {
    const {offers, activeCardId} = this.props;

    const getIcon = (id) => activeCardId === id ? ACTIVE_ICON : DEFAULT_ICON;

    this.layerGroup = leaflet.layerGroup(offers.map((offer) => {
      const icon = getIcon(offer.id);
      const coordinates = [offer.location.latitude, offer.location.longitude];
      return leaflet.marker(coordinates, {icon});
    }));
    this.layerGroup.addTo(this.map);
  }

  componentDidMount() {
    const {city, zoom} = getCityLocation(this.props.offers);

    this.map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView(city, zoom);

    leaflet
      .tileLayer(LAYER, {attribution: COPYRIGHT})
      .addTo(this.map);

    this.renderMarkers();
  }

  componentDidUpdate() {
    this.layerGroup.clearLayers();
    this.renderMarkers();
    const {city, zoom} = getCityLocation(this.props.offers);
    this.map.flyTo(city, zoom);
  }

  componentWillUnmount() {
    this.map.remove();
  }

  render() {
    return <section id="map" className={`${this.props.mapType} map`} />;
  }
}

Map.propTypes = {
  mapType: PropTypes.string.isRequired,
  activeCardId: PropTypes.number,
  offers: PropTypes.arrayOf(
      PropTypes.shape(OFFER_PROP_TYPES).isRequired
  ).isRequired,
};

export default Map;
