import React from 'react'
import Svg, { Path } from "react-native-svg"

const HamburgerMenuIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M0 1.333A1.333 1.333 0 0 1 1.333 0h16a1.333 1.333 0 1 1 0 2.667h-16A1.333 1.333 0 0 1 0 1.333ZM0 8a1.333 1.333 0 0 1 1.333-1.333h16a1.333 1.333 0 1 1 0 2.666h-16A1.333 1.333 0 0 1 0 8Zm0 6.667a1.333 1.333 0 0 1 1.333-1.334h16a1.333 1.333 0 1 1 0 2.667h-16A1.334 1.334 0 0 1 0 14.667Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default HamburgerMenuIcon