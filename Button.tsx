interface ButtonProps {
  texto: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

function Button({ texto, onClick, type = "button" }: ButtonProps) {
  return (
    <button className="button" type={type} onClick={onClick}>
      {texto}
    </button>
  );
}

export default Button;