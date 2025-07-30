type Props = {
  text: string;
  className?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const Button = ({ text, className = '', onClick, onMouseEnter, onMouseLeave }: Props) => {
  return (
    <div
      className={`${className} cursor-pointer px-12 py-4 rounded-4xl body-text font-bold`}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {text}
    </div>
  );
};

export default Button;
