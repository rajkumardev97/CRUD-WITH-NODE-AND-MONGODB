#CRUD APP

#Node Version: v18.20.5
#NPM Version: 10.8.2

MIGRATIONS CMDS:

#Migration Setup and Run Steps
>npm install migrate-mongo --save-dev
>npx migrate-mongo init

This will create folder and config of it:

migrations/
  |- example-migration.js  // Example migration file
migrate-mongo-config.js     

#Create a New Migration
>npx migrate-mongo create add-new-field

This will create a file in the migrations directory, named something like:
migrations/20241130123456-add-new-field.js

#Run the Migration
>npx migrate-mongo up

Migrate-Mongo: Migrating 20241130123456-add-new-field.js...
Migrate-Mongo: Successfully migrated 20241130123456-add-new-field.js

#Check Migration Status
>npx migrate-mongo status

Applied migrations:
 - 20241130123456-add-new-field.js

#Rollback a Migration (This will execute the down method in the last migration file.)
>npx migrate-mongo down
