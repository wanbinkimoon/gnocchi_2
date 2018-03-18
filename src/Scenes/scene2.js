export default (s, p) => {
  s.colorMode(p.HSB)

  const space = 4
  const move = p.frameCount * space
  const side = s.width
  s.stroke(move * 2, 100, 100);

  s.line(0, move, move, move)
  s.line(move, 0, move, move)

  s.line(side, side - move, side - move, side - move)
  s.line(side - move, side, side - move, side - move)
  s.line(side, 0, side - move, side - move)
  s.line(side, side, side - move, side - move)

  console.log(side - move, side, side - move, side - move)
  
  // s.line(move, 0, move, move)
  // s.line(move, move, 0, side)

};
