// №1⊗jsPmPrECVA

// Модифицируйте мой код так, чтобы по клику на абзац к его 
// содержимому прибавлялась единица.
// let arr = [1, 2, 3, 4, 5];

// let parent = document.querySelector('#parent');

// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
//     p.addEventListener('click', ()=>{
//         p.textContent = Number(p.textContent) + 1; 
//     })
	
// 	parent.appendChild(p);
// }

// Практика на создание списков ul на JavaScript
// №1⊗jsPmPrLC

// Дан ul:

// <ul id="elem"></ul>
// Дан массив. Вставьте элементы этого массива в конец ul так, чтобы каждый 
// элемент стоял в своем li.
// let arr = [1, 2, 3, 4, 5];
// let ul = document.querySelector('ul')
// for (elem of arr){
//     let li = document.createElement('li');
//     li.textContent = elem;

//     ul.append(li); 
// }

// №2⊗jsPmPrLC

// Модифицируйте предыдущую задачу так, чтобы по клику на любой из вставленных 
// элементов на экран выводился текст этого элемента.
// let arr = [1, 2, 3, 4, 5];
// let ul = document.querySelector('ul')
// for (elem of arr){
//     let li = document.createElement('li');
//     li.textContent = elem;
//     li.addEventListener('click', ()=>{
//         console.log(li.textContent);
//     })
//     ul.append(li); 
// }

// №3⊗jsPmPrLC

// Модифицируйте предыдущую задачу так, чтобы по клику на li ей в конец 
// добавлялся '!'.
// let arr = [1, 2, 3, 4, 5];
// let ul = document.querySelector('ul')
// for (elem of arr){
//     let li = document.createElement('li');
//     li.textContent = elem;
//     li.addEventListener('click', ()=>{
//         li.textContent += '!'; 
//     })
//     ul.append(li); 
// }

// №4⊗jsPmPrLC

// Модифицируйте предыдущую задачу так, чтобы по повторное нажатие на li не 
// приводило к добавлению второго '!'.
// let arr = [1, 2, 3, 4, 5];
// let ul = document.querySelector('ul')
// for (elem of arr){
//     let li = document.createElement('li');
//     li.textContent = elem;
//     li.addEventListener('click', ()=>{
//         li.textContent += '!'; 
//     }, {once:true})
//     ul.append(li); 
// }

// №1⊗jsPmPrTC

// Дана пустая HTML таблица. С помощью двух вложенных циклов for заполните 
// эту таблицу 5-ю рядами с 5-ю колонками.
// for (let i = 0; i < 5; i++) {
//     let tr = document.createElement('tr');
    
//     for (let i = 0; i < 5; i++) {
//         let td = document.createElement('td');
//         td.textContent = 'x'; 
//         tr.appendChild(td);
//     }
    
//     table.appendChild(tr);
// }

// №2⊗jsPmPrTC

// Модифицируйте предыдущую задачу так, чтобы таблица создавалась размером 
// 10 рядов на 5 колонок.
// for (let i = 0; i < 10; i++) {
//     let tr = document.createElement('tr');
    
//     for (let i = 0; i < 5; i++) {
//         let td = document.createElement('td');
//         td.textContent = 'x'; 
//         tr.appendChild(td);
//     }
    
//     table.appendChild(tr);
// }

// №3⊗jsPmPrTC

// Модифицируйте предыдущую задачу так, чтобы в каждую td добавлялся текст 'x'.

// №4⊗jsPmPrTC

// Реализуйте генератор таблиц, ширина и высота таблиц задается в двух 
// инпутах (например, таблица 5 на 10 ячеек).

// let table = document.querySelector('#table');
// let tableWidth = document.querySelector('#width')
// let tableHeight = document.querySelector('#height')


// tableHeight.addEventListener('blur', ()=>{
//     for (let i = 0; i < Number(tableHeight.value); i++) {
//         let tr = document.createElement('tr');
        
//         for (let i = 0; i < Number(tableWidth.value); i++) {
//             let td = document.createElement('td');
//             td.textContent = 'x'; 
//             tr.appendChild(td);
//         }
        
//         table.appendChild(tr);
//     }
// })
// function getEvenNumbers(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//       if (i % 2 === 0) {
//         result.push(i);
//       }
//     }
//     return result;
//   }

// let evenNums = getEvenNumbers(2, 50); 

