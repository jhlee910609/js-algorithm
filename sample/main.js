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
    start.x = e.clientX;
    start.y = e.clientY;
    setDragPosition(start);
  });

  app.addEventListener("mousemove", (e) => {
    if (!isDragging) return false;

    const diffX = e.clientX - start.x;
    const diffY = e.clientY - start.y;

    if (diffX < 0) {
      const temp = start.x;
      start.x = e.clientX;
      end.x = temp;
    } else {
      end.x = e.clientX;
    }

    if (diffY < 0) {
      const temp = start.y;
      start.y = e.clientY;
      end.y = temp;
    } else {
      end.y = e.clientY;
    }

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
