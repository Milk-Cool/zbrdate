const story = [
	{
		"type": "js",
		"code": `
			document.querySelector(".main").classList.remove("-bg-title");
			document.querySelector(".logo").classList.toggle("H");
			document.querySelector(".start").classList.toggle("H");
			document.querySelector(".load").classList.toggle("H");
			document.querySelector(".credits").classList.toggle("H");
		`
	},
	{
		"type": "delay",
		"time": 2000
	},
	{
		"type": "music",
		"file": "neutral"
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".main").classList.add("-bg-canteen");
			document.querySelector(".dialogue").classList.toggle("H");
		`
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Фух, как же я наелся!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Пойду ютубчик посмотрю..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Или в гартик поиграю..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Кто-то со мной столкнулся.)"
	},
	{
		"type": "sprite",
		"sprite": "calm"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Ой!"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Прости, не заметил."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Да ничего страшного!"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Ну вот и хорошо..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Какой сейчас урок?"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Английский. Мы же вроде в одной группе, может быть, пойдём вместе?"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Пойдём."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "А как тебя зовут? Ты же у нас новенький, а я только пару человек запомнил. Вроде с памятью у меня проблем раньше не было, но вас, новеньких, настолько много!.."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Да норм, пока мало кто вообще кого-то запомнил."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Так как зовут-то?"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Меня зовут..."
	},
	{
		"type": "js",
		"code": `
			if(step >= skipUntil) prompt("Меня зовут...")
		`
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "А, понятно. Меня Андрей зовут."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Да, я уже знаю. Приятно познакомиться!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Поднимаются по лестнице на второй этаж)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "До урока ещё десять минут."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Пойдём на фикусы?"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Давай. Мне пофиг."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Вы проходите в фикусную)"
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".main").classList.remove("-bg-canteen");
			document.querySelector(".main").classList.add("-bg-ficus");
		`
	},
	{
		"type": "music",
		"file": "date"
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".lovescale").classList.toggle("H");
		`
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Достаёт ноутбук)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(У него открыто аниме “Форма голоса”)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Ты анимешник?"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Ага, а ты?"
	},
	{
		"type": "prompt",
		"options": {
			"Да": 15,
			"Нет": -10
		}
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Открывает почту)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Dear friends..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "I’m not coming to school today..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "The lesson is getting canceled..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Черт, я за английский вообще не шарю. Переведёшь?"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "А ты спрашиваешь! Меня к вам из 5.1 перевели."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "“Дорогие друзья. Я сегодня не приду в школу. Уроки сегодня отменяются.”"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Знаешь, хотел спросить у тебя, как у одного из нашей группы. Как ты относишься к нашей учительнице?"
	},
	{
		"type": "prompt",
		"options": {
			"Нормально": 2,
			"Она такая тупая...": -5
		}
	},
	{
		"type": "sprite",
		"sprite": "yo"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Слушай, а ты красивая..."
	},
	{
		"type": "prompt",
		"options": {
			"Спасибо...": 5,
			"Спасибо, ты тоже милый!": 25
		}
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Палящий луч солнца пробивается через окно.)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Уже конец сентября, а на улице тепло, как летом.)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Может, стоило бы погулять...)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Слышь, а пойдём на улицу? Сегодня погода ну просто прекрасная."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "И никого нет. У всех уроки скоро."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Я тоже об этом подумал."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Ментальная связь?"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Ха-ха..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Впрочем, пойдём."
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".main").classList.remove("-bg-ficus");
			document.querySelector(".main").classList.add("-bg-second_floor");
		`
	},
	{
		"type": "js",
		"code": `
			if(document.querySelector(".lovescale").value < 70)
				gotoAnchor("skipTeacher");
		`
	},
	{
		"type": "sprite",
		"sprite": "blush"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Вы почувствовали что-то тёплое на своём плече...)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Это же рука Андрея!)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Вы его тоже обнимаете.)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Кажется, счастливее вы быть и не можете.)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Вы думаете только об Андрее.)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Вдруг!)"
	},
	{
		"type": "sprite",
		"sprite": "teacher"
	},
	{
		"type": "dialogue",
		"author": "teacher",
		"text": "Это что ещё такое!?"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Попали.)"
	},
	{
		"type": "dialogue",
		"author": "teacher",
		"text": "В таком-то возрасте! Какие отношения!? Обнимашечки!"
	},
	{
		"type": "dialogue",
		"author": "teacher",
		"text": "Показывайте бейджики."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Бежим!!!"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Решение принялось само собой.)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Мы побежали.)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Училка, как ни странно, даже не пыталась нас догнать.)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Хоть бежать было и совсем немного, прибежав, я уже себя не чувствовал.)"
	},
	{
		"type": "anchor",
		"anchor": "skipTeacher"
	},
	{
		"type": "sprite",
		"sprite": "calm"
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".main").classList.remove("-bg-second_floor");
			document.querySelector(".main").classList.add("-bg-exit");
		`
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Мы оказались у выхода из школы.)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Слегка толкнув дверь, я пропустил Андрея и сам вышел из школы.)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Куда пойдём?"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Давай в сторону стадиона. делаем пару кругов. Всё равно сейчас ни у кого физры нет."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Мы направились в сторону стадиона.)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "..."
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".main").classList.remove("-bg-exit");
			document.querySelector(".main").classList.add("-bg-stadium");
		`
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Смотри, там девчонки в волейбол играют."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Любишь волейбол?"
	},
	{
		"type": "prompt",
		"options": {
			"Да": 20,
			"Нет": -15
		}
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Может, с ними поиграем?"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Да нет. Давай так."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Иногда из Летово хочется просто взять и сбежать."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Просто настолько выгораешь, что это становится твоим единственным желанием. И ты уже не можешь работать нормально."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Не можешь делать уроки."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Не хочется проводить время с друзьями."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Нет аппетита."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "И, что самое плохое – нет сил сходить к психологу."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Или времени."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "И ты просто ходишь по школе, как зомби."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "И хочется убежать."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Или вскрыться."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Не хочется так жить."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Будто ты заперт в Летово, как в какой-то зомбирующей ловушке."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Будто из такого положения выхода уже нет. Будто вокруг стены, и их никак не покинуть, и что ты до конца жизни ты проходишь в таком состоянии."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "У тебя бывало такое..?"
	},
	{
		"type": "prompt",
		"options": {
			"Да": 0,
			"Нет": 0
		}
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "У меня такое буквально вчера было."
	},
	{
		"type": "js",
		"code": `
			if(document.querySelector(".lovescale").value < 70)
				gotoAnchor("skipConfession");
		`
	},
	{
		"type": "sprite",
		"sprite": "blush"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Но сегодня... Я встретил тебя."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "И, кажется, я в такое состояние больше не попаду."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Спасибо."
	},
	{
		"type": "anchor",
		"anchor": "skipConfession"
	},
	{
		"type": "sprite",
		"sprite": "calm"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(Вы присели на траву.)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Подсели на травку)))"
	},
	{
		"type": "prompt",
		"options": {
			"Заценить шутку": 15,
			"Сказать, что это тупая шутка": -10
		}
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".lovescale").classList.toggle("H");
			if(document.querySelector(".lovescale").value == 100)
				gotoAnchor("endingGood");
			else if(document.querySelector(".lovescale").value == 0)
				gotoAnchor("endingBad");
			else
				gotoAnchor("endingNeutral");
		`
	},
	{
		"type": "anchor",
		"anchor": "endingNeutral"
	},
	{
		"type": "music",
		"file": "neutral"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Пойдём в школу, уже урок скоро."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Идём."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Слушай..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "А давай дружить?"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Тупо, конечно, просто так говорить “Давай дружить”, но..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Ты мне очень понравилась, как друг."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "И я бы хотел с тобой дружить."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Он мне нравится...)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Может, так я смогу с ним завязать отношения?)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Давай!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Я бы тоже хотела стать твоим другом."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Очень!"
	},
	{
		"type": "music",
		"file": "end"
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".main").classList.remove("-bg-stadium");
			document.querySelector(".sprite").src = "";
			(new Audio("sfx/clock.mp3")).play();
		`
	},
	{
		"type": "dialogue",
		"author": "alarm",
		"text": "ي البداية خلق الله السماوات والأرض. وكانت الأرض بلا شكل وخالية ، والظلام يغطي المياه العميقة ، وروح الله يرفرف على سطح المياه. وقال الله: «ليكن نور.» فصار نور."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Как всегда. Будильник."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Да и сон был странноватый..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Будто в каком-то наркоманском симуляторе свиданий."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "js",
		"code": `gotoAnchor("restart")`
	},
	{
		"type": "anchor",
		"anchor": "endingBad"
	},{
		"type": "music",
		"file": "bad"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Слушай..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Я отойду, ты посидишь пока что здесь?!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Ну... Как скажешь."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Андрей уходит.)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Проходит час.)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Второй. Уроки уже давно закончились.)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Он что, просто меня тут бросил?)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "music",
		"file": "end"
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".main").classList.remove("-bg-stadium");
			document.querySelector(".sprite").src = "";
			(new Audio("sfx/clock.mp3")).play();
		`
	},
	{
		"type": "dialogue",
		"author": "alarm",
		"text": "ي البداية خلق الله السماوات والأرض. وكانت الأرض بلا شكل وخالية ، والظلام يغطي المياه العميقة ، وروح الله يرفرف على سطح المياه. وقال الله: «ليكن نور.» فصار نور."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Слава богу, это был сон."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Не хотелось бы такое пережить в реальности."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Я его любил..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "А он..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Ладно, забуду это всё."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Странный был сон. Будто какой-то тупой симулятор свиданий."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "js",
		"code": `gotoAnchor("restart")`
	},
	{
		"type": "anchor",
		"anchor": "endingGood"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Слушай..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "(На Андрее видно капельки пота, появляющиеся прямо на глазах.)"
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Всё произошло так неожиданно..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Я... Ты..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "andrey",
		"text": "Ты мне нравишься!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Андрей уже такой красный, что его лицо разглядеть невозможно.)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Но я не лучше...)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "(Впрочем, должно ли это меня волновать? Надо действовать!)"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Ты мне тоже!!!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Андрей!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Ты мне тоже нравишься!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Ты милый! Ты умный!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Ты мне всегда нравился! А теперь нравишься ещё больше!"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "music",
		"file": "end"
	},
	{
		"type": "js",
		"code": `
			document.querySelector(".main").classList.remove("-bg-stadium");
			document.querySelector(".sprite").src = "";

			(new Audio("sfx/clock.mp3")).play();
		`
	},
	{
		"type": "dialogue",
		"author": "alarm",
		"text": "ي البداية خلق الله السماوات والأرض. وكانت الأرض بلا شكل وخالية ، والظلام يغطي المياه العميقة ، وروح الله يرفرف على سطح المياه. وقال الله: «ليكن نور.» فصار نور."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Ну как всегда."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Как в каком-то тупом симуляторе свиданий."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Это был сон."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Хотя..."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Хороший сон"
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "Боже, замечательный сон."
	},
	{
		"type": "dialogue",
		"author": "me",
		"text": "..."
	},
	{
		"type": "anchor",
		"anchor": "restart"
	},
	{
		"type": "js",
		"code": "location.reload()"
	}
]
