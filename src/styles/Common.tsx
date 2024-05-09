import { theme } from "./Theme"

type FontPropsType = {
  weight?: number
  lineHeight?: number
  color?: string
  Fmin?: number
  Fmax?: number
}

export const font = ({weight, lineHeight, color, Fmin, Fmax}: FontPropsType) => `
  font-weight: ${weight || 700};
  line-height: ${lineHeight || 1.8};
  color: ${color || theme.colors.fontAccent};

  font-size: calc( (100vw - 360px) / (1440 - 360) * (${Fmax} - ${Fmin}) + ${Fmin}px);
`