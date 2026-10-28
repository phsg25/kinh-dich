async function loadHexagram() {

  const response =
    await fetch("./data/001-kien.json");

  const data =
    await response.json();

  document.getElementById("content").innerHTML = `
    <div class="card">
      <h2>${data.ten}</h2>

      <p><strong>${data.han}</strong></p>

      <p>Tượng: ${data.tuong}</p>

      <p>Tính chất: ${data.tinh_chat}</p>

      <p>Ngũ hành: ${data.ngu_hanh}</p>
    </div>
  `;
}

loadHexagram();
