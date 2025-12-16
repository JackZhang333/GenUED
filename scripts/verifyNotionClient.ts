import { Client } from "@notionhq/client";

const notion = new Client({
    auth: "secret_dummy",
});

console.log("Checking notion client keys:");
console.log(Object.keys(notion));
console.log("Has dataSources?", "dataSources" in notion);
// Check prototype as well as it might be a getter
console.log("Prototype keys:", Object.getOwnPropertyNames(Object.getPrototypeOf(notion)));

try {
    // @ts-ignore
    console.log("notion.dataSources:", notion.dataSources);
} catch (e) {
    console.error(e);
}
