
const colorBase = {
    YELLOW: '#FFCC00',
    WHITE: '#FFFFFF',
    BLACK: '#000000',
    BLUE: '#00A0E1',
    RED: '#FF2727',
    RED2: '#F70000',
    LIGHT_GRAY: '#F2F2F2',
    LIGHT_GRAY2: '#F9F9F9',
    GRAY: '#C8C8C8',
    GRAY2: '#EBEBEB',
    DARK_GRAY: '#626262',
    GREEN: '#70E000',
    DATSCHAYELLOW: '#FECD08',
}

const transparentWhite = opacity => `rgba(255, 255, 255, ${opacity})`
const transparentBlack = opacity => `rgba(0, 0, 0, ${opacity})`

export default {
    ...colorBase,
    BACKGROUND: colorBase.WHITE,
    LOGIN_INPUT: '#1F1F1F',
    SEARCH_INPUT_BORDER: '#DDDDDD',
    POLYGON_FILL: 'rgba(255, 204, 0, 0.7)',
    POLYGON_LIST_FILL: 'rgba(200, 200, 0, 0.7)',
    MARKER_FILL: 'rgb(255, 204, 0)',
    PLACEHOLDER_BLACK: transparentBlack(0.5),
    transparentWhite,
    transparentBlack,
}