// let table = document.querySelector('#table');

// for (let j=0; j<Number(evenNums.length); j++){
//     console.log(evenNums[j]); 
// }

// for (let i=0; i<5; i++){
//     let tr = document.createElement('tr')
//     for(let k=0; k<5; k++){
//         let td = document.createElement('td');
//         td.textContent = evenNums[i*5 + k];
  
//         tr.append(td);
//     }
//     table.append(tr); 
// }

// №1⊗jsPmPrTCVA

// Дан массив:

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// Не подсматривая в теоретическую часть урока, выведите элементы 
// приведенного массива в виде HTML таблицы table.
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];   

// for (let subArr of arr){
//     let tr = document.createElement('tr')
//     for(let elem of subArr){
//         let td = document.createElement('td');
//         td.textContent = elem;
  
//         tr.append(td);
//     }
//     table.append(tr); 
// }

// №2⊗jsPmPrTCVA

// Модифицируйте предыдущую задачу так, чтобы в таблицу записывались 
// не элементы, а квадраты этих элементов.

// for (let subArr of arr){
//     let tr = document.createElement('tr')
//     for(let elem of subArr){
//         let td = document.createElement('td');
//         td.textContent = elem**2;
  
//         tr.append(td);
//     }
//     table.append(tr); 
// }
// let table = document.querySelector('#table');

// let users = [
// 	{
// 		name: 'name1',
// 		surname: 'surname1',
// 		patronymic: 'patronymic1'
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		patronymic: 'patronymic2'
// 	},
// 	{
// 		name: 'name3',
// 		surname: 'surname3',
// 		patronymic: 'patronymic3'
// 	},
// ];

// for (let user of users) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = user.surname;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = user.patronymic;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }

// let table2 = document.querySelector('#table2');

// №1⊗jsPmPrTCVOA

// Дан следующий массив с работниками:

 
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите элементы этого массива в виде HTML таблицы.

// for (let employee of employees){
//     let tr = document.createElement('tr')

//     let td1 = document.createElement('td')
//     td1.textContent = employee.name; 
//     tr.append(td1); 

//     let td2 = document.createElement('td')
//     td2.textContent = employee.age; 
//     tr.append(td2); 

//     let td3 = document.createElement('td')
//     td3.textContent = employee.salary; 
//     tr.append(td3);
    
//     table2.append(tr);
// }

// №2⊗jsPmPrTCVOA

// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с 
// возрастом ее содержимое увеличивалось на 1.
// for (let employee of employees){
//     let tr = document.createElement('tr')

//     let td1 = document.createElement('td')
//     td1.textContent = employee.name; 
//     tr.append(td1); 

//     let td2 = document.createElement('td')
//     td2.textContent = employee.age; 
//     td2.addEventListener('click', ()=>{
//         td2.textContent = Number(td2.textContent) + 1; 
//     })
//     tr.append(td2); 

//     let td3 = document.createElement('td')
//     td3.textContent = employee.salary; 
//     tr.append(td3);
    
//     table2.append(tr);
// }

// №3⊗jsPmPrTCVOA

// Модифицируйте предыдущую задачу так, чтобы по клику на любую ячейку с 
// зарплатой ее содержимое увеличивалось на 10%.
// for (let employee of employees){
//     let tr = document.createElement('tr')

//     let td1 = document.createElement('td')
//     td1.textContent = employee.name; 
//     tr.append(td1); 

//     let td2 = document.createElement('td')
//     td2.textContent = employee.age; 
//     td2.addEventListener('click', ()=>{
//         td2.textContent = Number(td2.textContent) + 1; 
//     })
//     tr.append(td2); 

//     let td3 = document.createElement('td')
//     td3.textContent = employee.salary; 
//     td3.addEventListener('click', ()=>{
//         td3.textContent = Number(td3.textContent) * 1.1; 
//     })
//     tr.append(td3);
    
//     table2.append(tr);
// }


// №1⊗jsPmPrTRCA

// Сделайте кнопку, по нажатию на которую в таблицу будет добавляться новый ряд.

// Дана также кнопка. Сделайте так, чтобы по нажатию на кнопку таблица 
// увеличивалась на один ряд и на одну колонку.
// let table = document.querySelector('#table');
// let button = document.querySelector('button');

// let count = 1; 

