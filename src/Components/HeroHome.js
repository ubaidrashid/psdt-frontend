import { useState, useEffect } from 'react';
import "./herohome.css";
import Carousel from 'react-bootstrap/Carousel';
import { carouselImages } from '../carouselData';

export function ControlledCarousel() {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={handleSelect} interval="1000">
            {carouselImages.map((cData) => {
                return (
                    <Carousel.Item>
                        <img
                            // className="d-block w-100"
                            src={isMobile ? cData.mobile : cData.desktop}
                            alt="Wedding Hall"
                        />
                        {/* <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption> */}
                    </Carousel.Item>)
            })}


        </Carousel>
    );
}