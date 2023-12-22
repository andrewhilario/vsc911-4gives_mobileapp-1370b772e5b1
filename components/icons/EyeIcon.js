import React from 'react'
import Svg, { Path } from "react-native-svg"

const EyeIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path fill={color} d="M9.542 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        <Path
        fill={color}
        fillRule="evenodd"
        d="M0 7c1.274-4.057 5.064-7 9.542-7s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.274 11.057 0 7Zm13.542 0a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default EyeIcon