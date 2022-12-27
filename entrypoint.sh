#!/bin/bash

set -x
cp /src/app/playwright.config.ts ./

time npx playwright test
