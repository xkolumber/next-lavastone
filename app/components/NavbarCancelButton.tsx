interface Props {
  onClick?: () => void;
}

const NavbarCancelButton = ({ onClick }: Props) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      className="NavbarCancelButton"
    >
      <path d="M1 1L29.2843 29.2843" stroke="#171717" strokeWidth="2" />
      <path d="M29.2852 1L1.00088 29.2843" stroke="#171717" strokeWidth="2" />
    </svg>
  );
};

export default NavbarCancelButton;
