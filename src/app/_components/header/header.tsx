import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";

export default function Header() {
	return (
		<header>
			<HeaderLogo isActive={true} />
			<HeaderNav />
		</header>
	);
}
