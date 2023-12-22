import React from 'react'
import Svg, { Path } from "react-native-svg"

const ArrowRightIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M10.293.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L12.586 6H1a1 1 0 0 1 0-2h11.586l-2.293-2.293a1 1 0 0 1 0-1.414Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default ArrowRightIcon