const container = document.querySelector("#container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);

  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.style.setProperty('--color', 'blue');
    container.appendChild(cell).className = "grid-item";
  };
  cell_clicks();
  cell_color();
};