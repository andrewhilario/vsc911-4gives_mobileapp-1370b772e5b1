import React from 'react'
import Svg, { Path } from "react-native-svg"

const ChevronRightIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M.352 11.648a1.201 1.201 0 0 1 0-1.699l3.956-3.956L.352 2.036A1.202 1.202 0 0 1 2.05.337l4.806 4.806a1.202 1.202 0 0 1 0 1.7L2.05 11.647a1.201 1.201 0 0 1-1.7 0Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default ChevronRightIcon