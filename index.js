window.onload = function() {
	let elMusic = document.getElementById("music");

	

	//getText("keys.json", 0);

	async function getText(file, keyNum) {
		const response = await fetch(file);
	    const json = await response.json();
		console.log(json.keys[keyNum].chords);
		music.innerHTML = "Key: " + json.keys[keyNum].key + "</br>" 
		 +"Notes: " + json.keys[keyNum].notes  + "</br>"
		 + "Chords: " + json.keys[keyNum].chords;
	}

	let elC = document.getElementById("c");
	elC.addEventListener("click", function(){
		getText("keys.json", 0);
	});

	let elCs = document.getElementById("cs");
	elCs.addEventListener("click", function(){
		getText("keys.json", 1);
	});

	let elDb = document.getElementById("db");
	elDb.addEventListener("click", function(){
		getText("keys.json", 2);
	});

	let elD = document.getElementById("d");
	elD.addEventListener("click", function(){
		getText("keys.json", 3);
	});

	let elEb = document.getElementById("eb");
	elEb.addEventListener("click", function(){
		getText("keys.json", 4);
	});

	let elE = document.getElementById("e");
	elE.addEventListener("click", function(){
		getText("keys.json", 5);
	});

	let elF = document.getElementById("f");
	elF.addEventListener("click", function(){
		getText("keys.json", 6);
	});

	let elFs = document.getElementById("fs");
	elFs.addEventListener("click", function(){
		getText("keys.json", 7);
	});

	let elGb = document.getElementById("gb");
	elGb.addEventListener("click", function(){
		getText("keys.json", 8);
	});

	let elG = document.getElementById("g");
	elG.addEventListener("click", function(){
		getText("keys.json", 9);
	});

	let elAb = document.getElementById("ab");
	elAb.addEventListener("click", function(){
		getText("keys.json", 10);
	});

	let elA = document.getElementById("a");
	elA.addEventListener("click", function(){
		getText("keys.json", 11);
	});

	let elBb = document.getElementById("bb");
	elBb.addEventListener("click", function(){
		getText("keys.json", 12);
	});

	let elB = document.getElementById("b");
	elB.addEventListener("click", function(){
		getText("keys.json", 13);
	});
}