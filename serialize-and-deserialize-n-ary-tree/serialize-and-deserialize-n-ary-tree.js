function Node(val, children) {
  this.val = val;
  this.children = children;
}

class Codec {
  constructor() {}

  /**
   * @param {Node|null} root
   * @return {string}
   */

  serialize(root) {
    if (!root) return "";

    const result = [];

    const serializeNode = (node) => {
      if (!node) return;

      result.push(node.val.toString());

      if (node.children && node.children.length > 0) {
        result.push("[");
        for (const child of node.children) {
          serializeNode(child);
          result.push(",");
        }
        result.push("]");
      }
    };

    serializeNode(root);

    return result.join("");
  }

  /**
   * @param {string} data
   * @return {Node|null}
   */

  deserialize(data) {
    if (!data) return null;

    let index = 0;

    const deserializeNode = () => {
      if (index >= data.length) return null;

      let value = "";
      while (
        index < data.length &&
        data[index] !== "[" &&
        data[index] !== "," &&
        data[index] !== "]"
      ) {
        value += data[index];
        index++;
      }

      const node = new Node(parseInt(value, 10), []);

      if (index < data.length && data[index] === "[") {
        index++;

        while (data[index] !== "]") {
          const child = deserializeNode();
          if (child) {
            node.children.push(child);
          }

          if (data[index] === ",") {
            index++;
          }
        }

        index++;
      }

      return node;
    };

    return deserializeNode();
  }
}

// Your Codec object will be instantiated and called as such:
// const codec = new Codec();
// const rootNode = codec.deserialize(codec.serialize(root));
