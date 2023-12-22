import React from 'react'
import Svg, { Path } from "react-native-svg"

const ChevronLeftIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M6.857.352a1.202 1.202 0 0 1 0 1.699L2.9 6.007l3.957 3.957a1.202 1.202 0 0 1-1.7 1.699L.353 6.857a1.202 1.202 0 0 1 0-1.7L5.158.353a1.202 1.202 0 0 1 1.699 0Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default ChevronLeftIcon