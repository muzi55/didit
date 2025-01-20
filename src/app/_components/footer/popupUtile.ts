export function openPopup(url: string) {
	const width = window.innerWidth; // 현재 브라우저의 너비를 가져옴
	const height = 600; // 고정된 높이 값

	const popup = window.open(
		url,
		"popup",
		`width=${width},height=${height},scrollbars=yes,resizable=yes`,
	);

	if (popup) {
		popup.document.write(`
            <!DOCTYPE html>
            <html lang="ko">
                <head>
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Popup</title>
                </head>
                <body>
                    <div id="popup-root">테스트 테스트</div>
                    <script src="/path/to/your/react/bundle.js"></script>
                </body>
            </html>
        `);
		popup.document.close();
	}
}
