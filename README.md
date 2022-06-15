# SystemJS example

## About

Test-driving SystemsJS import maps

## Api

This is a mock CDN serving static files

```
cd api
npm install
npm start
```

Open browser at [http://localhost:3000](http://localhost:3000) and then look at [ http://localhost:3000/import-map.json]( http://localhost:3000/import-map.json)

Have a look in the public folder to see available static files

All the files that form part of the import-map were built with Rollup, with output module type set to system. This is required for SystemJs to work.

## App

This is a small app using the CDN and itself serving static files

```
cd app
npm install
npm start
```

Open browser at [http://localhost:3001](http://localhost:3001)

Have a look in the public folder at index.html and my-app.js

my-app.js was built with Rollup and output module type set to iife.

Have a look at how my-app and the import map was added to index.html


### Project work

These are the files that the builds were made from. In each of the project files, I ran
```
npm run build
```

and then Rollup build the files and added it to a dist folder. The contents of the dist folder was then copied and psted into the static files in the public directories of Api and App


### Try this

- Install dependencies and start both the api and then the app
- Note the versions of the header and footer in the configuration http://localhost:3000/import-map.json
- Visit http://localhost:3001 and note the versions of the header and footer that matches the import map versions
- Open import-map from api and change the version of the header and change the version of header, footer or both to one of the versions available in the static files in public directory
- Refresh http://localhost:3001 and note that the version of the header/footer has changed to match what is inside the import map


### Note

[SystemsJS](https://github.com/systemjs/systemjs) has many more features and this example only uses a few of these in a limited way.

