import React from 'react'
import Svg, { Path } from "react-native-svg"

const CrossIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M.342.356a1.167 1.167 0 0 1 1.65 0L7 5.365 12.008.356a1.166 1.166 0 1 1 1.65 1.65L8.649 7.014l5.009 5.009a1.167 1.167 0 0 1-1.65 1.65L7 8.663 1.99 13.672a1.167 1.167 0 0 1-1.65-1.65l5.01-5.008L.34 2.006a1.167 1.167 0 0 1 0-1.65Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default CrossIcon