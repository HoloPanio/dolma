<h1 align=center>
Kefler Token Transcoder<br>
<img src="https://img.shields.io/npm/v/kefler?style=for-the-badge">
</h1>
This is a token transcoder that is used to encode and decode DogeHouse chat message token arrays.  This package is written for bot/bot library devlopers to be able to easily transcode dogehouse chat message tokens.  

## How to install
To install this, simply go to your project and run the following command:
```cmd
npm install kefler@lates --save
```

## How to use
This will show you how to encode and decode tokens

### Encoding Tokens
In this example, you will see multiple ways to encode your tokens.  The first one is in plain text.  You can pass any string into the encoder and it will convert it into an array of Message Tokens.

```ts
import { kefler } from 'kefler';

const str = "I'm @HoloPanio, and I'd like to goto `Paris, France` one day :catJAM: Also, https://google.com is epic!";

const tokens = kefler.encode(str);

console.log(tokens);

/**
 * Returns: 
 * 
 */



```