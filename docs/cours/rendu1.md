# Sujet TP 1

TP 1 Jeux Olympiques - V0.4

[[toc]]

## Introduction et présentation
L'objectif du TP 1 est de construire une plate-forme pour manipuler et stocker des données liées aux Jeux Olympiques.
Cette plate-forme expose une API REST et une interface d'administration.
Elle doit être réalisée avec Node.js, Express.js, MongoDB et Mongoose.
Pour le TP 2 (en 2021), la plate-forme sera le socle d'un chatbot d'information sur les JO.

## Equipes
Le TP est à réaliser par groupe de 2.

## Descriptif fonctionnel

L'organisation des Jeux Olympiques implique la mise à place d'événements de compétition pour chacun des sports olympiques, impliquant les meilleures athlètes de la planète.
Pour mieux appréhender la nature des données en jeu, se reporter notamment la page [Calendrier des JO 2020](https://tokyo2020.org/fr/calendrier/).
Pour gérer les données (i.e. leur administration), une interface Web est mis en place pour gérer le référentiel des données, organisées sous forme de collections MongoDB :
- Disciplines sportives (collection `sports`) ;
- Athlètes (collection `athletes`) ;
- Utilisateurs administrateurs (collection `adminusers`) => En option !

## Principes pour l'implémentation

La sémantique des verbes HTTP doit être respectée pour les endpoints de l'API REST :
- `POST` pour la création de document ;
- `PUT` pour la modification de document ;
- `DELETE` pour la suppression de document ;
- `GET` pour la consultation en lecture seule de document(s).
Pour commencer, les accès à tous les endpoints sont publics, c'est-à-dire non sécurisés.
Pour les groupes les plus performants, en option : 
Les accès aux endpoints d'alteration des données (`POST`/ `PUT` / `DELETE`) sont limités aux utilisateurs administrateurs, grâce à un système d'authentification.
Idem pour _tous_ les endpoints liés aux utilisateurs administrateurs : seuls les utilisateurs administrateurs peuvent y accéder.
Les autres (`GET`) sont publics, sans authentification ou autorisation nécessaire par conséquent.

## Modèle de données

Voici la structure de données à implémenter :
*Sport*
```
_id: ObjectId
name: String
athletes: Array<Athlete>
```
*Athlete*
```
_id: ObjectId
firstName: String
lastName: String
gender: Gender (FEMALE ou MALE)
country: Country (code ISO 3166-1 alpha 2, par exemple : AU, BR, CN, FR, MA, RU, US, etc.)
```
*AdminUser* (option)
```
_id: ObjectId
username: String
password: String
```

## Endpoints à developper

Développer des points de terminaison d'API listés dans les paragraphes ci-après.

### API Sports
- Créer un sport : `POST /api/sports`
- Lister les sports : `GET /api/sports`
- Consulter les athlètes d'un sport : `GET /api/sports/{sportId}/athletes`
- Ajouter un athlète dans un sport : `POST /api/sports/{sportId}/athletes/{athleteId}`

### API Athlètes
- Créer un athlète : `POST /api/athletes`
- Lister les athlètes : `GET /api/athletes`
- Consulter les sports d'un athlète : `GET /api/athletes/{athleteId}/sports`

### API Utilisateurs administrateurs (option)
- Créer un utilisateur : `POST /api/users`
- Mettre à jour un utilisateur : `PUT /api/users/{userId}` (sauf le mot de passe, non modifiable)
- Lister les utilisateurs : `GET /api/users` (sans le mot de passe, non visible)
- Consulter un utilisateur : `GET /api/users/{userId}` (sans le mot de passe, non visible)

## Pages Web à développer

A faire :

Concevoir et développer des pages pour lister / créer  les sports et les athlètes.
Note d'implémentation : pour les pages Web, les groupes peuvent choisir soit d'utiliser les templates Handlebars, soit d'exploiter les API REST en JavaScript via Axios côté client.

En option :
- protéger le site web d'administration avec un système d'authentification
- concevoir et développer des pages pour lister / consulter / créer / supprimer les utilisateurs administrateurs
- concevoir et développer des pages pour modifier les sports et les athlètes

## Rendu attendu :

- Code source sur un repo Git (sans le dossier node_modules 🙏)
- `README.md` avec les instructions de prise en main du projet, et avec la checklist des API et des fonctionnalités Web avec un statut des tests (OK ou KO)

## Deadline

Vendredi 13 novembre 2020 18h00
