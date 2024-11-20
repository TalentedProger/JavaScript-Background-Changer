// const button = document.getElementById("btn");
// button.addEventListener('click', () => {console.log("CLICK")})

const sad = document.getElementById('sad');
const quite = document.getElementById('quite');
const cheerful = document.getElementById('cheerful');
const angry = document.getElementById('angry');
const btn_finish = document.getElementById('btn_fnsh');
const changerColor = document.getElementById('ChangerColorBtn');
const example = document.getElementById('example');
const muz = document.getElementById('music_on_btn_esp')


const sad_colors = ['#1A153F','#531A50','#606E8C','#240935','#181513','#4E5452','#4B0082','#536872','#6C6960','#1E213D','#25221B','#9DB1CC','#252850','#1D334A','#121910','#102C54','#32127A','#9C9C9C','#003366','#191970','#20155E','#1D1E33','#082567','#151719','#474B4E','#002137','#310062','#1A162A','#1E1E1E','#18171C','#1D1018']
const quite_colors = ['#A8E4A0','#FAE7B5','#FAE7B5','#C1876B','#79553D','#BDECB6','#FFDEAD','#1E5945','#DDADAF','#ECEBBD','#BC987E','#47A76A','#9ACEEB','#87CEEB','#00693E','#98FF98','#1CAC78','#006633','#009A63','#FCD975','#FCB4D5','#6DAE81','#20603D','#C6DF90','#98C793','#A0D6B4','#A6BDD7','#FFEBCD','#3D642D','#DEAA88']
const angry_colors = ['#F80000','#E32636','#AF2B1E','#642424','#781F19','#FF0033','#8B0000','#900020','#9B2D30','#B00000','#B03F35','#FF2400','#A91D11','#7B001C','#321414','#960018','#D53032','#592321','#FF0000','#FF2800','#DC143C','#FF4F00','#7F180D','#65000B','#E63244','#A52019','#FC2847','#CB2821','#321011','#D53E07','#A12312','#CC0605','#F54021',]
const cheerful_colors = ['#FFCF48','#00541F','#EF3038','#42AAFF','#80DAEB','#F34723','#EFD334','#B2EC5D','#F4A900','#9ACD32','#7CFC00','#FBEC5D','#AAF0D1','#FF8243','#FF4F00','#009900','#DC9D00','#478430','#FD7B7C','#D2691E','#7DF9FF','#FFA089','#34C924','#08E8DE','#FFCF48','#FCE389','#FF7E93','#F0E68C','#E5BE01','#DE3163','#317F43','#FF9900','#FFA812','#FF7518','#3CB371','#ACE5EE','#EE9374',]



let body = document.querySelector('.body')
let container_1 = document.querySelector('.wrapper_mood')
let container_2 = document.querySelector('.wrapper_colors')

let container_color_1 = document.querySelector('.color_1')
let container_color_2 = document.querySelector('.color_2')
let container_color_3 = document.querySelector('.color_3')
let container_color_4 = document.querySelector('.color_4')
let container_color_5 = document.querySelector('.color_5')
let container_color_6 = document.querySelector('.color_6')
let container_color_7 = document.querySelector('.color_7')
let container_color_8 = document.querySelector('.color_8')
let container_color_9 = document.querySelector('.color_9')
let container_color_10 = document.querySelector('.color_10')
let container_color_11 = document.querySelector('.color_11')
let container_color_12 = document.querySelector('.color_12')

