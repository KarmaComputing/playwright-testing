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
## install dependecies for mobile and chrome 
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
