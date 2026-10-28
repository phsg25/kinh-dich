async function loadMenu() {

  const response =
    await fetch("./data/index.json");

  const list =
    await response.json();

  const menu =
    document.getElementById("menu");

  list.forEach(item => {

    const button =
      document.createElement("button");

    button.innerText =
      item.ten;

    button.onclick = () =>
      loadQue(item.file);

    menu.appendChild(button);

  });

}

async function loadQue(file) {

  const response =
    await fetch("./data/" + file);

  const data =
    await response.json();

  document.getElementById("content")
    .innerHTML = `
      <div class="card">

        <h2>${data.ten}</h2>

        <p>${data.han}</p>

        <p>Tượng: ${data.tuong}</p>

        <p>Tính chất: ${data.tinh_chat}</p>

        <p>Ngũ hành: ${data.ngu_hanh}</p>

      </div>
  `;
}

loadMenu();
loadQue("001-kien.json");
