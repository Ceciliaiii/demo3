import SvgIcon from '../assets/SvgIcon/index.vue'

const svgRequired = require.context('./svg', false, /\.svg$/)
svgRequired.keys().forEach((item: string | number) => svgRequired[item])

export default (app: { component: (arg0: string, arg1: any) => void }) => {
    app.component(`svg-icon`, SvgIcon)
}