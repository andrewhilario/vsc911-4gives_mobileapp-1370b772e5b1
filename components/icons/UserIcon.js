import React from 'react'
import Svg, { Path } from "react-native-svg"

const UserIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M3.193 4.8a4.8 4.8 0 1 1 9.6 0 4.8 4.8 0 0 1-9.6 0ZM2.738 11.922c1.3-.545 3.034-.722 5.255-.722 2.217 0 3.948.176 5.247.719 1.394.581 2.25 1.57 2.706 3.008A.824.824 0 0 1 15.161 16H.82a.82.82 0 0 1-.782-1.068c.455-1.438 1.307-2.427 2.7-3.01Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default UserIcon