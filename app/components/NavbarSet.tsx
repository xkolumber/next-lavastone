import Link from "next/link";
import useCounterStore from "../counter/store";
import Badge from "./Badge";
import NavbarCancelButton from "./NavbarCancelButton";
import NavbarHeart from "./NavbarHeart";
import NavbarLogo from "./NavbarLogo";

interface Props {
  onClick?: () => void;
}

const NavbarSet = ({ onClick }: Props) => {
  const { counter } = useCounterStore();
  return (
    <div className={`navbar_set`}>
      <Link href="/">
        <NavbarLogo />
      </Link>
      <div className="navbar_second_group">
        <div className="languages">
          <p className="font_weight600"> SK</p>
          <Link href="https://www.lavastone.cz">
            <p>CZ</p>
          </Link>
        </div>

        <Link href="/favourite" onClick={onClick}>
          <Badge text={counter}>
            <NavbarHeart />
          </Badge>
        </Link>

        <NavbarCancelButton onClick={onClick} />
      </div>
    </div>
  );
};
export default NavbarSet;