// button.addEventListener('click', ()=>{
// 	++ count; 
// 	let newTr = document.createElement('tr')
// 	for (let i = 0; i < count; i++) { 
// 		let td = document.createElement('td');
// 		newTr.appendChild(td);
// 	}
// 	table.append(newTr)
// 	let trs = document.querySelectorAll('#table tr');
// 	for (let tr of trs) {
// 		let td = document.createElement('td');
// 		tr.append(td)
// 	}
// })

// №1⊗jsPmPrTCM

// Пусть дана некоторая HTML таблица с числами и кнопка. По нажатию на кнопку увеличьте 
// число в каждой ячейки таблицы в два раза.
// let button = document.querySelector('button'); 
// let tds = document.querySelectorAll('td');

// button.addEventListener('click', ()=>{
// 	for (td of tds){
// 		td.textContent = Number(td.textContent)*2;
// 	}
// })

// №1⊗jsPmPrNER

// Дан следующий код:

// <ul id="parent">
// 	<li>1</li>
// 	<li>2</li>
// 	<li>3</li>
// </ul>

// <input type="submit" id="button">
// Сделайте так, чтобы по клику на кнопку в список добавлялся новый элемент. 
// Сделайте так, чтобы любая li удалялась по клику на нее. Речь идет как о тех li, которые 
// уже есть в списке, так о новых, созданных после нажатия на кнопку.

// let button = document.querySelector('#button');
// let parent = document.querySelector('#parent');
// let lis = document.querySelectorAll('li')
// let count = 3; 
// for (let li of lis){
// 	li.addEventListener('click', ()=>{
// 		li.remove(); 
// 	})
// }


// button.addEventListener('click', ()=>{
// 	++ count;  
// 	let li = document.createElement('li');
// 	li.textContent = count;
// 	li.addEventListener('click', ()=>{
// 		li.remove(); 
// 	})

// 	parent.append(li)
// })


// let text = document.querySelector('p'); 
// let link = document.querySelector('a');

// link.addEventListener('click', (event)=>{
// 	text.remove(); 
// 	event.preventDefault(); 
// })

// №1⊗jsPmPrCRL

// Дан тег ul. Добавьте в конец каждого тега li ссылку на удаления этого li из списка.
// let ul = document.querySelector('ul')
// let count = 0; 
// for (let i=0; i<5; i++){
// 	++ count;  
// 	let li = document.createElement('li');
// 	li.textContent = 'item' + count + "  "; 
// 	let link = document.createElement('a')
// 	link.href = '#'; 
// 	link.textContent = 'remove'; 
// 	link.addEventListener('click', ()=>{
// 		li.remove(); 
// 	})
// 	li.append(link)

// 	ul.append(li); 
// }

// №2⊗jsPmPrCRL

// Дана HTML таблица. Добавьте в нее еще одну колонку, в которой для каждого ряда 
// таблицы будет стоять ссылка на удаление этого ряда.
// let trs = document.querySelectorAll('tr');

// for (let i=0; i<trs.length; i++){
// 	console.log(trs[i]);
// 	let td = document.createElement('td'); 
// 	let link = document.createElement('a')
// 	link.href = '#'; 
// 	link.textContent = 'remove'; 
// 	td.append(link);
// 	td.addEventListener('click', ()=>{
// 		trs[i].remove(); 
// 	})

// 	trs[i].append(td); 
// }
// №1⊗jsPmPrSEE

// Модифицируйте приведенный выше код так, чтобы текст абзаца менялся не по потери фокуса, 
// а по мере ввода текста в инпут.
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');

// input.value = elem.textContent;

// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });

/////////////////////////////////////////////////////////////////////////////////////////
// let parent = document.querySelector('#parent')
// let elem = document.querySelector('#elem')

// elem.addEventListener('click', function func(){
// 	let input = document.createElement('input');

// 	input.value = elem.textContent;
// 	elem.textContent = ''; 
// 	elem.append(input);

// 	input.addEventListener('blur', ()=>{
// 		elem.textContent = input.value; 
// 		elem.addEventListener('click', func); 
// 	})
// 	elem.removeEventListener('click', func)
// })
/////////////////////////////////////////////////////////////////////////////////////////

// Прячем текст при редактировании элемента на JavaScript
// let elems = document.querySelectorAll('p');

// for (let i=0; i<elems.length; i++){
// 	elems[i].addEventListener('click', function func(){
// 		let input = document.createElement('input');
	
