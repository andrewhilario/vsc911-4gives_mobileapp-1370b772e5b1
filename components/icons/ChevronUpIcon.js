import React from 'react'
import Svg, { Path } from "react-native-svg"

const ChevronUpIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M11.648 6.857a1.202 1.202 0 0 1-1.699 0L5.993 2.9 2.036 6.857a1.202 1.202 0 0 1-1.699-1.7L5.143.353a1.202 1.202 0 0 1 1.7 0l4.805 4.806a1.201 1.201 0 0 1 0 1.699Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default ChevronUpIcon