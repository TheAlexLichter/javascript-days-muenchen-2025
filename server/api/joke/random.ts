type Joke = {
  id: string,
  joke: string,
  status: 200,
}

export default defineEventHandler(async (event) => {
  const joke = await $fetch<Joke>('https://icanhazdadjoke.com/', {
    headers: {
      accept: 'application/json',
      'user-agent': 'JSDays München 2025 test'
    }
  })

  // save joke to "list" somewhere
  // 10 maximum
  const KEY = 'jokes'
  const jokes = await useStorage('jokes').getItem<Joke[]>(KEY) ?? []
  jokes.push(joke)
  if (jokes.length > 10) {
    jokes.shift()
  }
  await useStorage('jokes').setItem(KEY, jokes)

  return joke
})