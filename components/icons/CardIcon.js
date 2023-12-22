import React from 'react'
import Svg, { Path } from "react-native-svg"

const CardIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        d="m19.97 5.972.001 5.279a2.75 2.75 0 0 1-2.581 2.744l-.168.005H2.75a2.75 2.75 0 0 1-2.744-2.582L0 11.252 0 5.971h19.97Zm-3.733 3.504h-2.5l-.101.007a.75.75 0 0 0 0 1.486l.102.006h2.499l.101-.006a.75.75 0 0 0 0-1.486l-.101-.007ZM17.222 0a2.75 2.75 0 0 1 2.744 2.582l.005.167v1.723H0V2.75A2.75 2.75 0 0 1 2.583.005L2.75 0h14.472Z"
        />
    </Svg>
}

export default CardIcon