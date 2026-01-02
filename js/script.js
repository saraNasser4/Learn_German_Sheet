import { articles } from './wordsData.js';
import { sentences } from './sentencesData.js';
import { notes } from './notesData.js';

const tbody = document.getElementById("tWords");
const ulSentences = document.getElementById("ulSentences");
const ulNotes = document.getElementById("ulNotes");

articles.forEach(({ article, type, words }) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td><strong>${article}</strong> (${type})</td>
    <td>${words.join(", ")}</td>
    <td class="num">${words.length}</td>
  `;

  tbody.appendChild(tr);
});

sentences.forEach((sentence)=> {
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${sentence[0]}</strong>
    ${sentence[1] !== undefined ? `→ ${sentence[1]}` : ""}
  `;
  ulSentences.appendChild(li);
});

notes.forEach((note) => {
  const li = document.createElement("li");

  li.innerHTML = `
    <strong>${note[0]}</strong>
    → ${note[1]}
    ${note[2] !== undefined ? `<small>"${note[2]}"</small>` : ""}
  `;
  ulNotes.appendChild(li);
});