type Props = {
  text: string
}
export const Task = (props: Props) => {
  return <li>{props.text}</li>
}
