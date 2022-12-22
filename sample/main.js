window.onload = () => {
  const canvas = document.body;
  const DRAGGING_ID = "dragging";
  const dragEle = findById(DRAGGING_ID);

  let mouse = { x: 0, y: 0 };
  let lastMouse = { x: 0, y: 0 };
  let isDragging = false;

  function findById(id) {
    return document.getElementById(id);
  }

  function setPosition(ele, rect) {
    ele.style.left = (rect.x || 0) + "px";
    ele.style.top = (rect.y || 0) + "px";
    ele.style.width = (rect.w || 0) + "px";
    ele.style.height = (rect.h || 0) + "px";
  }

  function setDragPosition(rect) {
    setPosition(dragEle, rect);
  }

  canvas.addEventListener("mousedown", (e) => {
    lastMouse.x = e.clientX;
    lastMouse.y = e.clientY;
    isDragging = true;
  });

  canvas.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    if (isDragging) {
      setDragPosition({
        x: mouse.x - lastMouse.x < 0 ? mouse.x : lastMouse.x,
        y: mouse.y - lastMouse.y < 0 ? mouse.y : lastMouse.y,
        w: Math.abs(mouse.x - lastMouse.x),
        h: Math.abs(mouse.y - lastMouse.y),
      });
    }
  });

  canvas.addEventListener("mouseup", (e) => {
    isDragging = false;
  });
};
