# `AssertionError` with `refs.runnerChain`

Demonstrate `ava` error when using globally installed `ava@4.x`. The `npx` and `npm test` version do not error. Using node `16.15.1` and npm `8.13.1`


```shell
$ ava --version
4.3.0

$ nvm use 16
Now using node v16.15.1 (npm v8.13.1)
```

Error from test:

```shell
$ ava test.js

  Uncaught exception in test.js

  AssertionError [ERR_ASSERTION]: The expression evaluated to a falsy value:

    assert(refs.runnerChain)


  ✖ test.js exited with a non-zero exit code: 1
  ─

  1 uncaught exception
```


No error when using `npx ava`:

```shell
$ npx ava test.js

  ✔ sync test
  ✔ async test
  ─

  2 tests passed
```

No error when using `npm test`, which is `ava test.js` (see [package.json](./package.json) file):

```shell
$ npm run

  ✔ sync test
  ✔ async test
  ─

  2 tests passed
```