# AngularLaravelTryout

This project is an example for Angular and Laravel relation via JWT. For this case, we use IP management as an example, you can create and edit Ip address and its comment. You can also do register user, login, and update the ip address if you are logged in.

## Instalation Front End

To Install this project, you need NPM, angular CLI, composer, and Laravel 8 ready. I used XAMPP for the LAMP stack. Download this project via clone or download zip. 
For the front-end, go to angular-front and run the angular. use this command below.
```bash
ng serve
```

then access it from your browser from here.
```bash
localhost:4200 
```

## Installation Back End

For the laravel backend, first copy create an ```.env``` file, or you can copy it from ```.env.example```. prepare the database for the mysql, name it accordingly. 

open another cli, run update to istall all vendor required.
```bash
composer update
```

add key laravel app and jwt.
```bash
php artisan key:generate
php artisan jwt:secret
```

run the api service
```bash
php artisan serve
```

For your consideration, the API is set statically, so laravel backend must run on port 8000.

## Usage

Open your browser, direct it to ``` localhost:4200 ```, you can add IP, but need to be logged in to edit it. 