import React, { useState } from 'react';
import Image from 'next/image'

import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
const sliderImage1 = "/images/image3.jpg";
const sliderImage2 = "/images/image4.jpg";
const sliderImage5 ="/images/image5.jpg";
const items = [
    {
        src: `${sliderImage1}`,
        altText: 'The Coding Ground',
        caption: 'TCG'
    },
    {
        src: `${sliderImage2}`,
        altText: 'Year End Feast',
        caption: 'Monte'
    },
    {
        src: `${sliderImage5}`,
        altText: 'Me',
        caption: 'Me :)'
    }
];

const Slider = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    }

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
        if (animating) return;
        setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
        return (
            <CarouselItem
                onExiting={() => setAnimating(true)}
                onExited={() => setAnimating(false)}
                key={item.src}
            >
                <Image
                    src={item.src}
                    alt={item.altText} width={600}
                    height={900} 
                    opacity={0.5}
                    />
                <CarouselCaption captionText={item.caption} captionHeader={item.altText} />
            </CarouselItem>
        );
    });

    return (
        <div style={{
            width: '30%',
            margin: 'auto',
            padding: '30px',
            height: '20vh'
        }}>
            <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    );
}

export default Slider;