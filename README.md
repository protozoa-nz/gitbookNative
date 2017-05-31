# gitbookNative

> Build a gitbook into a react native app! 

## Set up

### Install dependencies
```sh
  npm install
```

### Install react-native
```sh
  npm install -g react-native
```

### Link in your book folder:

```sh
cd book
ln -s ../../<my-gitbook-folder> ./src
```

### Build your book:
```sh
npm run book:build
```

## Do the usual react-native things:
In one terminal:
```sh
npm start
```
In another:
```sh
react-native run-android
```

## Caveats
Links in your book must be relative to the base path of your book

### License

MIT

