import * as t from "https://deno.land/std/testing/asserts.ts";
import { name2pic } from "./fukui.js";

Deno.test("simple", async () => {
  t.assertEquals(await name2pic("東尋坊"), "https://www.fuku-e.com/lsc/upfile/spot/0000/1476/1476_2_l.jpg");
});
