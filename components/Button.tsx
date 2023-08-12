interface ButtonType {
  children: React.ReactNode;
  title: string;
  styles: string;
  onClick?: React.ReactEventHandler;
}
const Button = ({
  children,
  title,
  styles,
  onClick = () => {},
}: ButtonType) => {
  return (
    <button
      onClick={onClick}
      className={`${styles} whitespace-nowrap md:px-8  md:py-3 py-1 px-3 flex items-center gap-x-3 transition duration-300  border-none rounded-sm shadow-md hover:shadow-md text-[14px]`}
    >
      {children}
      {title}
    </button>
  );
};
export default Button;
