1- Create virtual env and activate it. 
        1-1- python -m virtualenv .env 
        1-2- source env\bin\activate (unix terminal) .env\Scripts\activate.bat (windows command prompt)


2- Install Django and other necessary libraries
    * djoser (a library for authentication and tokens)
    * django-rest-framework (for building our api)
    * django-cors-headers (a library for handling server headers Cross-Origin Resource Sharing)


3- Create a new django project (preferably outside env folder and call it backend)
4- Configure cors and restframework in the settings.py
5- Add djoser urls to main urls.py file


6- Install vue cli 
7- Create a new vue project and call it frontend 
8- Install axios (library for talking with backend)
9- Install Bulma