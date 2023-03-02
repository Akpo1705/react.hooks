import React, { useRef } from "react";
import useHover from '../../hooks/hover.hook'

const HoverTest = () => {
        const ref = useRef();
        const isHovering = useHover(ref);
        return (
                <div ref={ref} style={{ width: 100, height: 100, background: isHovering ? 'green' : 'red' }}></div>
        );
};


export default HoverTest;
