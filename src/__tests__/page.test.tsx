import { render } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "../app/page";

test("Page", () => {
  render(<Page />);
  expect(true).toBe(true);
});
