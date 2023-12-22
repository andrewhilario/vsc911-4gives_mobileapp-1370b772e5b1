import React from 'react'
import Svg, { Path } from "react-native-svg"

const FacebookIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        d="M6.4 3.2h2.4a.8.8 0 0 0 .8-.8V.8a.8.8 0 0 0-.8-.8H6.4a4 4 0 0 0-4 4v2.4H.8a.8.8 0 0 0-.8.8v1.6a.8.8 0 0 0 .8.8h1.6v5.6a.8.8 0 0 0 .8.8h1.6a.8.8 0 0 0 .8-.8V9.6h1.776a.8.8 0 0 0 .8-.608l.4-1.6a.8.8 0 0 0-.8-.992H5.6V4a.8.8 0 0 1 .8-.8Z"
        />
    </Svg>
}

export default FacebookIcon