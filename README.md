# tp7-angular-js

# tpangular
TP7 de SIR, portant sur les technologies :<br />

- Yeoman et son générateur de projet angularjs
- Angular JS
- Bower
- npm (NodeJS)

- Jersey ou JAX-RS pour architecture Java REST
- Hibernate (JPA) pour l'utilisation d'une base de données

## Installation

1) Cloner le projet.
2) Importer les dépendences et construire le projet:  <br />
   > ``` npm install ``` <br />
   > ``` bower install ```  <br />
3) Modifier le fichier **persistence.xml** pour qu'il corresponde à votre base de données.
4) Exécuter **backend-java-tp2_4src/main/java/jpa/JpaTest.java** pour alimenter la base de données.


## Lancement

### Partie serveur (back-end)
- Serveur Tomcat 7 :
  > ``` cd path-to-workspace/backend-java-tp2_4src/main/java/jpa``` <br />
  > ``` mvn tomcat7:run```

### Partie Client (front-end)
Dans un autre terminal:
- Serveur web Grunt: 
   > ``` cd path-to-workspace/TP7-Angular-JS``` <br />
   > ``` grunt serve```


## API REST

La racine est */*.

| Method     | URL | Action   |
| :------- | ----: | :---: |
| GET    | /homes  |  affiche toutes les maisons   |
| GET    | /homes  |  affiche toutes les maisons   |
| GET    | /homes/{id}/heater/{idh}  |  affiche les information d'un heater d'une maisons   |
| DELETE    | /homes/{id}  |  supprime une maison   |
| DELETE    | /homes/{id}/heater/{idh}  |  supprime un heqter dùune maison   |
| POST    | /homes  |  ajoute une maison   |
| POST    | /homes/{id}/heater  |  ajoute un heater a une maison   |
| GET    | /persons  |  affiche toutes les personnes  |
| GET    | /persons/{id}/home/{idh}  |  affiche les informations d'une home d'une personne |
| GET    | /persons/{id}/home  |  affiche toutes les hume d'une personne   |
| DELETE    | /persons/{id}  |  supprime une personne   |
| POST    | /persons  |  ajoute une personne   |
| POST    | /persons/{id}/home  |  ajoute une ume a une  personne   |
| GET    | /devices  |  affiche tous les devices   |
| DELETE    | /devices/{id}  |  supprime un device   |
| POST    | /devices  |  ajoute un device   |



