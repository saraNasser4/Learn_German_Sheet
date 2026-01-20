import { articles } from './Data/wordsData.js';
import { sentences } from './Data/sentencesData.js';
import { notes } from './Data/notesData.js';
import { pronunciations } from './Data/pronunciationsData.js';
import { verbs } from "./Data/verbsData.js";

const tWords = document.getElementById("tWords");
const ulSentences = document.getElementById("ulSentences");
const ulNotes = document.getElementById("ulNotes");
const divPron = document.getElementById("divPron");
const tVerbs = document.getElementById("tVerbs");
const tPartDay = document.getElementById("tPartDay");
const tPersonalPro = document.getElementById("tPersonalPro");
const lineDiv = document.getElementById("lineDiv");

articles.forEach(({ article, type, words }) => {
  const tr = document.createElement("tr");
  
  tr.innerHTML = `
  <td><strong>${article}</strong> (${type})</td>  
  <td>${words.join(", ")}</td>
  <td class="num">${words.length}</td>
  `;
  
  tWords.appendChild(tr);
});

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

notes.forEach((note) => {
  const lin = document.createElement("li");
  
  lin.innerHTML = `
  <strong>${note?.[0]}</strong>
  → ${note?.[1]}
  ${note?.[2] !== undefined ? `<small>"${note?.[2]}"</small>` : ""}
  `;
  ulNotes.appendChild(lin);
});

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

const adv = ["Nie", "Fast nie", "Selten", "Manchmal", "Oft", "Meistens", "Fast immer", "Immer (Jeden Tag)"]
adv.forEach((d)=> {
    const span = document.createElement("span");

    span.innerHTML = d;
    lineDiv.appendChild(span)
  })

const nominative = ["Ich", "Du", "Er/Sie/Es", "Wir", "Ihr", "sie/Sie"];
const accusative =["Mich", "Dich", "Ihn/Sie/Es", "Uns", "Euch", "sie/Sie"];
partsDayData.forEach((day, index)=> {
  const tr = document.createElement("tr");
  
  tr.innerHTML = `
    <td>${index == partsDayData.length - 1 ? "Die" : "Der"} ${day}</td>
    <td>${index == partsDayData.length - 1 ? "In der" : "Am"} ${day}</td>
    `;
  
  tPartDay.appendChild(tr);
});