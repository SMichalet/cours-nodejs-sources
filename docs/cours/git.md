# Git

[[toc]]
​
## Présentation succincte de Git
​
Git est un système de gestion de code source (SCM – Source Control Management), qui permet de contrôler et suivre les versions des fichiers de code source d'un projet de développement logiciel.
​
Pour commencer à interagir avec les dépôts de code (_repositories_, qui sont locaux ou distants), les premières commandes nécessaires sont :
​
- Le clonage d'un repository distant (par exemple celui créé sur Github pour déposer les rendus de TP) ;
- L'ajout de fichiers pour préparer un "commit" ;
- Le "commit" avec un message explicatif des modifications apportées ;
- Le "push" pour envoyer notamment les modifications locales committées vers le repository distant ;
-​Et le "pull" pour récupérer des modifications.

## Récupération d'un projet avec `git clone`
​
La commande `git clone` télécharge les fichiers d'un dépôt distant dans un dossier local, et met en place un dépôt local.
​
```shell
git clone https://github.com/glpi-project/glpi.git
```
​
## Envoi des développements sur le dépôt Git distant
​
Pour envoyer des modifications apportées dans le code d'un projet (ajout/modification/suppression de fichiers), les étapes classiques sont :
​
- L'ajout des fichiers concernés ;
- Le commit ;
- Et l'envoi vers le dépôt distant.
​
Cela se traduit par les commandes suivantes :
​
```shell
git add monfichier1.js monfichier2.js monfichier3.js
git commit -m "message explicatif des modifications apportées dans les 3 fichiers en question"
git push origin main
```

::: tip​
`main` est le nom de la branche par défaut créé par Github. Dans d'autres outils, cette branche principale peut être appelé `master`.
:::

## Récupération des dévelopment

Pour récupérer des modifications apportées dans le code d'un projet utilisez la commande `git pull`

::: warning
il peut y avoir des conflits !
:::