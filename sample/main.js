window.onload = () => {
  const app = document.body;
  const DRAGGING_ID = "dragging";
  const dragEle = findById(DRAGGING_ID);

  let start = { x: 0, y: 0, w: 0, h: 0 };
  let end = { x: 0, y: 0, w: 0, h: 0 };
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

  app.addEventListener("mousedown", (e) => {
    isDragging = true;
    start.x = e.x;
    start.y = e.y;
    setDragPosition(start);
  });

  app.addEventListener("mousemove", (e) => {
    if (!isDragging) return false;
    end.x = e.x;
    end.y = e.y;
    const abs = Math.abs;
    setDragPosition({
      ...start,
      w: abs(end.x - start.x),
      h: abs(end.y - start.y),
    });
  });

  app.addEventListener("mouseup", (e) => {
    isDragging = false;
    start = {};
    end = {};
    setDragPosition(start);
  });
};
