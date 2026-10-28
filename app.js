async function loadMenu() {

  const response =
    await fetch("./data/index.json");

  const list =
    await response.json();

  const menu =
    document.getElementById("menu");

  menu.innerHTML = "";

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

  const q = data.du_lieu;

  document.getElementById("content")
    .innerHTML = `
      <div class="card">

        <h2>
          Quẻ ${q.id ?? "?"}: ${q.ten ?? "chưa cập nhật"}
        </h2>

        <p>
          <strong>${q.han ?? "chưa cập nhật"}</strong>
        </p>

        <p>
          Tượng:
          ${q.tuong ?? "chưa cập nhật"}
        </p>

        <p>
          Tính chất:
          ${q.tinh_chat ?? "chưa cập nhật"}
        </p>

        <p>
          Ngũ hành:
          ${q.ngu_hanh ?? "chưa cập nhật"}
        </p>

      </div>
  `;
}

loadMenu();

loadQue("001-kien.json");
