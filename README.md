# get started

`pnpm install`

# run tests

- open test runner window: `pnpx cpyress open`
- run all tests: `pnpx cypress run`
- run specific test: `pnpx cypress run spec "path/to/test"`

# Tasks

## Setup for task

- Clone this project `https://gitlab.tradebyte.org/trainees/projects/tbeverage`
- Fill copy the .sample.env to .env and fill it
    - example:
        PHP_APACHE_PORT=8087
        MYSQL_ROOT_PASSWORD=superduperdankeschoen
        MYSQL_DATABASE=tbeverage_dev
        MYSQL_USER=tbeverage_dev
        MYSQL_PASSWORD=development245
        PMA_PORT=8089
        SMTP_USER=AKIAULAF23FVRXH7OJJH
        SMTP_PASSWORD=BP4/palKJs37HJoqhnzUrJwy/cO/RwjfOqyoJ0cGdOrG
        ENV_PROD=false
        TO_MAIL=---yourEmail---@tradebyte.com
        CC_MAIL=---yourEmail---@tradebyte.com

- Run the command:
    - `make`
        - missing dependencies?
            ```
                sudo apt update && sudo apt install wget php-cli php-zip unzip curl12
                curl -sS https://getcomposer.org/installer -o /tmp/composer-setup.php
                sudo php /tmp/composer-setup.php --install-dir=/usr/local/bin --filename=composer
            ```
        - Try again, hopefully this time it works
    - `make up`
- Login
    - usertname: test 
    - pw: test9

## tasks

- Test the login
- Test if you can order something, it should appear on the order page.
- Test when you disabling a beverage, that it does not appear on the /beverage page
