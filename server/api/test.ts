export default defineEventHandler(async (event) => {
  await runTask('writeDate')
  return 1
})