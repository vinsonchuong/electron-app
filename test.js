import test from 'ava'
import puppeteer from 'puppeteer'

test('it works', async t => {
  const browser = await puppeteer.launch({
    executablePath: './node_modules/.bin/electron',
    args: ['.']
  })

  const [tab] = await browser.pages()

  t.is(
    await tab.$eval('#container', el => el.textContent),
    'Hello World!'
  )
})
