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

  const q =
    data.du_lieu;

  let html = `
    <div class="card">

      <h2>
        Quẻ ${String(q.id).padStart(2, "0")}: ${q.ten}
      </h2>

      <p>
        <strong>${q.han}</strong>
      </p>

      <p>
        Tượng:
        ${q.tuong}
      </p>

      <p>
        Tính chất:
        ${q.tinh_chat}
      </p>

      <p>
        Ngũ hành:
        ${q.ngu_hanh}
      </p>
  `;

  if (
    q.quai_tu &&
    q.quai_tu !== "chưa cập nhật"
  ) {

    html += `
      <h3>Quái Từ</h3>

      <p>
        ${q.quai_tu}
      </p>
    `;
  }

  if (
    q.thoan_truyen &&
    q.thoan_truyen !== "chưa cập nhật"
  ) {

    html += `
      <h3>Thoán Truyện</h3>

      <p>
        ${q.thoan_truyen}
      </p>
    `;
  }

  if (
    q.tuong_truyen &&
    q.tuong_truyen !== "chưa cập nhật"
  ) {

    html += `
      <h3>Tượng Truyện</h3>

      <p>
        ${q.tuong_truyen}
      </p>
    `;
  }

  if (
    Array.isArray(q.hao) &&
    q.hao.length > 0
  ) {

    html += `
      <h3>Các Hào</h3>

      <ul>
    `;

    q.hao.forEach(item => {

      html += `
        <li>${item}</li>
      `;
    });

    html += `
      </ul>
    `;
  }

  html += `
    </div>
  `;

  document.getElementById("content")
    .innerHTML = html;
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
  Danh sách Quẻ Dịch
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

        ${String(item.id).padStart(2, "0")}. ${item.ten}

      </div>
    `;
  });

  html += `</div>`;

  document.getElementById("content")
    .innerHTML = html;
}

async function loadSearch() {

  const response =
    await fetch("./data/index.json");

  const list =
    await response.json();

  let html = `
    <div class="card">

      <h2>
        Tra cứu Quẻ Dịch
      </h2>

      <input
        type="text"
        id="searchInput"
        placeholder="Nhập tên quẻ..."
        style="
          width:100%;
          padding:10px;
          margin-bottom:12px;
        ">

      <div id="searchResults"></div>

    </div>
  `;

  document.getElementById("content")
    .innerHTML = html;

  const results =
    document.getElementById("searchResults");

  function renderResults(keyword = "") {

    const search =
      keyword.toLowerCase();

    let resultHtml = "";

    list.forEach(item => {

      if (
        item.ten.toLowerCase().includes(search)
      ) {

        const id =
          String(item.id).padStart(2, "0");

        resultHtml += `
          <div
            onclick="loadQue('${item.file}')"
            style="
              padding:10px;
              margin-bottom:8px;
              border:1px solid #ddd;
              border-radius:8px;
              cursor:pointer;
            ">

            ${id}. ${item.ten}

          </div>
        `;
      }

    });

    results.innerHTML =
      resultHtml;
  }

  renderResults();

  const input =
    document.getElementById("searchInput");

  input.addEventListener("input", () => {

    renderResults(input.value);

  });

}

loadMenu();

loadQue("001-kien.json");
