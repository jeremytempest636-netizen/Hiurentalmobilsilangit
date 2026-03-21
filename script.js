const rows = document.querySelectorAll("table tr");

const header = document.querySelector("table tr");
const th = document.createElement("th");
th.innerText = "Pesan";
header.appendChild(th);

rows.forEach((row, index) => {
if (index === 0) return;

const kota = row.children[0].innerText;

const td = document.createElement("td");

td.innerHTML = `<a href="https://wa.me/6283856508729?text=Saya ingin ke ${kota}" class="btn-wa">Pesan</a>`;

row.appendChild(td);
});