btn_finish.onclick = function () {
	body.classList.add('background-none')
	container_1.classList.add('background-blur')
	container_2.classList.add('background-blur')
	if (angry.checked) {
		body.style.backgroundColor = '#800000';
		container_color_1.style.backgroundColor = '#F80000';
		container_color_2.style.backgroundColor = '#E32636';
		container_color_3.style.backgroundColor = '#AF2B1E';
		container_color_4.style.backgroundColor = '#642424';
		container_color_5.style.backgroundColor = '#781F19';
		container_color_6.style.backgroundColor = '#FF0033';
		container_color_7.style.backgroundColor = '#8B0000';
		container_color_8.style.backgroundColor = '#900020';
		container_color_9.style.backgroundColor = '#9B2D30';
		container_color_10.style.backgroundColor = '#B00000';
		container_color_11.style.backgroundColor = '#B03F35';
		container_color_12.style.backgroundColor = '#FF2400';
	}
	if (sad.checked) {
		body.style.backgroundColor = '#483D8B';
		container_color_1.style.backgroundColor = '#474B4E';
		container_color_2.style.backgroundColor = '#1A153F';
		container_color_3.style.backgroundColor = '#531A50';
		container_color_4.style.backgroundColor = '#606E8C';
		container_color_5.style.backgroundColor = '#240935';
		container_color_6.style.backgroundColor = '#181513';
		container_color_7.style.backgroundColor = '#310062';
		container_color_8.style.backgroundColor = '#20155E';
		container_color_9.style.backgroundColor = '#9C9C9C';
		container_color_10.style.backgroundColor = '#1E213D';
		container_color_11.style.backgroundColor = '#25221B';
		container_color_12.style.backgroundColor = '#536872';
	}
	if (quite.checked) {
		body.style.backgroundColor = '#483D8B';
		container_color_1.style.backgroundColor = '#A8E4A0';
		container_color_2.style.backgroundColor = '#FAE7B5';
		container_color_3.style.backgroundColor = '#FAE7B5';
		container_color_4.style.backgroundColor = '#C1876B';
		container_color_5.style.backgroundColor = '#87CEEB';
		container_color_6.style.backgroundColor = '#6DAE81';
		container_color_7.style.backgroundColor = '#FCD975';
		container_color_8.style.backgroundColor = '#C6DF90';
		container_color_9.style.backgroundColor = '#98C793';
		container_color_10.style.backgroundColor = '#FFDEAD';
		container_color_11.style.backgroundColor = '#BDECB6';
		container_color_12.style.backgroundColor = '#79553D';
	}
	if (cheerful.checked) {
		body.style.backgroundColor = '#483D8B';
		container_color_1.style.backgroundColor = '#B2EC5D';
		container_color_2.style.backgroundColor = '#F4A900';
		container_color_3.style.backgroundColor = '#9ACD32';
		container_color_4.style.backgroundColor = '#F0E68C';
		container_color_5.style.backgroundColor = '#FBEC5D';
		container_color_6.style.backgroundColor = '#AAF0D1';
		container_color_7.style.backgroundColor = '#FF4F00';
		container_color_8.style.backgroundColor = '#009900';
		container_color_9.style.backgroundColor = '#DC9D00';
		container_color_10.style.backgroundColor = '#7DF9FF';
		container_color_11.style.backgroundColor = '#FFA089';
		container_color_12.style.backgroundColor = '#08E8DE';
	}
}
changerColor.onclick = function () {
	if (sad.checked) {
		function getRandomNumberSad() {
			return Math.floor(Math.random() * sad_colors.length)
		}
		document.body.style.backgroundColor = sad_colors[getRandomNumberSad()];
	}
	if (quite.checked) {
		function getRandomNumberQuite() {
			return Math.floor(Math.random() * quite_colors.length)
		}
		document.body.style.backgroundColor = quite_colors[getRandomNumberQuite()];
	}
	if (angry.checked) {
		function getRandomNumberAngry() {
			return Math.floor(Math.random()* angry_colors.length)
		}
		document.body.style.backgroundColor = angry_colors[getRandomNumberAngry()];
	}
	if (cheerful.checked) {
		function getRandomNumberCheerful() {
			return Math.floor(Math.random()* cheerful_colors.length)
		}
		document.body.style.backgroundColor = cheerful_colors[getRandomNumberCheerful()];
	}
}







