// libraries
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import emenu from '../../Images/emenu.gif'
import Wikidata from '../../Images/Wikidata.gif'
import FP from '../../Images/FP.gif'
import './MyCarousel.css'
const MyCarousel = (props) => {
    /*<PortfolioItem 
                title="Factual Physique" 
                description="A website I developed for an online fitness coach, Adam Carroll. Adam wanted to create a website in which customers could find out about his 
                service and apply to be enrolled in his coaching plan through an application form. Adam wanted the design to be simplistic and to the point.
                I developed it using ReactJS, NextJS and it is hosted on AWS"
                video={emenu}
                /> */
    return(
        
            <div  id="myCarousel">
               <Carousel>
  <Carousel.Item>
  <PortfolioItem 
                title="e-menu" 
                description={`e-menu is a contactless menu solution created by myself and a friend.\n
                e-menu stops Covid-19 spreading through menus by moving them to a webpage that is quickly & easily accessible without touching any surfaces.\n
                e-menu uses a QR code and also NFC tags to allow customers to view menus from their mobile device. 
                `}
                video={emenu}
                link="http://www.e-menu.ie"
                />
  </Carousel.Item>
  <Carousel.Item>
  <PortfolioItem 
                title="Factual Physique" 
                description={`A website I developed for an online fitness coach, Adam Carroll. \n
                Adam wanted to create a website in which customers could find out about his service and apply to be enrolled in his coaching plan through an application form. \n
                Adam wanted the design to be simplistic and to the point. I developed it using ReactJS, NextJS and it is hosted on AWS`}
                video={FP}
                link="http://factualphysique.com"
                />
  </Carousel.Item>
  <Carousel.Item>
  <PortfolioItem 
                title="Wikidata Live Changes" 
                description={`This website was made as part of a group project which we made for our clients in the Trinity ADAPT center. \n
                The purpose of this site was to flag malicious edits to the API.\n
                 This site analyses the Wikidata API and graphs changes to this API in quasi real-time. It populates graphs, generates a live feed and highlights suspicious edits.`}
                video={Wikidata}
                link="https://isobelm.github.io/Software-Engineering/#/"
                />
  </Carousel.Item>
</Carousel>

            </div>
    )
}

export default MyCarousel;