import os
from dotenv import load_dotenv
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import DeclarativeBase

load_dotenv() # load environmental values
# get dababase configs
DB_USERNAME=os.getenv('DB_USERNAME')
DB_PASSWORD=os.getenv('DB_PASSWORD')
DB_NAME=os.getenv('DB_NAME')
DB_URL=os.getenv('DB_URL')

db_config = f"mysql+pymysql://{DB_USERNAME}:{DB_PASSWORD}@{DB_URL}:3306/{DB_NAME}"

class Base(DeclarativeBase):
  pass

db = SQLAlchemy(model_class=Base) # instantiate SQLAlchemy Object 
