
export function calcConsts(limits, indent, width, height) {
  const {maxValueX, maxValueY, minValueX, minValueY} = limits;

  const rows = maxValueY - minValueY + 2;
  const cols = maxValueX - minValueX + 2;

  const cellWidth = Math.round(width / cols);
  const cellHeight = Math.round(height / rows);

  const startX = indent;
  const finishX = width - indent;
  const startY = indent;
  const finishY = height - indent;

  const firstX = startX - ((minValueX - 1) * cellWidth);
  const firstY = startY + ((maxValueY + 1) * cellHeight);

  const ordPos = firstX < indent
    ? indent
    : (firstX > width - indent ? width - indent : firstX);

  const absPos = firstY > height - indent
    ? height - indent
    : firstY;

  return {
    rows,
    cols,
    startX,
    finishX,
    startY,
    finishY,
    firstX,
    firstY,
    ordPos,
    absPos,
    cellWidth,
    cellHeight
  };
}

export function calcLimits(data) {
  let maxValueX = 0;
  let maxValueY = 0;
  let minValueX = 0;
  let minValueY = 0;

  data.forEach((item) => {
    item.rows.forEach((row) => {
      if (Math.round(row[0]) > maxValueX) {
        maxValueX = Math.round(row[0]);
      }

      if (Math.round(row[1]) > maxValueY) {
        maxValueY = Math.round(row[1]);
      }

      if (Math.round(row[0]) < minValueX) {
        minValueX = Math.round(row[0]);
      }

      if (Math.round(row[1]) < minValueY) {
        minValueY = Math.round(row[1]);
      }
    });
  });

  return {maxValueX, maxValueY, minValueX, minValueY};
}

