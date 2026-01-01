import { articles } from './wordsData.js';

const tbody = document.getElementById("tWords");

articles.forEach(({ article, type, words }) => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td><strong>${article}</strong> (${type})</td>
    <td>${words.join(", ")}</td>
    <td class="num">${words.length}</td>
  `;

  tbody.appendChild(tr);
});
