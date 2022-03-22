const directions = ["E", "W", "N", "S"];
const movingDirections = ["R", "L"];

export const calculatePosition = (dir, curX, curY) => {
  let x = curX;
  let y = curY;
  switch (dir) {
    case "N":
      y = String(Number(curY) + 1);
      break;
    case "S":
      y = String(Number(curY) - 1);
      break;
    case "E":
      x = String(Number(curX) + 1);
      break;
    case "W":
      x = String(Number(curX) - 1);
      break;
    default:
      console.log("nothing");
  }
  return { direction: dir, currentX: x, currentY: y };
};

export const getNewDirection = (direction, movement) => {
  let dir = direction;
  switch (direction) {
    case "N":
      dir = movement === "R" ? "E" : "W";
      break;
    case "S":
      dir = movement === "R" ? "W" : "E";
      break;
    case "E":
      dir = movement === "R" ? "S" : "N";
      break;
    case "W":
      dir = movement === "R" ? "N" : "S";
      break;
    default:
      console.log("Default scenario");
  }
  return dir;
};

export const getPosition = (instruction) => {
  let length = instruction.length;
  let direction;
  let instructions = [];
  let i = 0;
  while (instruction.charAt(i) !== "Q" && i < length) {
    if (!isNaN(instruction.substring(i, i + 2))) {
      instructions.push(instruction.substring(i, i + 2));
      i += 2;
    } else {
      instructions.push(instruction.substring(i, i + 1));
      i++;
    }
  }
  let currentX = instructions[1].charAt(0);
  let currentY = instructions[1].charAt(1);
  for (let j = 2; j < instructions.length; j++) {
    if (!instructions[j].startsWith("Q")) {
      if (directions.includes(instructions[j].charAt(0))) {
        direction = instructions[j].charAt(0);
      } else if (instructions[j].endsWith("M")) {
        switch (direction) {
          case "N":
            ({ currentY } = calculatePosition(direction, currentX, currentY));
            break;
          case "S":
            ({ currentY } = calculatePosition(direction, currentX, currentY));
            break;
          case "E":
            ({ currentX } = calculatePosition(direction, currentX, currentY));
            break;
          case "W":
            ({ currentX } = calculatePosition(direction, currentX, currentY));
            break;
          default:
            console.log("nothing");
        }
      } else if (movingDirections.includes(instructions[j].charAt(0))) {
        let movement = instructions[j].charAt(0);
        direction = getNewDirection(direction, movement);
      }
    }
  }
  return currentX + " " + currentY + " " + direction;
};
