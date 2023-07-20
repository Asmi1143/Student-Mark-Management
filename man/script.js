const resultForm = document.getElementById("resultForm");
const resultTable = document.getElementById("resultTable");
const tbody = resultTable.querySelector("tbody");

resultForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const rollInput = document.getElementById("roll");
  const botanyInput = document.getElementById("biology");
  const zoologyInput = document.getElementById("physics");
  const chemistryInput = document.getElementById("chemistry");

  const name = nameInput.value;
  const roll = rollInput.value;
  const biology = botanyInput.value;
  const physics = zoologyInput.value;
  const chemistry = chemistryInput.value;

  const CUTToff= ( ((parseInt(biology) +  parseInt(chemistry))/2 )+ parseInt(physics)) ;

  const newRow = document.createElement("tr");
  newRow.innerHTML = `
    <td>${name}</td>
    <td>${roll}</td>
    <td>${biology}</td>
    <td>${physics}</td>
    <td>${chemistry}</td>
    <td>${CUTToff}%</td>
    <td>
      <button class="edit-button" onclick="editResult(this)">Edit</button>
    </td>
  `;

  tbody.appendChild(newRow);

  nameInput.value = "";
  rollInput.value = "";
  botanyInput.value = "";
  zoologyInput.value = "";
  chemistryInput.value = "";
});

function editResult(button) {
  const row = button.parentNode.parentNode;
  const cells = row.querySelectorAll("td");

  const name = cells[0].textContent;
  const roll = cells[1].textContent;
  const biology = cells[2].textContent;
  const physics = cells[3].textContent;
  const chemistry = cells[4].textContent;

  const nameInput = document.getElementById("name");
  const rollInput = document.getElementById("roll");
  const botanyInput = document.getElementById("biology");
  const zoologyInput = document.getElementById("physics");
  const chemistryInput = document.getElementById("chemistry");

  nameInput.value = name;
  rollInput.value = roll;
  botanyInput.value = biology;
  zoologyInput.value = physics;
  chemistryInput.value = chemistry;

  row.remove();
}
