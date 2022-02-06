# first_API
Creating my first API with the Fireship example. https://youtu.be/-MTSQjw5DrM

Followed the great tutorial by Fireship at the link above, but used
Postman as my API tester instead which required some adjustment, for 
info on that see below.

# The Steps
Short description of what to do.
1. Create repo, installed npm and init to the repo, installed express
2. Created an index file with variables for app representing my API. Set the port to act out of and a few commands to prop this up.
3. Created some endpoints for basic interaction.
4. Rework existing 'app' setup to create middleware that would parse info as JSON, this is quite straightforward in Express.
5. Got a more complicated API call of POST up and running, can test this in postman.

# Postman instead of Insomnia
The steps covered in video show you selecting JSON for the body, for someone who's not used Postman before took a bit of digging to work out equivalent, which is as follows.
Go to the *Body* section, use *raw* as the input and write your JSON, change the dropdown on the right from default of *txt* to *JSON*.
If you get stuck on this just use the import function in postman using my file in the directory of this repo *postman_exports*.