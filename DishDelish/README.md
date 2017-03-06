# DishDelish
CS125 Next Generation Search Engine Project: An Angular Web Application for Local Popular Dishes

The following instructions are for Mac/Linux environments, change it accordingly for Windows
##Setting up development environment
If you don't have NodeJS and npm installed on your machine, download and install them from https://nodejs.org/en/download/

If you already have them, make sure NodeJS version is above 6.9.x and npm version is aboce 3.x.x by running the following commands in terminal

```
node -v
npm -v
```

Install Angular CLI

```
npm install -g @angular/cli
```

use `sudo` if you run into any permission errors

Install typings and typescript

```
npm install -g  typings
npm install -g typescript
```

Install the AngularFire library for accessing Firebase with Angular

```
npm install angularfire2 firebase --save
```

##Serving the application
In terminal, `cd` to `path_to_your_cloned_repo/dish-delish/DishDelish`, make sure you are in under `DishDelish` not `dish-delish` since the former is the root folder of the application.

Run the command  `ng serve --open`. See that it opens a new browser page and displays contents correctly.
