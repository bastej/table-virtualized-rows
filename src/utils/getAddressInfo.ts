/**
 * It take address string as parameter: "ul. Jana Pawła 2 66-666, Kraków"
 *
 * and return object { street: "Jana Pawła 2", city: "Kraków" }
 */

export const getAddressInfo = (address: string) => {
  const regex = /ul\.\s*(.+?)\s+\d{2}-\d{3},\s*(.+)/;
  const match = address.match(regex);

  if (!match) {
    return { street: "", city: "" };
  }

  return {
    street: match[1].trim(),
    city: match[2].trim(),
  };
};

// TODO: write unit test
