
type Props = {
  text: string,
  className?: string,
}

const Button = ({text, className}: Props) => {
  return (
    <div className={`${className} cursor-pointer px-12 py-4 rounded-4xl body-text font-bold`}>{text}</div>
  )
}

export default Button