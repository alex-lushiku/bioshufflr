# Bioshufflr

Bioshufflr is a program that periodically updates your Instagram biography.

## Setup

1. Open `config.json` and customize the default values:
```javascript
{
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
Property | Description
 :--- | :---
 `prefix` | Text which will be displayed before your content*
 `affix` | Text which will be displayed after your content*
 `interval` | Hourly interval between update**
 `shuffle` | determines whether the content should be shuffled or displayed in order of input.
 `content` | is an array containing your biographies Bioshufflr should iterate through.

__*__ Don't forget to add `\n` after your prefix or before your affix if you want to insert a new line. Use `\"` if you want to insert quotes.
__**__ Instagram's API has a rate limit of 200 requests per hour

2. Run `npm i` to install all corresponding packages.
3. (Optional) Create a new file in the root directory called `.env` and add your credentials:
```
IG_USER=username
IG_PASS=password
```

## Usage

You can run Bioshufflr by running `node app` in the root directory. If you've skipped step 3 run `IG_USER=yourusername IG_PASS=yourpassword node app`

If you want to run the process forever, you could host the application on a VPS like on [DigitalOcean](https://digitalocean.com/) or a Node.js host like [Heroku](https://heroku.com/). You could also use a node package called [forever](https://npmjs.org/package/forever), but you would have to leave your computer on for that approach to work.

## License

[MIT](LICENSE)
