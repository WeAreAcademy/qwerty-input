import { isInputStrong } from "./isInputStrong";

test("isInputStrong returns true when all conditions are met", () => {
  expect(isInputStrong("aaaaa")).toBe(false); // too short
  expect(isInputStrong("")).toBe(false); // empty string, too short
  expect(isInputStrong("aaaaaaaa")).toBe(false); // long enough but no caps
  expect(isInputStrong("AAAAAAAA")).toBe(false); // long enough but no lowercase
  expect(isInputStrong("AAAAAAaa")).toBe(false); // long enough, caps, lowercase but no specials
  expect(isInputStrong("AAAAAAaa")).toBe(false); // long enough, caps, lowercase but no specials
  expect(isInputStrong("AAAAAAaa~~")).toBe(false); // long enough, caps, lowercase but no CHOSEN specials
  expect(isInputStrong("AAAAAAaa!")).toBe(true); // meets all criteria
});
