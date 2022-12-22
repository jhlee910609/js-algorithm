function findById(id) {
  return document.getElementById(id);
}

function setPosition(ele, rect) {
  ele.style.left = (rect.x || 0) + "px";
  ele.style.top = (rect.y || 0) + "px";
  ele.style.width = (rect.w || 0) + "px";
  ele.style.height = (rect.h || 0) + "px";
}

window.onload = () => {
  const canvas = document.body;
  const dragEle = findById("dragging");
  const ADJUST_CURSOR_POS = 10;

  let mouse = { x: 0, y: 0 };
  let lastMouse = { x: 0, y: 0 };
  let isDragging = false;

  function setDragPosition(rect) {
    setPosition(dragEle, rect);
  }

  canvas.addEventListener("mousedown", (e) => {
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
    setDragPosition({});
    isDragging = true;
  });

  canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    const distanceX = mouse.x - lastMouse.x;
    const distanceY = mouse.y - lastMouse.y;
    const abs = Math.abs;

    if (isDragging) {
      setDragPosition({
        x: distanceX < 0 ? mouse.x : lastMouse.x,
        y: distanceY < 0 ? mouse.y : lastMouse.y,
        w: abs(distanceX) - ADJUST_CURSOR_POS,
        h: abs(distanceY) - ADJUST_CURSOR_POS,
      });
    }
  });

  canvas.addEventListener("mouseup", (e) => {
    isDragging = false;
  });
};
