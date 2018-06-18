
import nhl from '../img/nhl.jpg';
import booty from '../img/booty.jpg';
import dirt from '../img/dirt.jpg';

$(document).ready(initializeApp);

const slideData = [
    {
        image: nhl,
        title: "NHL 2013",
        description: "Best game of 2013"
    },

    {
        image: booty,
        title: "Age of Booty",
        description: "Second best game of 2013"
    },

    {
        image: dirt,
        title: "Dirt 3",
        description: "Third best game of 2013"
    }
]

function initializeApp (){
    let gameImageCarousel = new ImageCarousel(slideData);
    setInterval(function(){

    })
}

class ImageCarousel {
    constructor(slideData){
        this.slideData = slideData;
        this.createCarousel(slideData);
    }

    createCarousel(slideData) {
            for (let i=0; i<slideData.length; i++) {
            const {image, title, description} = slideData[i];
            $("#slider").append("<div class='slide'><img src="+image+"><div class='details'><h2>"+title+"</h2><p>"+description+"</p></div></div>")
            
        }
    }

    // startSlider(){
    //     interval = setInterval()
    // }

}