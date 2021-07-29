# playwright-testing

## install venv 
```
python3 -m venv venv
```
## activate venv 
```
. venv/bin/activate
```
## install playwright test
```
npm i -D @playwright/test
```
## install playwright browser library
```
npx playwright install
```
## install dependecies for mobile and chrome (if needed)
![photo1627599310](https://user-images.githubusercontent.com/1718624/127575815-62dfc7e3-5e65-4000-a0dc-11d599322ba2.jpeg)
```
sudo npx playwright install-deps 
```

# How to run the test
## running the test without a browser
```
npx playwright test
```
## running the test with browser
```
npx playwright test --headed
```
## running the test with debugger
```
PWDEBUG=1 npx playwright test
```
# Issues 

When running the first time you will see the following error: 
```
Error: ../playwright/tests/foo.spec.js-snapshots/playwright-Mobile-Safari-linux.png is missing in snapshots, writing actual.
```
it will mean that it will create the screenshot file for the first time.

To update the screenshots run: 
```
npx playwright test --update-snapshots
```

