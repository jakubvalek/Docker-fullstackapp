# Shrnutí aplikace
* Datový zdroj: *MSSQL Server*
* Backend: *.NET Core Webapi* (RestAPI)
* Frontend: *ReactJS* (frontend-app) + *Nginx* web server
* Použití *Docker* pro lehké nasazení všech aplikací, které mezi sebou v docker síti komunikují

# Instalace
## Prerekvizity
* Docker, docker-compose -- instalace a návody zde: [Docker dokumentace](https://docs.docker.com/)

## Docker-hub
1. Stáhněte nebo zkopírujte obsah [docker-compose-nocode.yml](https://github.com/jakubvalek/docker-fullstackapp/blob/main/docker-compose-nocode.yml) (zachovejte jméno a koncovku souboru) do svého systému.
    1. Pokud máte **Linux/Ubuntu**, tak si stáhněte tento docker-compose: [docker-compose-nocode-linux.yml](https://github.com/jakubvalek/docker-fullstackapp/blob/main/docker-compose-nocode-linux.yml)
    1. Příkaz na spuštění aplikace v Linuxu bude tedy v tomto případě *sudo docker-compose -f docker-compose-nocode-linux.yml up*
2. Navigujte do složky obsahující stažený docker-compose-nocode.yml soubor v CMD/příkazové řádce pomocí *cd název_složky* ([návod](https://www.howtogeek.com/659411/how-to-change-directories-in-command-prompt-on-windows-10/))
3. V příkazové řádce zadejte příkaz: *docker-compose -f docker-compose-nocode.yml up*
4. Až se aplikace stáhne a nainstaluje, tak si jí můžete prohlédnout pomocí internetového prohlížeče na adrese: http://localhost:8000/ , api a její výsledky pak na adrese http://localhost:8080/customers .

## GitHub
1. Stáhněte celou [GitHub repository](https://github.com/jakubvalek/docker-fullstackapp/archive/refs/heads/main.zip)
2. Odbalte a navigujte do složky s celou repository v příkazové řádce
3. V příkazové řádce zadejte příkaz: *docker-compose up*
4. Aplikace běží na adrese: http://localhost:8000/ , api a její výsledky pak na adrese http://localhost:8080/customers .

# Technické informace
* Tato aplikace vystavuje porty *8080* (RestAPI), *8000* (frontend-app), *4444* (MSSQL Server)
* Aplikace byla spouštěna na *Windows 10* s *Docker verzí 20.10.7* a *Docker-compose verzí 1.29.2* na *WSL-2* subsystému.
* [JAK PŘIPRAVIT APLIKACE TAK, ABY ŠLY SPUSTIT NA LOKÁLNÍM DOCKER](https://github.com/jakubvalek/docker-fullstackapp/blob/main/DEPLOYMENT.md)

# Další informace
* [Ukázka aplikace na Youtube](https://youtu.be/JEAczqECFNY)
