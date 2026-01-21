import { articles } from './Data/wordsData.js';
import { sentences } from './Data/sentencesData.js';
import { notes } from './Data/notesData.js';
import { pronunciations } from './Data/pronunciationsData.js';
import { verbs } from "./Data/verbsData.js";
import { personalData } from "./Data/personalData.js";

const tWords = document.getElementById("tWords");
const ulSentences = document.getElementById("ulSentences");
const ulNotes = document.getElementById("ulNotes");
const divPron = document.getElementById("divPron");
const tVerbs = document.getElementById("tVerbs");
const tPartDay = document.getElementById("tPartDay");
const tPersonalPro = document.getElementById("tPersonalPro");
const lineDiv = document.getElementById("lineDiv");


let currentIndex = 0;

const card = document.getElementById("card");
const articleTitle = document.getElementById("articleTitle");
const articleType = document.getElementById("articleType");
const wordList = document.getElementById("wordList");
const wordsCount = document.getElementById("wordsCount");
    
function renderCard(index) {
  const data = articles[index];
  articleTitle.textContent = data.article;
  articleTitle.style.color = data.color;
  wordsCount.textContent = data.words.length
  wordsCount.style.backgroundColor = data.color;
  articleType.textContent = data.type;
  wordList.innerHTML = "";

  data.words.forEach(word => {
    const li = document.createElement("li");
    li.textContent = word;
    wordList.appendChild(li);
  });
}

function changeCard(direction) {
  card.classList.add("fade-out");

  setTimeout(() => {
     currentIndex =
        (currentIndex + direction + articles.length) % articles.length;

     renderCard(currentIndex);
     card.classList.remove("fade-out");
  }, 200);
}

document.getElementById("prevBtn").onclick = () => changeCard(-1);
document.getElementById("nextBtn").onclick = () => changeCard(1);

document.addEventListener("keydown", e => {
    if (e.key === "ArrowLeft") changeCard(-1);
    if (e.key === "ArrowRight") changeCard(1);
});

renderCard(currentIndex);

sentences.forEach((sentence) => {
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${sentence.de}</strong>
    ${
      sentence.en
        ? `→ ${sentence.en}`
        : sentence.note
        ? `→ ${sentence.note}`
        : ""
    }
  `;

  ulSentences.appendChild(li);
});

notes.forEach((note)=> {
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${note.head}</strong>
    → ${note.explanation}
    ${note?.example ? `<small>"${note.example}"</small>` : ""}
  `;

  ulNotes.appendChild(li);
})

pronunciations.forEach(({ header, data }) => {
  const h3 = document.createElement("h3");
  h3.innerText = `${header}:`;

  const ul = document.createElement("ul");
  ul.innerHTML = data.map(d => `<li>${d}</li>`).join('');

  divPron.appendChild(h3);
  divPron.appendChild(ul);
});


let tr;
verbs.forEach((verb, index) => {
  if (index % 4 === 0) {
    tr = document.createElement("tr");
    tVerbs.appendChild(tr);
  }

  const td = document.createElement("td");
  td.textContent = verb;
  tr.appendChild(td);
});

const partsDayData = ["Morgen", "Mittag", "Nachmittag", "Abend", "Nacht"];
partsDayData.forEach((day, index)=> {
  const tr = document.createElement("tr");
  
  tr.innerHTML = `
    <td>${index == partsDayData.length - 1 ? "Die" : "Der"} ${day}</td>
    <td>${index == partsDayData.length - 1 ? "In der" : "Am"} ${day}</td>
    `;
  
  tPartDay.appendChild(tr);
});

["Nie", "Fast nie", "Selten", "Manchmal", "Oft", "Meistens", "Fast immer", "Immer (Jeden Tag)"].forEach((d)=> {
    const span = document.createElement("span");

    span.innerHTML = d;
    lineDiv.appendChild(span)
})

personalData.forEach(({nom, acc, dat})=> {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${nom}</td>
    <td>${acc}</td>
    <td>${dat}</td>
  `;
  tPersonalPro.appendChild(tr);
})
