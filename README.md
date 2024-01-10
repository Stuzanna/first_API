# first_API
Creating my first API following the [Fireship example](https://youtu.be/-MTSQjw5DrM).

This app was largely based on the Fireship tutorial, but interactions done using
Postman instead. This required some adjustment as detailed below.

# The Steps

## Initiliase and environment

1. Create a blank repo, install npm and `npm init -y` to the repo
1. Install express with `npm install express`

## Create the app

1. Create an index file, `index.js`, with variables for app representing my API
1. Set the port to act out of, and a few commands to prop this up. There are several long comments walking through some of the code
1. Created some endpoints for basic interaction
1. Rework existing 'app' setup to create middleware that would parse info as JSON, this is quite straightforward using Express
1. Extend the t-shirt example used for a more full API POST call

## Run the app

`node .` in the directory with `index.js`.

# Postman instead of Insomnia
The steps covered in the video tutorial show you selecting JSON for the body, it's slightly different in Postman, a possible issue.
Go to the *Body* section, use *raw* as the input and write your JSON, change the dropdown on the right from default of *txt* to *JSON*.
For this example you can also just import my example left in this repo.