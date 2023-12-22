import React from 'react'
import Svg, { Path } from "react-native-svg"

const ArrowLeftIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M5.707 9.695a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 1.414L3.414 3.988H15a1 1 0 1 1 0 2H3.414L5.707 8.28a1 1 0 0 1 0 1.414Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default ArrowLeftIcon