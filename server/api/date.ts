export default defineCachedEventHandler(async (event) => new Date(), {
  swr: true,
  maxAge: 5,
  staleMaxAge: 60,
})