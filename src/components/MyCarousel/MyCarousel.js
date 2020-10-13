// libraries
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import PortfolioItem from '../PortfolioItem/PortfolioItem'
import emenu from '../../Images/emenu.gif'
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
                title="Factual Physique" 
                description="A website I developed for an online fitness coach, Adam Carroll. Adam wanted to create a website in which customers could find out about his 
                service and apply to be enrolled in his coaching plan through an application form. Adam wanted the design to be simplistic and to the point.
                I developed it using ReactJS, NextJS and it is hosted on AWS"
                video={emenu}
                />
  </Carousel.Item>
  <Carousel.Item>
  <PortfolioItem 
                title="Factual Physique" 
                description="A website I developed for an online fitness coach, Adam Carroll. Adam wanted to create a website in which customers could find out about his 
                service and apply to be enrolled in his coaching plan through an application form. Adam wanted the design to be simplistic and to the point.
                I developed it using ReactJS, NextJS and it is hosted on AWS"
                video={emenu}
                />
  </Carousel.Item>
  <Carousel.Item>
  <PortfolioItem 
                title="Factual Physique" 
                description="A website I developed for an online fitness coach, Adam Carroll. Adam wanted to create a website in which customers could find out about his 
                service and apply to be enrolled in his coaching plan through an application form. Adam wanted the design to be simplistic and to the point.
                I developed it using ReactJS, NextJS and it is hosted on AWS"
                video={emenu}
                />
  </Carousel.Item>
</Carousel>

            </div>
    )
}

export default MyCarousel;