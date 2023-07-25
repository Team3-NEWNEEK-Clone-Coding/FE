import React, { useState, useEffect } from 'react';
import { ProgressBarStyle } from './ProgressBarStyle';

const ProgressBar = ({ title }) => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    useEffect(() => {
        const scrollListener = () => {
            const element = document.documentElement;
            const totalHeight = element.scrollHeight - element.clientHeight;
            const scrollPosition = window.scrollY;
            const percentageScrolled = (scrollPosition / totalHeight) * 100;

            setScrollPercentage(percentageScrolled);

            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }
        };

        window.addEventListener('scroll', scrollListener);

        return () => window.removeEventListener('scroll', scrollListener);
    }, []);

    return (
        isScrolling && (
            <ProgressBarStyle>
                <div className="post-head-progress" role="progressbar" aria-valuenow={scrollPercentage} style={{ width: `${scrollPercentage}%` }}></div>
                <span className='progress-title'>{title}</span>
            </ProgressBarStyle>
        )
    )
}

export default ProgressBar;