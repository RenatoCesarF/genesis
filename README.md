# Avaliação
Projeto de avaliação dos conhecimentos de desenvolvimento. 
Após finalizar, deve disponibilizar o link do repositório no github.

## Prazo
O candidato terá 3 dias corridos a partir da disponibilização deste arquivo para finalizar o projeto.

## Especificações
*Este projeto conta com o ambiente de banco dados já prepardo no docker.*
* Docker
  * Postgres 14+
* Laravel (última versão)

## Observações
Quaisquer configurações ou alterações necessárias para que o projeto seja executado,
devem ser documentadas no projeto

# Objetivo
- Criar um sistema para controle de viagens.
- O Sistema deve conter as seguintes funcionalidades:
* Veículos
  * Modelo
  * Ano
  * Data de aquisição
  * KMs rodados no momento da aquisição
  * Renavam - Deve ser único
* Motoristas
  * Nome 
  * Data de nascimento - ter no minímo, 18 anos
  * N° da CNH.
* Viagens
  * Veiculo
  * KM Inicial no início da viagem
  * KM Final na volta da viagem
  * Motoristas


# Executar

Set-up:
```
npm intall
```

run:
```
docker-compose up -d db
npm run dev
```

```
php artisan serve
```