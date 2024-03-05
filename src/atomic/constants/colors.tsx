const primary = '#5CBEF5'
const secundary = '#0C1F2B'

const orange = '#F5A469'
const yellow = '#FDFAB8'
const blueLight = '#C5EAFF'
const blue = '#2C8EC6'
const green = '#69f575'
const greenLight = '#8DFFAD'
const red = '#e64949'

const white = '#FFF';
const whiteCian = '#F3F3F3'
const cian = '#D9D9D9';
const grey = '#7D7D7D'
const greyLight = '#f3f3f3'

const transparent = 'transparent'

export type ColorType = 'primary'
                    | 'secundary'
                    | 'orange'
                    | 'yellow'
                    | 'blueLight'
                    | 'blue'
                    | 'green'
                    | 'greenLight'
                    | 'red'
                    | 'white'
                    | 'whiteCian'
                    | 'cian'
                    | 'grey'
                    | 'greyLight'
                    | 'transparent'

const findColor = (color: ColorType) => {
    switch (color) {
        case 'primary':
            return primary;
        case 'secundary':
            return secundary;
        case 'blueLight':
            return blueLight
        case 'blue':
            return blue
        case 'green':
            return green
        case 'greenLight':
            return greenLight
        case 'red':
            return red;
        case 'yellow':
            return yellow;
        case 'white':
            return white;
        case 'whiteCian':
            return whiteCian;
        case 'cian':
            return cian;
        case 'grey':
            return grey;
        case 'greyLight':
            return greyLight
        case 'transparent':
            return transparent
    }
}

export {
    primary,
    secundary,
    orange,
    blueLight,
    yellow,
    blue,
    green,
    greenLight,
    red,
    white,
    whiteCian,
    cian,
    grey,
    greyLight,
    transparent,
    findColor
}