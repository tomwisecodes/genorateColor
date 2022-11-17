import tinycolor from "tinycolor2";

const useContrast = (color1: string, color2: string) => {
  let contrast: [boolean, boolean, boolean, number] = [false, false, false, 0];
  const ratio = tinycolor.readability(color1, color2);
  contrast[3] = ratio;
  if (ratio >= 3) {
    contrast[0] = true;
  }
  if (ratio >= 4.5) {
    contrast[1] = true;
  }
  if (ratio >= 7) {
    contrast[2] = true;
  }
  return contrast;
};
export default useContrast;
