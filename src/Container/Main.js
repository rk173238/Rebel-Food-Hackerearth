import React,{Component} from 'react'


import Particles from 'react-particles-js';
import './Main.css'
import BeerList from './BeerList/BeerList';
import { dataService, imageService } from '../Services/Index';
class MainContent extends Component{
    state={};
    componentDidMount=()=>{
        dataService.fetchBeerData().then(res=>{
            this.setState({data:res});
            console.log(res[0])
        })
        imageService.fetchImageData().then(res=>{
            this.setState({imageData:res});
            console.log(res)
        })
    }

    render(){

        return(
            <div>
                <Particles params={particlesConfig} className={"particlesContainer"}/>
                <div className={"content"}>
                    {this.state.data&&this.state.imageData?
                        <BeerList data={this.state.data} imageData={this.state.imageData}></BeerList>
                        :
                        <div>loading</div>
                    }
                </div>
            </div>
        )
    }
}
export default MainContent;
const particlesConfig = {
    "particles": {
      "number": {
        "value": 60,
        "density": {
          "enable": true,
          "value_area": 800
        }
      }},
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 10,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 80,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 300,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 2
      },
      "move": {
        "enable": true,
        "speed": 12,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        }
      },
    },
  }