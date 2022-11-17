import tinycolor from "tinycolor2";

function useMonoChromatic(color: string, number: number) {
  const mono = tinycolor(color, number).monochromatic();

  function colorArrayToHTML(arr) {
    const hexStringArry: string[] = [];
    arr.map((e) => {
      hexStringArry.push(e.toHexString());
    });
    return hexStringArry;
  }
  return colorArrayToHTML(mono);
}

export default useMonoChromatic;
