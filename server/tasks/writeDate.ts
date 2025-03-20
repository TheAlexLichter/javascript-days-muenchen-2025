export default defineTask({
  meta: {
    name: "writeDate",
    description: "Write the current date to a file",
  },
  async run() {
    const content = await useStorage("assets:server").getItem("date.txt") ?? "";
    const date = new Date().toISOString();
    const newContent = content + date + "\n";
    await useStorage("assets:server").setItem("date.txt", newContent)

    return { result: "Success" };
  },
});
