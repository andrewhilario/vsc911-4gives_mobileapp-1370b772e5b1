import React from 'react'
import Svg, { Path } from "react-native-svg"

const ArrowDownIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M9.72 10.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.415 0l-4-4a1 1 0 1 1 1.414-1.414l2.293 2.293V1a1 1 0 0 1 2 0v11.586l2.293-2.293a1 1 0 0 1 1.414 0Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default ArrowDownIcon