import React from 'react'
import Svg, { Path } from "react-native-svg"

const SubtractIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M0 1c0-.552.336-1 .75-1h10.5c.414 0 .75.448.75 1s-.336 1-.75 1H.75C.336 2 0 1.552 0 1Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default SubtractIcon