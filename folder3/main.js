// Importing named exports
import { add, subtract, PI } from "./mathUtils.js";

import * as jadoo from "./mathUtils.js";

// Importing default export
import multiply from "./mathUtils.js";

export { add, subtract, PI, multiply };
console.log("Add: ", jadoo.add(5, 3));
console.log("Subtract: ", jadoo.subtract(5, 3));
console.log("PI: ", jadoo.PI);
console.log("Multiply: ", multiply(5, 3));