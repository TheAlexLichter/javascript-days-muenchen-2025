export default defineCachedEventHandler(async (event) => {
  // Get & return recent jokes
  // TODO: Fix later ;)
  return useStorage('jokes').getItem<unknown[]>('jokes') ?? [] 
}, {
  swr: false,
  maxAge: 10
})