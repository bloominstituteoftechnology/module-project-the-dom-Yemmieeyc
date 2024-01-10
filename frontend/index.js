//const { adverbs, nouns } = require("./data")

function moduleProject1() {
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👇 WORK WORK BELOW THIS LINE 👇

  // 👉 TASK 1 - Add a "widget" class name to widgets so CSS kicks in
  //  ✨ add your code here
  const addWidgets = document.querySelectorAll('section>div')
   addWidgets.forEach(addWidget => {
    addWidget.classList.add('widget')
   })
  

  // 👉 TASK 2 - Build a "Quote of the Day" widget
  //  ✨ add your code here
  const randomIdx = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIdx]
  const quote = document.createElement('div')
  const quoteText = randomQuote.quote
  quote.textContent = quoteText
  const widget1 = document.querySelector('.quoteoftheday')
  widget1.appendChild(quote)

  const authorDate = document.createElement('div')
  const {author, date} = randomQuote
  authorDate.textContent = `${author} in ${date || 'an unknown date'}`
  widget1.appendChild(authorDate)


  // 👉 TASK 3 - Build a "Corporate Speak" widget
  //  ✨ add your code here
  const randomVerb1 = verbs[Math.floor(Math.random() * verbs.length)]
  const randomVerb2 = verbs[Math.floor(Math.random() * verbs.length)]

  const randomAdverb1 = adverbs[Math.floor(Math.random() * adverbs.length)]
  const randomAdverb2 = adverbs[Math.floor(Math.random() * adverbs.length)]

  const randomNouns1 = nouns[Math.floor(Math.random() * nouns.length)]
  const randomNouns2 = nouns[Math.floor(Math.random() * nouns.length)]

  
  const sentence = `We need to ${randomVerb1} our ${randomNouns1} ${randomAdverb1} in order to ${randomVerb2} our ${randomNouns2} ${randomAdverb2}.`
  const para = document.createElement('p')
  para.textContent = sentence
  document.querySelector('.corporatespeak').appendChild(para)

  
  
  

  // 👉 TASK 4 - Build a "Countdown" widget
  //  ✨ add your code here
  const countDownWid = document.querySelector('.countdown')
  let count = 5
  const countdown = document.createElement('p')
  countdown.textContent = `T-minus ${count}...`
  countDownWid.appendChild(countdown)

  const id = setInterval(() => {
    if(count === 1){
      countdown.textContent = 'Liftoff! 🚀'
      clearInterval(id)
    } else{
      countdown.textContent = `T-minus ${--count}...`
    }
  }, 1000)

  // 👉 TASK 5 - Build a "Friends" widget
  //  ✨ add your code here

  // 👉 TASK 6 - Make it so user can tab through the widgets
  //  ✨ add your code here

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
// ❗ DO NOT WORK BELOW THIS LINE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject1 }
else moduleProject1()
