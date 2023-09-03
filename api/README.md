`createdb codeProblems`
`psql -d codeProblems < schema.sql`

psql db_name -c "GRANT ALL ON ALL TABLES IN SCHEMA public to db_user;"
psql db_name -c "GRANT ALL ON ALL SEQUENCES IN SCHEMA public to db_user;"
psql db_name -c "GRANT ALL ON ALL FUNCTIONS IN SCHEMA public to db_user;"