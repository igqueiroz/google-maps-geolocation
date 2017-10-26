import React, {Component}  from 'react'
import ReactDOM from 'react-dom'
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react'

export class IncludeMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: this.props.reset,
            activeMarker: {},
            selectedPlace: {},
        };
        
        this.onMarkerClick = this.onMarkerClick.bind(this);
        this.onMapClicked = this.onMapClicked.bind(this);
    }
    onMarkerClick(props, marker, e) {
        this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true,
        });
    }
    onMapClicked(props) {
        if (this.state.showingInfoWindow) {
          this.setState({
            showingInfoWindow: false,
            activeMarker: null
          })
        }
    }
    render() {
        return (
            
            <Map 
            google={this.props.google} 
            zoom={this.props.zoom}
            onClick={this.onMapClicked}
            center={{lat: this.props.setCenter[0], lng: this.props.setCenter[1]}}
            >

                <Marker
                    onClick={this.onMarkerClick}
                    title={'My Location'}
                    name={'My Location'}
                    position={{lat: this.props.updateMap[0], lng: this.props.updateMap[1]}}
                />

                <Marker
                    onClick={this.onMarkerClick}
                    title={'My Site`s Location'}
                    name={this.props.siteName}
                    position={{lat: this.props.updateMyLocation[0], lng: this.props.updateMyLocation[1]}}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}>
                    <div>
                        <h3>{this.state.selectedPlace.name}</h3>
                    </div>
                </InfoWindow>
            </Map>
        );
      }
    }

export default GoogleApiWrapper({
  apiKey: "AIzaSyC8AqZGEDQvRcNCofun-o3YSJXU6V9G9LE"
})(IncludeMap)
