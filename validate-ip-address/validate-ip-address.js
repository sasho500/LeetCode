/**
 * @param {string} queryIP
 * @return {string}
 */
var validIPAddress = function (queryIP) {
  const isIPv4 = (ip) => {
    const parts = ip.split(".");
    if (parts.length !== 4) return false;

    for (const part of parts) {
      if (
        !/^\d+$/.test(part) ||
        part < 0 ||
        part > 255 ||
        (part[0] === "0" && part.length > 1)
      ) {
        return false;
      }
    }

    return true;
  };

  const isIPv6 = (ip) => {
    const parts = ip.split(":");
    if (parts.length !== 8) return false;

    for (const part of parts) {
      if (!/^[0-9A-Fa-f]+$/.test(part) || part.length < 1 || part.length > 4) {
        return false;
      }
    }

    return true;
  };

  if (queryIP.includes(".")) {
    return isIPv4(queryIP) ? "IPv4" : "Neither";
  } else if (queryIP.includes(":")) {
    return isIPv6(queryIP) ? "IPv6" : "Neither";
  }

  return "Neither";
};

console.log(validIPAddress("172.16.254.1"));
console.log(validIPAddress("2001:0db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("256.256.256.256"));
