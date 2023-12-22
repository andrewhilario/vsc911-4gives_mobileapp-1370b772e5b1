import React from 'react'
import Svg, { Path } from "react-native-svg"

const ShareIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        fill="none"
        {...props}
    >
        <Path
        fill={color}
        d="M13 6a3 3 0 1 0-2.978-2.63l-4.94 2.47a3 3 0 1 0 0 4.319l4.94 2.47a3 3 0 1 0 .895-1.789l-4.94-2.47c.03-.246.03-.494 0-.74l4.94-2.47C11.455 5.68 12.19 6 13 6Z"
        />
    </Svg>
}

export default ShareIcon