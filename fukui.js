const url = "https://code4fukui.github.io/fukui-spot/fuku-e-spot.jsonld";
let data = null;

export const name2pic = async (name) => {
  if (!data) {
    data = await (await fetch(url)).json();
  }
  for (const d of data) {
    if (d.name == name) {
      return d.image;
    }
  }
  for (const d of data) {
    if (d.name.indexOf(name) >= 0) {
      return d.image;
    }
  }
  return null;
};
