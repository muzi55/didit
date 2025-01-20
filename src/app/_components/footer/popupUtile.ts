interface PopupOptions {
	width: number;
	height: number;
	scrollbars: boolean;
	resizable: boolean;
}

function getPopupOptions(options: Partial<PopupOptions>) {
	const defaultOptions = {
		width: window.innerWidth,
		height: 600,
		scrollbars: true,
		resizable: true,
	};

	const finalOptions = {
		...defaultOptions,
		...options,
	};

	return `width=${finalOptions.width},height=${finalOptions.height},scrollbars=${finalOptions.scrollbars},resizable=${finalOptions.resizable}`;
}

type createFooterPopupContent = {
	title: string;
	content: string;
};

export function openPopup(
	popupContent: {
		title: string;
		content: string;
	},
	options: Partial<PopupOptions> = {},
	createContent: ({
		title,
		content,
	}: createFooterPopupContent) => string = createPopupContent,
) {
	const popupOptions = getPopupOptions(options);
	const popup = window.open("", "popup", popupOptions);

	if (popup) {
		popup.document.write(createContent(popupContent));
		popup.document.close();
	}
}

function createPopupContent({ title, content }: createFooterPopupContent) {
	return `
<!DOCTYPE html>
<html lang="ko">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
    </head>
    <body>
        <div id="popup-root">${content}</div>
    </body>
</html>`;
}
