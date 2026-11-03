import "./style.css";

const toDoList = [
  { name: "Cucinare la pasta", fatto: false },
  { name: "Pulire il bagno", fatto: false },
  { name: "Fare la spesa", fatto: false },
  { name: "Invadere la Polonia", fatto: false }
];


const app = document.querySelector("#app");

const foglio = document.createElement("main");
foglio.className = "foglio";

const titolo = document.createElement("h1");
titolo.textContent = "Da fare";

const form = document.createElement("form");
form.className = "nuova-task";

const input = document.createElement("input");
input.type = "text";
input.id = "mioInput";
input.placeholder = "Scrivi una task";
input.setAttribute("aria-label", "Nuova task");
input.autocomplete = "off";

const pulsante = document.createElement("button");
pulsante.type = "submit";
pulsante.textContent = "Aggiungi";

form.append(input, pulsante);

const ul = document.createElement("ul");
ul.className = "lista";

const riepilogo = document.createElement("p");
riepilogo.className = "riepilogo";

foglio.append(titolo, form, ul, riepilogo);
app.append(foglio);


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const testoInserito = input.value.trim();

  if (testoInserito !== "") {
    toDoList.push({ name: testoInserito, fatto: false });
    input.value = "";
  } else {
    alert("Nessuna task inserita!");
  }
  renderList();
  input.focus();
});


function renderList() {
  ul.replaceChildren();

  if (toDoList.length === 0) {
    const vuota = document.createElement("li");
    if (todo.fatto) li.classList.add("fatta")
    vuota.className = "vuota";
    vuota.textContent = "Niente da fare. Scrivi la prima task qui sopra.";
    ul.append(vuota);
  }

  toDoList.forEach((todo) => {
    const li = document.createElement("li");
    li.className = todo.fatto ? "task fatta" : "task";

    const check = document.createElement("button");
    check.type = "button";
    check.className = "check";
    check.setAttribute("aria-pressed", String(todo.fatto));
    check.setAttribute(
      "aria-label",
      todo.fatto ? `Segna come da fare: ${todo.name}` : `Segna come fatta: ${todo.name}`
    );

    check.addEventListener("click", () => {
      todo.fatto = !todo.fatto;
      renderList();
    });

    const testo = document.createElement("span");
    testo.className = "testo";
    testo.textContent = todo.name;
    testo.title = todo.name;

    li.append(check, testo);
    ul.append(li);
  });

  renderTotal();
}

function renderTotal() {
  const completati = toDoList.filter((n) => n.fatto);
  riepilogo.textContent = `task totali: ${toDoList.length}, completate: ${completati.length}`;
}

renderList();
