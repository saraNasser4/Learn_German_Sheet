import { articles } from './Data/wordsData.js';
import { sentences } from './Data/sentencesData.js';
import { notes } from './Data/notesData.js';
import { pronunciations } from './Data/pronunciationsData.js';
document.addEventListener("DOMContentLoaded", () => {
  // your entire code here
  
  const tbody = document.getElementById("tWords");
  const ulSentences = document.getElementById("ulSentences");
  const ulNotes = document.getElementById("ulNotes");
  const divPron = document.getElementById("divPron");
  
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
    const lis = document.createElement("li");
  
    lis.innerHTML = `
    <strong>${sentence[0]}</strong>
    ${sentence[1] !== undefined ? `→ ${sentence[1]}` : ""}
    `;
    ulSentences.appendChild(lis);
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
});