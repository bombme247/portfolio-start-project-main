import React from "react";
import iconsSprite from "../../assets/images/icons-sprite.svg"

type IconPropsType = {
  iconId: string
  width?: string
  height?: string
  fill?: string
  viewbox?: string
}

export const Icon = (props: IconPropsType) => {
  return (
    <svg width={props.width || "50"} height={props.height || "50"} viewBox={props.viewbox || "0 0 16 16"} fill={props.fill || "none"} xmlns="http://www.w3.org/2000/svg">
      <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
    </svg>
  )
}
