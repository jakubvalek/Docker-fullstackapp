# docker-fullstackapp
 
docker-compose.yml:
version: '3'

volumes:
    datafiles:

services:
    ms-sql-server:
        image: mcr.microsoft.com/mssql/server:2019-latest
        volumes:
            - datafiles:/var/lib/mssql
        restart: always
        environment: 
            ACCEPT_EULA: "Y"
            SA_PASSWORD: "Secret7+"
            MSSQL_PID: "Express"
        ports:
            - "4444:1433"
    customers-api:
        image: jvalos/customers-api
        depends_on: 
            - ms-sql-server
        restart: unless-stopped
        environment: 
            - DBHost=host.docker.internal
        ports:
            - "8080:80"       
    react-frontend:
        image: jvalos/customers-app
        stdin_open: true
        tty: true
        depends_on: 
            - customers-api
        ports: 
            - "8000:80"
