var cssAdded = false;

document.getElementById("button").addEventListener("click", function () {
	if (!cssAdded) {
		var link = document.createElement("link");
		link.rel = "stylesheet";
		link.href = "styles.css";
		document.head.appendChild(link);
		cssAdded = true;
	} else {
		var linkNode = document.querySelector("link[href*='styles.css']");
		linkNode.parentNode.removeChild(linkNode);

		cssAdded = false;
	}
});
