import React, { useEffect, useState } from 'react';
import Snowflake from './Snowflake';

const generateUniqueId = () => `${new Date().getTime()}-${Math.random()}`;

const Snowfall = ({sizeRange = [10, 30], speed = 5, intensity = 100000000 }) => {
    const [snowflakes, setSnowflakes] = useState([]);

    useEffect(() => {
      const randomSize = () => {
        const minSize = sizeRange[0];
        const maxSize = sizeRange[1];
        return Math.random() * (maxSize - minSize) + minSize + 'px';
      };

        const intervalTime = Math.max(10, 1000 / intensity);
        const interval = setInterval(() => {
            setSnowflakes(currentFlakes => [
                ...currentFlakes,
                {
                    id: generateUniqueId(),
                    size: randomSize(),
                    left: Math.random() * window.innerWidth,
                    top: Math.random() * window.innerHeight * 0.5 - 30,
                    speed: speed,
                },
            ]);
        }, intervalTime);

        return () => clearInterval(interval);
    }, [snowflakes.length, sizeRange, speed, intensity]);

    return (
        <div>
            {snowflakes.map(snowflake => (
                <Snowflake
                    key={snowflake.id}
                    size={snowflake.size}
                    left={snowflake.left}
                    top={snowflake.top}
                />
            ))}
        </div>
    );
};

export default Snowfall;
