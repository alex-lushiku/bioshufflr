# Bioshufflr

Bioshufflr is a program that periodically updates your Instagram biography.

## Setup

1. Open `config.json` and replace the default values with yours:
```javascript
{
  "username": "yourusername",
  "password": "yourpassword",
  "name": "Your Name",
  "prefix": "",
  "affix": "",
  "interval": 1,
  "shuffle": true,
  "content": [
    "example phrase one",
    "example phrase two"
  ]
}
```
 * `username` is your Instagram username.
 * `password` is it's corresponding password.
 * `name` is the bold name above your biography.
 * `prefix` is a piece of text that is always displayed before your content.
 * `affix` is a piece of text that is always displayed after your content.
 * `interval` is the interval between updates __in hours__ to prevent exceedance of Instagram's API rate limit of 200 requests per hour.
 * `shuffle` determines whether the content should be shuffled or displayed in order of input.
 * `content` is an array containing your biographies Bioshufflr should iterate through.

**NOTE:** Don't forget to add `\n` after your prefix or before your affix if you want to insert a new line. Same goes for `\"` If you want to insert quotes.

2. Run `npm install` to install all corresponding packages.

## Usage

You can run Bioshufflr by running `node app` in the command line. Just make sure you are in the project's root directory.

If you want to run the process forever, you could host the application on a VPS like on [DigitalOcean](https://digitalocean.com/) or a Node.js host like [Heroku](https://heroku.com/). You could also use a node package called [forever](https://npmjs.org/package/forever), but you would have to leave your computer on for that approach to work.

## License

[MIT](LICENSE)