// 		input.value = elems[i].textContent;
// 		elems[i].textContent = ''; 
// 		elems[i].append(input);
	
// 		input.addEventListener('blur', ()=>{
// 			elems[i].textContent = input.value; 
// 			elems[i].addEventListener('click', func); 
// 		})
// 		elems[i].removeEventListener('click', func)
// 	})
// }

// №2⊗jsPmPrEGE

// Дана HTML таблица. Сделайте так, чтобы по клику на любую ячейку в ней 
// появлялся инпут для редактирования текста этой ячейки.

// let tds = document.querySelectorAll('td');

// for (let i=0; i<tds.length; i++){
	// tds[i].addEventListener('click', function func(){
	// 	let input = document.createElement('input');
	
	// 	input.value = tds[i].textContent;
	// 	tds[i].textContent = ''; 
	// 	tds[i].append(input);
	
	// 	input.addEventListener('blur', ()=>{
	// 		tds[i].textContent = input.value; 
	// 		tds[i].addEventListener('click', func); 
	// 	})
	// 	tds[i].removeEventListener('click', func)
	// })
// }

// Добавьте ссылку на удаление в конец каждого абзаца.
// Сделайте так, чтобы по клику на span в нем появлялся инпут для редактирования.

// let texts = document.querySelectorAll('p');
// let spans = document.querySelectorAll('span')

// for (let i=0; i<texts.length; i++){
// 	let link = document.createElement('a');
// 	link.href = '#'; 
// 	link.textContent = 'remove'; 
// 	link.addEventListener('click', ()=>{
// 		texts[i].remove(); 
// 	})
// 	texts[i].append(link); 
// }

// for(let i=0; i<spans.length; i++){
// 	spans[i].addEventListener('click', function func(){
// 		let input = document.createElement('input');
	
// 		input.value = spans[i].textContent;
// 		spans[i].textContent = ''; 
// 		spans[i].append(input);
	
// 		input.addEventListener('blur', ()=>{
// 			spans[i].textContent = input.value; 
// 			spans[i].addEventListener('click', func); 
// 		})
// 		spans[i].removeEventListener('click', func)
// 	})
// }

// №2⊗jsPmPrRET

// Пусть теперь изначально тегов span нет:

// <div id="parent">
// 	<p>text1</p>
// 	<p>text2</p>
// 	<p>text3</p>
// </div>

// Оберните сначала текст абзаца в теги span, добавьте к этим тегам возможность 
// редактирования, а затем добавьте в конец каждого абзаца ссылку на удаление.

// let texts = document.querySelectorAll('p'); 
// let parent = document.querySelector('#parent');

// for (let text of texts){
// 	let span = document.createElement('span'); 
// 	span.textContent = text.textContent; 

// 	let input = document.createElement('input');
// 	input.style.display = 'none'; 

// 	span.addEventListener('click', ()=>{
// 		span.style.display = 'none';
// 		input.style.display = 'inline'; 
// 		input.value = span.textContent; 
// 		input.focus(); 
// 	})

// 	input.addEventListener('blur', ()=>{
// 		input.style.display = 'none';
// 		span.style.display = 'inline';
// 		span.textContent = input.value;
// 	})

// 	let link = document.createElement('a');
// 	link.href = '#'; 
// 	link.textContent = 'remove'; 
// 	link.addEventListener('click', ()=>{
// 		text.remove(); 
// 	})
// 	text.textContent = ''; 
// 	text.prepend(span);
// 	text.append(input);  
// 	text.append(link);
// }

// №1⊗jsPmPrES

// Дан следующий HTML код:

// <p>text1</p>
// <p>text2</p>
// <p>text3</p>
// Добавьте в конец каждого абзаца ссылку, по клику на которую текст 
// абзаца будет перечеркиваться (а ссылка - нет).
// let texts = document.querySelectorAll('p');

// texts.forEach(text => {
// 	let span = document.createElement('span');
// 	span.textContent = text.textContent + ' ' 

// 	let link = document.createElement('a');
// 	link.textContent = 'cross'; 
// 	link.href = "#"; 

// 	text.textContent = '';
// 	text.append(span);
// 	text.append(link); 
// 	link.addEventListener('click', ()=>{
// 		span.style.textDecoration = 'line-through'; 
// 		link.remove(); 
// 	})
// })

// №2⊗jsPmPrES

