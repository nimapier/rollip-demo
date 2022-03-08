import { sayHello } from "./modules/myModule";
// import _ from "lodash";
import theAnswer from "the-answer";
import { version } from "../oo.json";
console.log("version" + version);
console.log("the answer is " + theAnswer);
sayHello("hhh");
const a = function () {
  sayHello("asd");
};
export { a };
