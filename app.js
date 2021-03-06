require('dotenv').config()
const shuffle_array = require('shuffle-array')
const { IgApiClient, IgCheckpointError } = require('./node_modules/instagram-private-api/dist/index.js')
const inquirer = require('inquirer')
const ig = new IgApiClient()

const config = require('./config.json')
var content = config['content']

if (config['shuffle'])
  shuffle_array(content)

ig.state.generateDevice(process.env.IG_USER)

const setBiography = (i) => {
  ig.account.setBiography(`${config['prefix']}${content[i]}${config['affix']}`)
  console.log(`${i} ${content[i]}`)
  if (i < content.length) i++
  else i = 0
}

ig.account
  .login(process.env.IG_USER, process.env.IG_PASS)
  .then(user => {
    var iterator = 0
    setBiography(iterator)
    setInterval(setBiography(iterator), config['interval'] * 3600000)
  }).catch(e => console.error(e))
  .catch(async (e) => {
    await ig.challenge.auto(true); // Requesting sms-code or click "It was me" button
    const { code } = await inquirer.prompt([
      {
        type: 'input',
        name: 'code',
        message: 'Enter code',
      },
    ]);
    console.log(await ig.challenge.sendSecurityCode(code));
  })
  .catch(e => console.error(e))
