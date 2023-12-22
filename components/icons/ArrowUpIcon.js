import React from 'react'
import Svg, { Path } from "react-native-svg"

const ArrowUpIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M.293 5.707a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L6 3.414V15a1 1 0 1 1-2 0V3.414L1.707 5.707a1 1 0 0 1-1.414 0Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default ArrowUpIcon