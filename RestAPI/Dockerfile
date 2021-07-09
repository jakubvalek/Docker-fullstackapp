# syntax=docker/dockerfile:1
# Obraz nutný k sestavení aplikace
FROM mcr.microsoft.com/dotnet/sdk:5.0 AS build-env
# Složka, ve které container nebo obraz bude pracovat
WORKDIR /app

# Zkopírování csproj 
COPY *.csproj ./
# Spuštění obnovení závislostí
RUN dotnet restore

# Zkopírování všech částí aplikace ve složce
COPY . ./
# Sestavení .net core aplikace do složky out
RUN dotnet publish -c Release -o out

## Sestavení obrazu aplikace
# Obraz, na kterém aplikace poběží
FROM mcr.microsoft.com/dotnet/aspnet:5.0
# Informování dockeru o tom, že pracuje na portu 80 (Hypertext Transfer Protocol (HTTP))
EXPOSE 80
# Multipart build, kopírování předchozích částí (sestavení) do WORKDIR (/app)
COPY --from=build-env /app/out .
# Instrukce, jak spustit aplikaci - Container se spustí jako spustitelný soubor pomocí ENTRYPOINT, RestAPI.dll je pak sestavený soubor, díky kterého může aplikace běžet
ENTRYPOINT ["dotnet", "RestAPI.dll"]