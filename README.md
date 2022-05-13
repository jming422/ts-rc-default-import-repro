# ts-rc-default-import-repro

This branch has an error which `main` does not, and I'm trying to figure out why

The error I see when running `tsc` is:
```
index.ts:5:18 - error TS2349: This expression is not callable.
  Type 'typeof import("/Users/jming/Documents/tsrepro/firsttry/node_modules/snakecase-keys/index")' has no call signatures.

5   const snaked = snake(foo);
                   ~~~~~


Found 1 error in index.ts:5
```

But doing either of these two things makes the error go away:
 - In `index.js`: Change `import snake from "snakecase-keys";` to `import { default as snake } from "snakecase-keys";`
 - In `tsconfig.json`: Change `"module": "node16"` to `"module": "es2022", "moduleResolution": "node"` (this is committed to branch `main` in this repo)

Why? If snakecase-keys's types are wrong, then why are they only wrong when `module` is `node16`? If they aren't wrong, then why am I getting an error, even though in all the cases above the emitted JS file has the same runtime behavior?
