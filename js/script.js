// 1. Скрыть элемент по нажатию кнопки ------------------------------
// Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text">Remove me</div> исчезал.

let btn = document.querySelector("#hider"),
  text = document.querySelector("#text");

btn.addEventListener("click", () => {
  text.remove();
});

// 2 Какой обработчик запустится? ------------------------------------

//В переменной `button` находится кнопка. Изначально на ней нет обработчиков.
// Который из обработчиков запустится? Что будет выведено при клике после выполнения кода?

/* button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2); */

// жауап
alert("1");
alert(2);

// 3 Добавить кнопку закрытия ------------------------------------
let panes = document.querySelectorAll(".pane");

for (let i = 0; i < panes.length; i++) {
  panes[i].insertAdjacentHTML(
    "afterbegin",
    '<button class="remove-button">[x]</button>'
  );
  panes[i].firstChild.onclick = () => panes[i].remove();
}
