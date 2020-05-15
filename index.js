const axios = require('axios')

async function getNos () {
  try {
    const website = await axios.get('http://qwerpoiuaslkjqweprouqw.kjsaldfjkerhwqj')
    console.log('website.data test:', website.data)
  } catch (abc) {
    console.log('inside', abc.message)
  }
}

async function getJokes () {
  const first = await axios.get('https://official-joke-api.appspot.com/random_joke')
  console.log('first.data test:', first.data)

  console.log('between')

  const second = await axios.get('https://official-joke-api.appspot.com/random_joke')
  console.log('second.data test:', second.data)
  // response.data === {
    // type: 'general',
    // setup: 'why did the chick cross the road',
    // punchline: 'to get to the other side'
  // }
}

async function getJokesAndNos () {
  try {
    await getJokes()
    console.log('a')
    console.log('whole')
    console.log('bunch')
    await getNos()
    console.log('some')
    console.log('afterwards')
  } catch (error) {
    console.log(error)
  }
}

console.log('before')
getJokesAndNos()
console.log('after')