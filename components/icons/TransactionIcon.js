import React from 'react'
import Svg, { Path } from "react-native-svg"

const TransactionIcon = ({width, color}) => {
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height='100%'
        fill="none"
    >
        <Path
        fill={color}
        d="M9.833 0H3.779C.753 0 0 .809 0 4.036v9.015c0 2.13 1.169 2.635 2.586 1.113l.008-.008c.657-.696 1.658-.64 2.226.12l.809 1.081c.648.857 1.697.857 2.346 0l.809-1.08c.576-.77 1.577-.825 2.234-.12 1.425 1.52 2.586 1.016 2.586-1.114V4.036C13.612.809 12.859 0 9.833 0Zm-.825 7.006H4.604a.605.605 0 0 1-.6-.6c0-.329.272-.6.6-.6h4.404c.328 0 .6.271.6.6 0 .328-.272.6-.6.6Z"
        />
    </Svg>
}

export default TransactionIcon