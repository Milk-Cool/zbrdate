const authors = {
	"me": "Я",
	"andrey": "Андрей",
	"teacher": "Какая-то училка",
	"alarm": "Будильник"
}

let lastStep = -1;

const defaultLoveScale = 30;
document.querySelector(".lovescale").value = defaultLoveScale;

const saveNumber = 1429489;
const encodeSave = (pos, lovescale) => {
	pos = saveNumber - pos;
	pos = pos.toString() + "," + lovescale;
	pos = btoa(btoa(pos));
	return pos;
}
const decodeSave = saveCode => {
	saveCode = atob(atob(saveCode)).split(",");
	saveCode[0] = Number(saveCode[0]);
	saveCode[0] = saveNumber - saveCode[0];
	saveCode[1] = Number(saveCode[1])
	return saveCode;
}

const loadGame = (saveCode = "&") => {
	document.querySelector(".save").style.display = "block";
	
	saveCode == "&"
	? saveCode = [-1, defaultLoveScale]
	: saveCode = decodeSave(saveCode);
	document.querySelector(".lovescale").value = saveCode[1];
	console.log(document.querySelector(".lovescale").value)
	doStep(0, saveCode[0]);
}

const saveGame = () => {
	return lastStep == -1
	? "Невозсожно сохранить игру!"
	: encodeSave(lastStep, document.querySelector(".lovescale").value);
}

const exitGame = () => null;

const delay = time => new Promise(resolve => setTimeout(resolve, time));
const waitForClick = () => new Promise(resolve => document.querySelector(".dialogue").onclick = resolve);
const doStep = async (step, skipUntil = -1) => {
	const gotoAnchor = anchor => {
		for(let i in story)
			if(story[i].type == "anchor" && story[i].anchor == anchor)
				step = i;
	}

	if(step == story.length)
		return exitGame();

	console.info("Step", step);
	lastStep = step;
	const todo = story[step];
	console.dir(todo);
	switch(todo.type){
		case "delay":
			if(step >= skipUntil)
				await delay(todo.time);
			break;
		case "js":
			eval(todo.code);
			break;
		case "dialogue":
			if(step >= skipUntil) {
				document.querySelector("#author").innerText = authors[todo.author];
				document.querySelector("#dialogue-text").innerHTML = "";
				document.querySelector("#arrow").style.display = "none";
				for(let i of todo.text) {
					document.querySelector("#dialogue-text").innerHTML += i;
					await delay(20);
				}
				document.querySelector("#arrow").style.display = "block";
				await waitForClick();
			}
			break;
		case "sprite":
			document.querySelector(".sprite").src = `sprites/${todo.sprite}.png`;
			break;
		case "music":
			document.querySelector("#bg-music").src = `music/${todo.file}.mp3`;
			document.querySelector("#bg-music").oncanplay = x => x.target.play();
			break;
		case "prompt":
			if(step >= skipUntil) {
				let options = [];
				let text = "Выбери один из вариантов:\n";
				let i = 1;
				for(let option in todo.options) {
					text += `[${i}] ${option}\n`;
					options.push(i.toString());
					i++;
				}
				let selected = -1;
				while(!options.includes(selected)) selected = prompt(text);
				let value = todo.options[Object.keys(todo.options)[parseInt(selected) - 1]];
				typeof(value) == "string"
				? eval(value)
				: document.querySelector(".lovescale").value += value;
				if(document.querySelector(".lovescale").value < 0) document.querySelector(".lovescale").value = 0;
				if(document.querySelector(".lovescale").value > 100) document.querySelector(".lovescale").value = 100;
			}
			break;
	}
	await doStep(++step, skipUntil);
}
