window.onload = () => {
  const app = document.body;
  let start = { x: 0, y: 0 };
  let end = { x: 0, y: 0 };
  let isDragging = false;

  function makeRect(rect) {
    const rectDiv = document.createElement("div");
    rectDiv.style.x = rect.x + "px";
    rectDiv.style.y = rect.y + "px";
    return rectDiv;
  }
  app.addEventListener("mousedown", (e) => {
    isDragging = true;
    start.x = e.clientX;
    start.y = e.clientY;
    app.appendChild(makeRect(start));
  });
  app.addEventListener("mouseup", (e) => {
    isDragging = false;
    start = {};
    end = {};
  });

  app.addEventListener("mousemove", (e) => {
    if (!isDragging) return false;
    end.x = e.clientX;
    end.y = e.clientY;
    console.log(end.x - start.x, end.y - start.y);
  });
};
