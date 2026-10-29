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

async function loadBatQuai() {

  const response =
    await fetch("./data/bat-quai.json");

  const data =
    await response.json();

  let html = `
    <div class="card">

      <h2>
        ${data.du_lieu.title}
      </h2>
  `;

  data.du_lieu.quai.forEach(quai => {

    html += `
      <div style="
        margin-bottom:16px;
        padding:12px;
        border:1px solid #ddd;
        border-radius:8px;">

        <h3>
          ${quai.ky_hieu}
          ${quai.ten}
        </h3>

        <p>
          Tượng:
          ${quai.tuong}
        </p>

        <p>
          Tính chất:
          ${quai.tinh_chat}
        </p>

      </div>
    `;
  });

  html += `</div>`;

  document.getElementById("content")
    .innerHTML = html;
}

async function loadDanNhap() {

  const response =
    await fetch("./data/dan-nhap.json");

  const data =
    await response.json();

  let html = `
    <div class="card">

      <h2>
        ${data.du_lieu.title}
      </h2>
  `;

  data.du_lieu.sections.forEach(section => {

    html += `
      <h3>${section.heading}</h3>
    `;

    if (section.content) {

      html += `
        <p>${section.content}</p>
      `;
    }

    if (section.items) {

      html += `<ul>`;

      section.items.forEach(item => {

        html += `
          <li>${item}</li>
        `;
      });

      html += `</ul>`;
    }

  });

  html += `</div>`;

  document.getElementById("content")
    .innerHTML = html;
}

async function loadHexagramList() {

  const response =
    await fetch("./data/index.json");

  const list =
    await response.json();

  let html = `
    <div class="card">

      <h2>
        Danh sách quẻ
      </h2>
  `;

  list.forEach(item => {

    html += `
      <div
        style="
          padding:12px;
          margin-bottom:10px;
          border:1px solid #ddd;
          border-radius:8px;
          cursor:pointer;
        "
        onclick="loadQue('${item.file}')">

        ${item.id}. ${item.ten}

      </div>
    `;
  });

  html += `</div>`;

  document.getElementById("content")
    .innerHTML = html;
}
loadMenu();

loadQue("001-kien.json");
