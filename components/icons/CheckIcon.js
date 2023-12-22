import React from 'react'
import Svg, { Path } from "react-native-svg"

const CheckIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M.35.366a1.199 1.199 0 0 1 1.696 0l3.947 3.947L9.939.366a1.199 1.199 0 1 1 1.695 1.695L6.84 6.855a1.199 1.199 0 0 1-1.695 0L.351 2.06a1.199 1.199 0 0 1 0-1.695Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default CheckIcon