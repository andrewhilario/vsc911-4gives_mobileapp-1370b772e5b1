import React from 'react'
import Svg, { Path } from "react-native-svg"

const InformationIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        fill="none"
    >
        <Path
        fill={color}
        d="M16 8A8 8 0 1 1-.001 8 8 8 0 0 1 16 8ZM5.322 1.66a6.905 6.905 0 1 0 5.352 12.73A6.905 6.905 0 0 0 5.322 1.66Zm2.682 1.35a1.148 1.148 0 1 1 .002 2.298 1.148 1.148 0 0 1 0-2.299l-.002.001Zm.8 9.32V7.072a.8.8 0 1 0-1.6 0v5.258a.8.8 0 0 0 1.6 0Z"
        />
    </Svg>
}

export default InformationIcon