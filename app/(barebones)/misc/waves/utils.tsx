export type SearchParams = Partial<{
  m: number;
  n: number;
  angleDelay: number;
  rectangleWidth: number;
  rectangleHeight: number;
  xPhaseMultiplier: number;
  yPhaseMultiplier: number;
  animationDuration: number;
  gap: number;
  flipX: boolean;
  flipY: boolean;
}>;

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

const getRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

export function querify(params: SearchParams) {
  return Object.entries(params)
    .map(([k, v]) => `${k}=${v}`)
    .join("&");
}

export function randomizedParams() {
  return querify({
    m: getRandomInt(5, 20),
    n: getRandomInt(5, 20),
    angleDelay: getRandomFloat(0.1, 0.7),
    rectangleWidth: getRandomInt(1, 6),
    rectangleHeight: getRandomInt(15, 80),
    xPhaseMultiplier: getRandomInt(1, 15),
    yPhaseMultiplier: getRandomInt(1, 15),
    animationDuration: getRandomFloat(0.5, 3),
    flipX: Math.random() > 0.5,
    flipY: Math.random() > 0.5,
    gap: getRandomInt(10, 50),
  });
}
