## Setup
Create a virtual environment with:

#### `python -m venv env`
then activate it with: 
#### `source env/bin/activate`

Install the dependencies with:
#### `pip install -r requirements.txt`

## Start Django 
To start the Django server:
#### `python manage.py runserver`

## Reset Database
Delete the `db.sqlite3` and all files inside of `data/migrations` then run 
#### `python manage.py makemigrations data` and `python manage.py migrate`
Create a super user afterwards to access the admin pannel

## Load test data
Run the command 
#### `python manage.py loaddata testdata.json`