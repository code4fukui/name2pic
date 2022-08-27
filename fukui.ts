const url = "https://code4fukui.github.io/fukui-spot/fuku-e-spot.jsonld";
let data: any = null;

export async function name2pic(name: string): Promise<string | null> {
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
