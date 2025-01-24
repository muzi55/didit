import React from "react";

import { CreateNewSpace } from "./CreateNewSpace";
import SpaceCardSection from "./SpaceCardSection";
import { cardSectionList, cardSectionList2 } from "./SpaceConstant";

export default function Space() {
	return (
		<div>
			<SpaceCardSection title="DIDIT" cardList={cardSectionList} />
			<SpaceCardSection title="DIDIT1" cardList={cardSectionList2} />
			<CreateNewSpace />
		</div>
	);
}
