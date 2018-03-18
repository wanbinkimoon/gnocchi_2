// export default class Grid {
//   constructor(p, position, radius) {
//     this.state = {
//       p: p,
//       radius: radius,
//       position: {
//         x: position.x,
//         y: position.y,
//       },
//     };
//   }

//   get draw() {
//     return this.grid();
//   }

//   circles() {
//     return this.state.p.ellipse(this.state.position.x, this.state.position.y, this.state.radius, this.state.radius);
//   }
// }


export default function (s, p){
  s.background(255, 175, 0)
  s.stroke(100, 0, 255)
  s.strokeWeight(1)
  s.noFill()
  

  const cells = 24
  const grid = s.width / cells

  let i;
  let j;
  for(i = 0; i <= cells; i++){
    s.push()
    s.translate(grid * i, 0)
    for(j = 0; j <= cells; j++){
        s.push()
        s.translate(0, grid * j)
        s.line(0, 0, grid, grid)
        s.pop()
      }
    s.pop()
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
