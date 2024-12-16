import HeaderLogo from "./HeaderLogo";
import HeaderNav from "./HeaderNav";
import HeaderProfile from "./profile/HeaderProfile";

export default function Header() {
	return (
		<header>
			<HeaderLogo isActive={true} />
			<HeaderNav />
			<HeaderProfile />
		</header>
	);
}
