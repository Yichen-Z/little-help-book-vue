# Little Help Book Draft Vue Site

This is an attempt to put together existing templates for the Little Help Book using the Vue framework.

## Overview

### Vue Components

Views and their parts:

* Home
* About
* Category
* Subcategory
* Terms

### Airtable

Order field has been removed
We may want a read-only account's key for general access (and the other is for admin access)
We may need a development database to manipulate

### Maps

If Airtable does not provide a lat/long, or if the lat/long appears as [0, 0], that means NO marker on the map.

## Project setup

First, download any dependencies by running this command in the terminal:

```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
