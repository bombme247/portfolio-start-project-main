import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styles";

type SkillPropsType = {
  iconId: string
  title: string
  viewbox: string
  width?: string
  height?: string
}

export const Skill = (props: SkillPropsType) => {
  return (
    <S.Skill>
      <Icon iconId={props.iconId} viewbox={props.viewbox} width={props.width || "50"} height={props.height || "50"}/>
      <S.SkillTitle>{props.title}</S.SkillTitle>
    </S.Skill>
  )
}