// Модифицируйте предыдущую задачу так, чтобы после нажатия на ссылку эта 
// ссылка удалялась из абзаца (а текст абзаца становился перечеркнутым).

// №3⊗jsPmPrES

// Дана некоторая HTML таблица. Добавьте в эту таблицу еще одну колонку 
// со ссылкой. По нажатию на эту ссылку ряд с этой ссылкой должен стать зеленого 
// фона.
// let trs = document.querySelectorAll('tr');

// trs.forEach(tr =>{
// 	let td = document.createElement('td');
// 	let link = document.createElement('a');	
// 	link.textContent = 'change color'; 

// 	td.append(link);
// 	link.addEventListener('click', ()=>{
// 		tr.classList.toggle('green'); 
// 	})
// 	tr.append(td);
// })

// №4⊗jsPmPrES

// Модифицируйте предыдущую задачу так, чтобы первое нажатие по ссылке красило 
// ряд в зеленый фон, а второе нажатие отменяло это действие.

// let elem = document.querySelector('#elem');
// let show = document.querySelector('#show');
// let hide = document.querySelector('#hide');
// let hideShow = document.querySelector('#hideShow');

// hide.addEventListener('click', function() {
// 	elem.classList.add('hidden');
// });

// show.addEventListener('click', function() {
// 	elem.classList.remove('hidden');
// });

// hideShow.addEventListener('click', ()=>{
// 	elem.classList.toggle('hidden'); 
// })

// let buttons = document.querySelectorAll('button');
// let elems = document.querySelectorAll('p'); 

// buttons.forEach(button =>{
// 	button.addEventListener('click', ()=>{
// 		button.previousElementSibling.classList.toggle('hidden'); 
// 	})
// })

// let tds = document.querySelectorAll('td');
// let color = 'none'; 

// tds.forEach(td =>{
// 	td.addEventListener('click', ()=>{
// 	  if (color === 'none' || color === 'red'){
// 		td.classList.add('green');
// 		td.classList.remove('red');
// 		color = 'green'; 
// 	  } else if(color === 'green'){
// 		td.classList.add('red');
// 		td.classList.remove('green');
// 		color = 'red'; 
// 	  } 
// 	})
//   }); 

// let color = 'none'; 
// tds.forEach(td =>{
// 	td.addEventListener('click', ()=>{
// 		if (color == 'none' || color == 'red'){
// 			color = 'green';
// 			td.classList.remove('red')
// 		}
// 		else if(color == 'green'){
// 			color = 'red';
// 			td.classList.remove('green'); 
// 		}
	
// 		td.classList.add(color)
// 	})
// })

// №1⊗jsPmPrEChT

// Дан массив. Выведите его элементы в виде списка ul.
// let body = document.body; 
// let arr = ['item1', 'item2', 'item3'];
// let ul = document.createElement('ul'); 

// arr.forEach(elem =>{
// 	// создаем пункт
// 	let li = document.createElement('li');
// 	li.textContent = elem + ' '; 
// 	// создаем ссылки
// 	let link = document.createElement('a');
// 	link.href = '#'; 
// 	link.textContent = 'remove' + ' '; 
// 	let linkCross = document.createElement('a');
// 	linkCross.href = '#'; 
// 	linkCross.textContent = 'cross'; 
// 	link.addEventListener('click', ()=>{
// 		li.remove(); 
// 	})
// 	linkCross.addEventListener('click', (event)=>{
// 		li.style.textDecoration = "line-through"; 
// 		event.stopPropagation(); 
// 	})

// 	// добавляем ссылки
// 	li.append(link)
// 	li.append(linkCross)

// 	// добавляем обработчик на пункт 
// 	li.addEventListener('click', function func(){
// 		let input = document.createElement('input');
// 		input.value = li.textContent;
// 		li.textContent = ''
// 		li.append(input)
// 		input.focus(); 
// 		input.addEventListener('blur', ()=>{
// 			li.textContent = input.value; 
// 			li.addEventListener('click', func)
// 		})
// 		li.removeEventListener('click', func)
// 	})
	
// 	// добавляем пункт
// 	ul.append(li); 	
// })
// body.append(ul); 

// let addInput = document.createElement('input'); 
// body.append(addInput); 

