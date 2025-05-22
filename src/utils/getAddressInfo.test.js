import { describe, expect, it } from "vitest";

import { getAddressInfo } from "./getAddressInfo";

describe("getAddressInfo", () => {
  it("should extract street and city from a valid address", () => {
    const address = "ul. Jana Pawła 2 66-666, Kraków";
    const result = getAddressInfo(address);

    expect(result).toEqual({
      street: "Jana Pawła 2",
      city: "Kraków",
    });
  });

  it("should extract data from another valid address", () => {
    const address = "ul. Mickiewicza 10 00-123, Warszawa";
    const result = getAddressInfo(address);

    expect(result).toEqual({
      street: "Mickiewicza 10",
      city: "Warszawa",
    });
  });

  it("should return empty strings for invalid format", () => {
    const address = "incorrect format address";
    const result = getAddressInfo(address);

    expect(result).toEqual({
      street: "",
      city: "",
    });
  });

  it("should trim extra spaces", () => {
    const address = "ul.  Nowowiejska 5 11-222,   Gdańsk ";
    const result = getAddressInfo(address);

    expect(result).toEqual({
      street: "Nowowiejska 5",
      city: "Gdańsk",
    });
  });
});
