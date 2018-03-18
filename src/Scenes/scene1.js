let direction = [];

export default function(s, p) {
  s.background(255, 175, 0);
  s.stroke(100, 0, 255);
  s.strokeWeight(1);
  s.noFill();

  const cells = 24;
  const grid = s.width / cells;

  let i;
  let j;
  for (i = 0; i <= cells; i++) {
    s.push();
    s.translate(grid * i, 0);
    for (j = 0; j <= cells; j++) {
      s.push();

      if (p.frameCount === 1) {
        direction.push(p.random([0, 1]));
      } else if (p.frameCount % 60 === 0) {
        direction = []
        let g 
        for(g = 0; g <= (i * j); g++){
          direction.push(p.random([0, 1]));
        }
      }

      s.translate(0, grid * j)

      if (direction[i * j] === 0) {
        s.line(0, 0, grid, grid);
      } else if (direction[i * j] === 1) {
        s.line(0, grid, grid, 0);
      }

      s.pop();
    }
    s.pop();
  }

  // s.line(grid * 0, grid * 0, grid * 1, grid * 1)
  // s.line(grid * 1, grid * 0, grid * 2, grid * 1)
  // s.line(grid * 0, grid * 1, grid * 1, grid * 2)
  // s.line(grid * 1, grid * 1, grid * 2, grid * 2)

  // s.line(grid * 2, grid * 0, grid * 3, grid * 1)
  // s.line(grid * 3, grid * 0, grid * 4, grid * 1)
  // s.line(grid * 3, grid * 1, grid * 4, grid * 2)
  // s.line(grid * 2, grid * 1, grid * 3, grid * 2)

  // s.line(grid * 0, grid * 2, grid * 1, grid * 3)
  // s.line(grid * 1, grid * 2, grid * 2, grid * 3)
  // s.line(grid * 0, grid * 3, grid * 1, grid * 4)
  // s.line(grid * 1, grid * 3, grid * 2, grid * 4)

  // s.line(grid * 2, grid * 2, grid * 3, grid * 3)
  // s.line(grid * 3, grid * 2, grid * 4, grid * 3)
  // s.line(grid * 3, grid * 3, grid * 4, grid * 4)
  // s.line(grid * 2, grid * 3, grid * 3, grid * 4)
}
