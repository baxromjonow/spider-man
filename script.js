// const overlay = document.querySelector('.web-overlay')

// let firstTimer = null; // birinchi timer to'r chiqishi uchun
// let intervalTimer = null; // har qanchadir vaqtda to'r ko'payishi uchun
// let allTime = 5000; //standart vaqt 

// //img ni qo'shish uchun func()

// function createWeb() {
// 	const img = document.createElement('img'); //img ni classini qo'shvoldik ya'ni img element yaratdik
// 		img.src = './spiderweb.svg' //o'sha element ga shu svg ni qo'shdik
// 		img.classList.add('dynamic-web') // gpt yasabergan style ni berdik 
// 	// endi ekranni hohlagan joyida chiqishi uchun innerWidth bilan innerHeight ni random qivoramiz

// const randomX = Math.random() * window.innerWidth,
// randomY = Math.random() * window.innerHeight;

// // endi shu chiqadigan random px lar ni joylashtirib chiqamiz style ga

// // img.style orqali ulanvolamiz

// img.style.left = randomX + 'px'
// img.style.top = randomY + 'px'

// // endi shu hammasini asosiy content ni ichiga append qilib qo'shvolamiz

// overlay.appendChild(img)
// }

// // bularni hammasi yaratilganda bo'lishi kere ekan

// //  firstTimer ni ishlatish uchun func() yozamiz

// function startFirstTimer() {
// 	// createWeb() ni bittada 4 ta chiqairishimiz kere shunchun
// 	createWeb();
// 	createWeb();
// 	createWeb();
// 	createWeb();
// 	// bittada nechta chiqarmoqchi bo'sek shuncha marta yozamiz hohlen 10 ta hohlen 20 ta

// 	// intervalTimer ni ishlatish uchun func() yozamiz
// 	// davayte strelkali qilib yozamiz 
	
// 	intervalTimer = setInterval(() => {
// 		// buyoq ga har necha sekundda createWeb chiqishini yozamiz shunchun:
// 		createWeb(); // qilib chaqirib qo'yamiz va necha sec da chiqishini yozamiz
// 	}, 1000);
	
// 	// shunda har ikki sec da to'rttadan ko'payib beradi
// }
//  // bu ham


// // endi sichqoncha qimirlaganda hamma qo'shilgan to'r larni tozalash uchun func() yozamiz 

// function clearWeb() {
// 	overlay.innerHTML = ''
// 	// interval ni ham tozalaymiz
// 	clearInterval(intervalTimer)

// }

// // hammasini reset qiladigan ya'ni clearWeb() tozalagandan keyin necha sec da yana qayta boshlanishini nazorat qiladigan func()

// function resetTimer() {
// 	clearTimeout(firstTimer)
// 	clearWeb();

// 	yangiTimer = setTimeout(() => {
// 		startFirstTimer()
// 	}, allTime);
// 	// sichqoncha to'xtagandan keyin yangi timer yasaydi
// }


// // setTimeout() ochib unga bizdagi default sekund ni berdik agar allTime o'zgarsa boshlanish sekundi ham avtomatik o'zgaradi

// // endi sichqonchani harakatini kuzatish qoldi holos bunin uchun mousemove event qo'shamiz

// document.addEventListener('mousemove', resetTimer)

// // har sichqoncha qimirlaganda resetTimer() func() ishlab ketadi va enid yozgan kodlarimiz ishlashi uchun resetTimer() ni chaqirib qo'yamiz tamom

// resetTimer()



// // okamla bilan gaplashdim ozgina xato bor ekan strukturada ho'sh 





const overlay = document.querySelector('.web-overlay')

let firstTimer = null
let intervalTimer = null
let allTime = 1000

function createWeb() {
	const img = document.createElement('img')
	img.src = './spiderweb.svg'
	img.classList.add('dynamic-web')

	const randomX = Math.random() * window.innerWidth
	const randomY = Math.random() * window.innerHeight

	img.style.left = randomX + 'px'
	img.style.top = randomY + 'px'

	overlay.appendChild(img)
}

function startFirstTimer() {
	createWeb()
	createWeb()
	createWeb()
	createWeb()

	intervalTimer = setInterval(() => {
		createWeb()
	}, 1000)
}

function clearWeb() {
	overlay.innerHTML = ''
	clearInterval(intervalTimer)
}

function resetTimer() {
	clearTimeout(firstTimer)
	clearWeb()

	firstTimer = setTimeout(() => {
		startFirstTimer()
	}, allTime)
}

document.addEventListener('mousemove', resetTimer)

resetTimer()
