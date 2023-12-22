import React from 'react'
import Svg, { Path } from "react-native-svg"

const ClipIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m16.09 8.5-7.134 7.135a4.66 4.66 0 1 1-6.591-6.59L9.499 1.91a3.107 3.107 0 1 1 4.394 4.394l-7.142 7.134a1.554 1.554 0 0 1-2.197-2.197l6.591-6.583"
        />
    </Svg>
}

export default ClipIcon