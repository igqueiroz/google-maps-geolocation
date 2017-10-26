import React, {Component}  from 'react'
import ReactDOM from 'react-dom'
import IncludeMap from './IncludeMap'
import GetList from '../services/GetList'

class Gmap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            actualSite: "",
            myLocation: [],
            mySiteLocation: [],
            centerMap: [-23.6118693,-46.7428074],
            zoom: 2,
            reset: false,
            getCenter: [-23.6118693,-46.7428074]
        };
        this.updateMap = this.updateMap.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.myLocation = this.myLocation.bind(this);
        this.resetLocation = this.resetLocation.bind(this);
    }
    handleChange (event) {
        this.setState({actualSite: event.target.value});
        event.preventDefault();  
    }
    resetLocation(e) {
        document.querySelector('.reset').className = 'reset progress';
        this.setState({ 
            myLocation: [],
            reset: false,
        });
        document.querySelector('.reset').className = 'reset'
    }
    handleSubmit(event) {
        document.querySelector('.locate').className = 'locate progress';
        if(this.state.actualSite.startsWith("www.")) {
                GetList.getCoords(this.state.actualSite).then(({ data })=> {
                this.setState({
                    mySiteLocation: [data.latitude,data.longitude],
                    getCenter: [data.latitude,data.longitude],
                    zoom: 5
                });
             document.querySelector('.locate').className = 'locate';
            })
            .catch((err)=> {alert(err);document.querySelector('.locate').className = 'locate';})
        }
        else {
            alert('The site must start with "www."')
            document.querySelector('.locate').className = 'locate';
        }
        event.preventDefault();
    }
    updateMap() {
        document.querySelector('.mylocate').className = 'mylocate';
    }
    myLocation() {
        document.querySelector('.mylocate').className = 'mylocate progress';
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                this.setState({ 
                    myLocation: [position.coords.latitude,position.coords.longitude],
                    getCenter: [position.coords.latitude,position.coords.longitude],
                    zoom: 5
                });
                this.updateMap(this.state.myLocation)
            }.bind(this))
        }
        else { 
            alert("Geolocation is not supported by this browser.");
        } 
    }
    
    render() {
        return (
            <section className="destaques">
                <div className="container">
                    <div className="row">
                        <div className="logo"><img src="/assets/images/mysitelogo@400x-100.png" alt="Where in the World is My Site?" title="Where in the World is My Site?" /></div>
                        <form id="form-contato" onSubmit={this.handleSubmit}>
                            <ul>
                                <li><input name="site" id="site" type="text" className="input" placeholder="www." ref="site" autoComplete="off" value={this.state.actualSite} onChange={this.handleChange}  />
                                    <label htmlFor="txtFullname">Type the site you want to find:</label>
                                </li> 
                            </ul>

                            <button className="locate" type="Submit">Find my site now!</button>
                        </form>
                        <div className="col-xs-6 extras">
                            <button className="mylocate" onClick={this.myLocation}> Find Me </button>
                        </div>

                        <div className="col-xs-6 extras">
                            <button className="reset" onClick={this.resetLocation}> Reset My Location </button>
                        </div>
                        <div id="map">
                            <IncludeMap
                            updateMap={this.state.myLocation}
                            updateMyLocation={this.state.mySiteLocation}
                            siteName={this.state.actualSite}
                            centerMap={this.state.centerMap}
                            zoom={this.state.zoom}
                            reset={this.state.reset}
                            setCenter={this.state.getCenter}
                            />
                        </div>  
                                             
                    </div>
                </div>
            </section>  
        )
    }
}


export default Gmap;


//element.product.id,element.product.price.value,element.product.images[0],element.product.price.installments,element.product.price.installmentValue
//