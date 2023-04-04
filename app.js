// Glow effect

const blob = document.getElementById("blob");

window.onpointermove = (event) => {
	const { clientX, clientY } = event;

	blob.animate(
		{
			left: `${clientX}px`,
			top: `${clientY}px`,
		},
		{ duration: 3000, fill: "forwards" }
	);
};

// Text effect

let letters = "ABCDEFGHIJKLMNOPRSTUVWXYZ",
	namet = "ciiro".padStart(9, " ").padEnd(13, " "),
	interval = null,
	fin = false;

document.querySelector("h1").onmouseover = (e) => {
	if (fin) return;

	let iteration = 0;

	clearInterval(interval);

	interval = setInterval(() => {
		e.target.innerText = e.target.innerText
			.split("")
			.map((l, i) => {
				if (i < iteration) {
					return namet[i];
				}

				return letters[Math.floor(Math.random() * 25)];
			})
			.join("");

		if (e.target.innerText == namet) {
			e.target.innerText = namet.replaceAll(" ", "");
			clearInterval(interval);
		}

		iteration += 1 / 3;
	}, 30);

	fin = true;
};

// THM

document.getElementsByClassName("thm_link")[0].setAttribute("target", "_blank");

document.getElementById("thm_badge").onclick = (e) => {
	if (!Array.from(e.target.classList).includes("thm_link"))
		window.open("https://tryhackme.com/p/ciiro", "_blank");
};
