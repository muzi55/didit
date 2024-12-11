import Image from "next/image";
import React from "react";

function HeaderLogo() {
	return (
		<h1>
			<Image
				src="/static/images/logo_check_1.svg"
				alt="Didit logo"
				width={47}
				height={36}
			/>
		</h1>
	);
}

export default HeaderLogo;
