# Covergo Home Exercise
This project is built by nuxt3

## 1. Project structure

## 1.1. assets

Inside of this directory, define the global `scss` to be compiled into css used in this project.  

- `_variables.scss` - define the scss variables used in this project  
- `global.scss` - define global styles of the project. for example `<html>, <body> <input>, <select>, <button>` styles.

## 1.2. components
Inside of this directory, define the vue components used in this project. 

## 1.3. layouts
Inside of this directory, define the layout of the webpage. Just define `default.vue` as a layout.

## 1.4. constants
Inside of this directory, define the constants used in this project. that is `countries`, `currencies`, `packages` variables and `calculatePremium` function to be shown in `Page 2`, `Page 3`

## 1.5. pages
Inside of this directory, implement the web pages


### index.vue (Page 1)
Implementation of `Page 1` that is `welcome screen`  
URL: `/`

### input.vue (Page 2)
Implment of `Page 2` that is `input`  
URL: `/input`

### error.vue (Page 2)
Implment of `Page 2` that is `age-error`  
URL `/error`


### summary.vue (Page 3)
Implment of `Page 3` that is `summary`  
URL: `/summary`

## 1.1.5. tests
Inside of this directory, implemented the playwright test that works as expected.
- playwright.spec.ts: in this file, implemented all test cases of the project.

## 2. Project URL
This home exercise is deployed into  
https://covergo-home-exercise.herokuapp.com/