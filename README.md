<h1 align="center">
    <a href="https://moveit-gabriel-alexander10.vercel.app/">
     GoBarber - backend</a>
</h1>
<p align="center">
    <img src="https://img.shields.io/github/issues/Gabriel-Alexander10/Gobarber-backend" alt="issues" />
    <img src="https://img.shields.io/github/forks/Gabriel-Alexander10/Gobarber-backend" alt="forks" />
    <img src="https://img.shields.io/github/stars/Gabriel-Alexander10/Gobarber-backend" alt="stars" />
    <img src="https://img.shields.io/github/license/Gabriel-Alexander10/Gobarber-backend" alt="license" />
</p>

<p align="center">
 <a href="#techs">Techs</a> • 
 <a href="#features">Features</a> •
 <a href="#author">Author</a> • 
 <a href="#license">License</a> • 
 <a href="#frontend">Frontend</a>
</p>

## Features

- [x]  O usuário pode se cadastrar na plataforma
- [x]  O usuário pode atualizar sua foto de perfil
- [x]  O usuário pode agendar atendimentos com os barbeiros
- [x]  O usuário pode atualizar sua senha por email

## How it works

Primeiro, inicie os bancos de dados da aplicação:
```bash
# iniciar o postgresql
sudo docker run --name postgresql -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres

# iniciar o mongdb
docker run --name mongodb -p 27017:27017 -d -t mongo

# iniciar redis
docker run --name redis -p 6379:6379 -d -t redis:alpine
yarn start
```

Após isso, basta iniciar a aplicação:
```bash
npm run start
# or
yarn start
```
a API estará rodando no endereço [http://localhost:3333](http://localhost:3333)  

Obs: Não esqueça de criar um arquivo ormconfig.json na raiz do projeto para que a aplicação acesse os bancos. Veja como fazer 
<a href="https://typeorm.io/#/using-ormconfig">aqui</a>

## Techs

As seguintes tecnologias foram utilizadas no desenvolvimento do projeto:

- [NodeJS](https://nodejs.dev/)
- [Express](https://github.com/axios/axios)
- [Aws-sdk](https://aws.amazon.com/)
- [JWT](https://jwt.io/)
- [Multer](https://www.npmjs.com/package/multer)
- [Postgresql](https://www.postgresql.org/)
- [MongoDB](https://www.mongodb.com/)
- [Redis](https://redis.io/)
- [Docker](https://www.docker.com/)
- [Typeorm](https://typeorm.io/)
- [Cors](https://www.npmjs.com/package/cors)

## Author

<a href="https://www.linkedin.com/in/gabriel-alexander-abb90a1b6/" >
 <img style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C5603AQG3jlBthcVVqg/profile-displayphoto-shrink_200_200/0/1603548566092?e=1620259200&v=beta&t=15W8RT5E1u6lnNpJgP6D-7gdse4Busx49A-BtnFtVOw" width="100px;" alt="Gabriel Alexander"/>
 <br />
 <sub><b>Gabriel Alexander</b></sub></a>    
<br />
<a href="https://www.linkedin.com/in/gabriel-alexander-abb90a1b6/">
   <img src="https://img.shields.io/badge/Gabriel%20Alexander-blue?style=flat&logo=linkedin&link=https://www.linkedin.com/in/gabriel-alexander-abb90a1b6/" alt="LinkedIn badge" /> 
</a>

## License

This project is under the license [MIT](./LICENSE).

## Frontend
<a href="https://github.com/Gabriel-Alexander10/Gobarber-web">Verifique também o frontend do projeto.</a>
