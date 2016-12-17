import { markdown } from 'markdown'
const elem = document.getElementById('markdown');
elem.innerHTML = markdown.toHTML(elem.textContent);
