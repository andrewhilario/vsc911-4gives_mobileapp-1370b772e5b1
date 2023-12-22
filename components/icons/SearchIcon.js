import React from 'react'
import Svg, { Path } from "react-native-svg"

const SearchIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={width}
        fill="none"
    >
        <Path
        fill={color}
        fillRule="evenodd"
        d="M6.004 2.002a4.003 4.003 0 1 0 0 8.006 4.003 4.003 0 0 0 0-8.006ZM0 6.005a6.004 6.004 0 1 1 10.898 3.479l4.82 4.82a1 1 0 0 1-1.415 1.415l-4.82-4.82A6.004 6.004 0 0 1 0 6.006Z"
        clipRule="evenodd"
        />
    </Svg>
}

export default SearchIcon