// addInput.addEventListener('blur', ()=>{
// 	let li = document.createElement('li');
// 	li.textContent = addInput.value + ' '; 
// 	let link = document.createElement('a');
// 	link.href = '#'; 
// 	link.textContent = 'remove' + ' '; 
// 	let linkCross = document.createElement('a');
// 	linkCross.href = '#'; 
// 	linkCross.textContent = 'cross'; 
// 	link.addEventListener('click', ()=>{
// 		li.remove(); 
// 	})
// 	linkCross.addEventListener('click', (event)=>{
// 		li.style.textDecoration = "line-through"; 
// 		event.stopPropagation(); 
// 	})

// 	li.append(link); 
// 	li.append(linkCross); 

// 	li.addEventListener('click', function func(){
// 		let input = document.createElement('input');
// 		input.value = li.textContent;
// 		li.textContent = ''
// 		li.append(input)
// 		input.focus(); 
// 		input.addEventListener('blur', ()=>{
// 			li.textContent = input.value; 
// 			li.addEventListener('click', func)
// 		})
// 		li.removeEventListener('click', func)

// 	})

// 	ul.append(li); 
// })


// №2⊗jsPmPrEChT

// Модифицируйте предыдущую задачу так, чтобы по клику на любую li в ней 
// появлялся инпут, с помощью которого ее можно будет поредактировать.

// №3⊗jsPmPrEChT

// Модифицируйте предыдущую задачу так, чтобы под списком был инпут, 
// с помощью которого можно будет добавить новый элемент в конец списка ul. 
// Сделайте так, чтобы новые li также можно было редактировать.

// №4⊗jsPmPrEChT

// Модифицируйте предыдущую задачу так, чтобы в конце каждой li стояла 
// ссылка 'удалить', с помощью которой можно будет удалить эту li из ul.

// №5⊗jsPmPrEChT

// Модифицируйте предыдущую задачу так, чтобы в конце каждой li также 
// стояла ссылка 'перечеркнуть', с помощью которой можно будет перечеркнуть 
// текст данного тега li.

// Массив объектов и таблица
// №6⊗jsPmPrEChT
// function getChange(elem) {
// 	elem.addEventListener('click', function func(){
// 		let input = document.createElement('input');
	
// 		input.value = elem.textContent;
// 		elem.textContent = ''; 
// 		elem.append(input);
// 		input.focus();

// 		input.addEventListener('blur', ()=>{
// 			elem.textContent = input.value; 
// 			elem.addEventListener('click', func); 
// 		})
// 		elem.removeEventListener('click', func)
// 	})
// }
// function getLinkDelete(elem){
// 	let link = document.createElement('a');
// 	link.textContent = 'remove'
// 	elem.append(link)
// }

// // Дан следующий массив с работниками:
// let body = document.body; 
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// // Выведите этих работников в HTML таблице.
// let table = document.createElement('table');
// employees.forEach(oneof =>{
// 	let tr = document.createElement('tr');
// 	let td1 = document.createElement('td')
// 	td1.textContent = oneof.name;
// 	td1.classList.add('td')
// 	let td2 = document.createElement('td')
// 	td2.textContent = oneof.age;
// 	td2.classList.add('td')
// 	let td3 = document.createElement('td')
// 	td3.textContent = oneof.salary;
// 	td3.classList.add('td')
// 	let link = document.createElement('a');
// 	let td4 = document.createElement('td'); 
// 	link.href = '#'; 
// 	link.textContent = 'remove'; 
// 	link.addEventListener('click', ()=>{
// 		tr.remove(); 
// 	})
// 	td4.append(link); 
// 	td4.classList.add('td')

// 	getChange(td1)
// 	getChange(td2)
// 	getChange(td3)

// 	tr.append(td1);
// 	tr.append(td2);
// 	tr.append(td3);
// 	tr.append(td4); 
// 	table.append(tr)
// });
// table.style.paddingBottom = '50px'; 
// body.append(table); 

// let inputName = document.createElement('input');
// inputName.placeholder = 'name'; 
// let inputAge = document.createElement('input');
// inputAge.placeholder = 'age'; 
// let inputSalary = document.createElement('input');
// inputSalary.placeholder = 'salary'; 
// body.append(inputName);
// body.append(inputAge);
// body.append(inputSalary);

