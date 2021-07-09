# Jak připravit aplikace pro běh
Jednotlivé aplikace jsou vytvořeny a je nutno je vydat/připravit pro svět.

Aby aplikace šly spustit jedním příkazem (*docker-compose up*) bez kódu, tak je nutno je nejdříve sestavit.

## Sestavení aplikací a protlačení na [docker-hub](https://hub.docker.com/)
Na stránce docker-hubu je nutno si založit uživatelský účet, který nám umožní vytvořit Repository pro jednotlivé aplikace.

### Nastavení
Pro každou aplikaci je nutno vytvořit *Dockerfile* soubor, který bude obsahovat příkazy, jak vytvořit obraz (image). 

* *Dockerfile* pro RestAPI si lze prohlédnout i s popisy zde: [RestAPI Dockerfile](https://github.com/jakubvalek/docker-fullstackapp/blob/main/RestAPI/Dockerfile)

* *Dockerfile* pro frontend-app pak zde: [frontend-app Dockerfile](https://github.com/jakubvalek/docker-fullstackapp/blob/main/frontend-app/Dockerfile)

### Sestavení
Po navigaci do složky, ve které se jednotlivá aplikace nachází, je nutno aplikaci přes protlačením sestavit.

Příkaz pro sestavení RestAPI i frontend-app: *docker build -t VYTVOŘENÝ_ÚČET/NÁZEV_APLIKACE*
* Tento příklad sestaví obraz, který pak lze spustit pomocí *docker run ...* či protlačit na docker-hub.
* -t je Tag/značka, pomocí které pak lze lehce protlačit obraz na docker-hub.
* VYTVOŘENÝ_ÚČET - Váš účet na docker-hubu
* NÁZEV_APLIKACE - libovolný název, nejčastěji název [VÁMI VYTVOŘENÉ REPOSITORY](https://docs.docker.com/docker-hub/) na docker-hubu

### Protlačení
Pokud jste si [vytvořili repository na docker-hubu](https://docs.docker.com/docker-hub/) tak do ní lze nahrát obraz pomocí příkazu: *docker push TAG_APLIKACE:latest*
* Tento příkaz nahraje obraz do repository na docker-hubu.
* TAG_APLIKACE - Vámi vytvořený TAG při sestavování
* :latest - nejnovější sestavení (pomocný tag pro docker-hub)

## Vytvoření docker-compose.yml souboru
Pokud vše proběhlo v pořádku, tak se všechny části aplikace naházejí na docker-hubu. V tom případě je nutno vytvořit docker-compose.yml soubor, který nám pomůže sestavit a propojit všechny části aplikace tak, aby je pak šlo spustit pomocí jediného příkazu.

Popsaný docker-compose.yml soubor si můžete prohlédnout zde: [docker-compose.yml](https://github.com/jakubvalek/docker-fullstackapp/blob/main/docker-compose.yml)

Soubor (již nepopsaný), který použijeme pro stáhnutí částí aplikace z docker-hubu lze vidět zde: [docker-compose-nocode.yml](https://github.com/jakubvalek/docker-fullstackapp/blob/main/docker-compose-nocode.yml) , hlavní rozdíl je v tom, že části aplikace jsou již sestavené (díky předchozím krokům) a už je stačí jen stáhnout a spustit pomocí *image: jvalos/customer-api* v *docker-compose-nocode.yml* souboru

## Dokončení
Docker-hub instalace je tedy zpětně popsána zde: [README.md](https://github.com/jakubvalek/docker-fullstackapp/blob/main/README.md)
