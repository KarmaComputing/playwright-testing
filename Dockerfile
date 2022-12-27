FROM mcr.microsoft.com/playwright:v1.29.1-focal
WORKDIR /ms-playwright-agent
RUN --mount=type=cache,target=/var/cache/apt \
  apt-get update && \
  apt-get install -y --no-install-recommends python3 python3-pip
COPY requirements.txt /tmp
RUN --mount=type=cache,target=/root/.cache \
  pip3 install -r /tmp/requirements.txt
RUN npx playwright install --with-deps
RUN npm install -D @playwright/test

RUN mkdir -p /src/app

COPY entrypoint.sh /ms-playwright/entrypoint.sh

ENTRYPOINT ["/ms-playwright/entrypoint.sh"]