// inputSalary.addEventListener('blur', ()=>{
// 	let newTr = document.createElement('tr');
// 	let td1 = document.createElement('td');
// 	td1.textContent = inputName.value;
// 	td1.classList.add('td')
// 	let td2 = document.createElement('td');
// 	td2.textContent = inputAge.value;
// 	td2.classList.add('td')
// 	let td3 = document.createElement('td');
// 	td3.textContent = inputSalary.value;
// 	td3.classList.add('td')
// 	let link = document.createElement('a');
// 	let td4 = document.createElement('td'); 
// 	link.href = '#'; 
// 	link.textContent = 'remove'; 
// 	link.addEventListener('click', ()=>{
// 		newTr.remove(); 
// 	})
// 	td4.append(link); 
// 	td4.classList.add('td')

// 	getChange(td1)
// 	getChange(td2)
// 	getChange(td3)

// 	newTr.append(td1)
// 	newTr.append(td2)
// 	newTr.append(td3)
// 	newTr.append(td4)
	
// 	table.append(newTr)
// })

// №7⊗jsPmPrEChT

// Добавьте ячейкам созданной таблицы возможность редактирования.

// №8⊗jsPmPrEChT

// Добавьте в вашу таблицу новую колонку со ссылкой на удаления ряда из таблицы.

// №9⊗jsPmPrEChT

// Сделайте под таблицей 3 инпута и кнопку для добавление нового работника. 
// Пусть в инпуты вводятся имя, возраст и зарплата, и по нажатию на кнопку 
// новый работник добавляется в таблицу. Реализуйте редактирование ячеек для 
// вновь добавленных работников.

// Массив объектов и список
// №10⊗jsPmPrEChT

// Дан следующий массив с работниками:

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// Выведите на экран каждого работника в своем теге li тега ul.

// №11⊗jsPmPrEChT

// Сделайте так, чтобы по клику на имя, возраст или зарплату работника 
// появлялся инпут для редактирования этого поля.

// №12⊗jsPmPrEChT

// Добавьте в конец каждого тега li ссылку на удаление этого li из списка.

// №13⊗jsPmPrEChT

// Под списком сделайте форму для добавления нового работника.
function getChange(elem) {
	elem.addEventListener('click', function func(){
		let input = document.createElement('input');
	
		input.value = elem.textContent;
		elem.textContent = ''; 
		elem.append(input);
		input.focus();

		input.addEventListener('blur', ()=>{
			elem.textContent = input.value + ' '; 
			elem.addEventListener('click', func); 
		})
		elem.removeEventListener('click', func)
	})
}
function getLinkDelete(elem){
	let link = document.createElement('a');
	link.textContent = 'remove';
	link.href = '#'; 
	link.addEventListener('click', ()=>{
		elem.remove(); 
	})
	elem.append(link)
}

// Дан следующий массив с работниками:
let body = document.body; 
let employees = [
	{name: 'employee1', age: 30, salary: 400},
	{name: 'employee2', age: 31, salary: 500},
	{name: 'employee3', age: 32, salary: 600},
];

let ul = document.createElement('ul');

employees.forEach(oneof =>{
	let li = document.createElement('li'); 
	let span1 = document.createElement('span');
	span1.textContent = oneof.name + ' ';  
	let span2 = document.createElement('span');
	span2.textContent = oneof.age + ' ';  
	let span3 = document.createElement('span');
	span3.textContent = oneof.salary + ' ';

	getChange(span1);
	getChange(span2);
	getChange(span3);

	li.append(span1);
	li.append(span2);
	li.append(span3);
	getLinkDelete(li); 

	ul.append(li); 
})

body.append(ul); 

let inputName = document.createElement('input');
inputName.placeholder = 'name'; 
let inputAge = document.createElement('input');
inputAge.placeholder = 'age'; 
let inputSalary = document.createElement('input');
inputSalary.placeholder = 'salary'; 
body.append(inputName);
body.append(inputAge);
body.append(inputSalary);

inputSalary.addEventListener('click', ()=>{
	let newLi = document.createElement('li'); 
	let span1 = document.createElement('span');
	span1.textContent = inputName.value + ' ';  
	let span2 = document.createElement('span');
	span2.textContent = inputAge.value + ' ';  
	let span3 = document.createElement('span');
	span3.textContent = inputSalary.value + ' ';

	getChange(span1);
	getChange(span2);
	getChange(span3);

	newLi.append(span1);
	newLi.append(span2);
	newLi.append(span3);
	getLinkDelete(newLi); 

	ul.append(newLi); 
})









