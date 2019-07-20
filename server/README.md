## DB Stuff
* Reset db w/migrations/seeds: `./reset-knex.sh`
* Make a migration (knex does not order seed files for some reason, despite doing that for migrations?): 
`knex seed:make $(date +%s)_{table_name}`