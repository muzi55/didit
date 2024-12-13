import { icons } from "@/shared/libs/common/icons";

import HeaderLogo from "./HeaderLogo";
import NavItem from "./NavItem";

export default function Header() {
	return (
		<header>
			<HeaderLogo isActive={true} />
			<br />
			<NavItem href="/home" icon={icons.home}>
				home
			</NavItem>
		</header>
	);
}
