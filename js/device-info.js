function getViewportSize() {
	const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
	const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
	return { width, height };
}

function getDeviceInfo() {
	const userAgent = navigator.userAgent.toLowerCase();
	let device = "Unknown Device";

	// 삼성 갤럭시탭
	if (/sm-(t|p|n)/.test(userAgent)) {
		const match = userAgent.match(/sm-(t|p|n)[^;\)]+/);
		device = match ? "Samsung Galaxy Tab (" + match[0].toUpperCase() + ")" : "Samsung Galaxy Tab";
	}
	// HP 노트북
	else if (/hp/.test(userAgent)) {
		device = "HP Laptop";
	}
	// 애플 기기 (iPhone, iPad, iPod)
	else if (/iphone|ipod|ipad/.test(userAgent)) {
		device = "Apple iOS Device";
	}
	// Android 기기
	else if (/android/.test(userAgent)) {
		device = "Android Device";
	}
	// Windows 데스크탑/노트북
	else if (/windows nt/.test(userAgent)) {
		device = "Windows Laptop/Desktop";
	} 
	// MacOS 데스크탑
	else if (/macintosh|mac os x/.test(userAgent)) {
		device = "Mac Desktop";
	}

	return device;
}

function updateViewportInfo() {
	const viewportSize = getViewportSize();
	const deviceInfo = getDeviceInfo();
	const infoDiv = document.getElementById("viewport-info");

	// 기기 명칭과 뷰포트 크기 함께 표시
	infoDiv.innerHTML = `
		Device: ${deviceInfo}<br>
		Viewport width: ${viewportSize.width}px<br>
		Viewport height: ${viewportSize.height}px
	`;
}

// 페이지 로드 시 초기 크기 및 기기 정보 표시
updateViewportInfo();

// 윈도우 리사이즈 시 뷰포트 크기 및 기기 정보 업데이트
window.addEventListener('resize', updateViewportInfo);