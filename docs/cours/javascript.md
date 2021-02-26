# JavaScript

[[toc]]

## C'est pas pour faire les boutons ?

Le JavaScript a toujours eu cette idée reçue de code Front et "peu élégant".

Car il : 

* demande peu de connaissance pour écrire rapidement du code;
* a souvent été un langage de script de pages web;
* est faiblement typé et très permissif.

Pourtant aujourd'hui le JavaScript est utilisé : 

* par presque tous les frameworks Front du moment : React, Angular, VueJS...;
* côté serveur avec NodeJS;
* peut aujourd'hui être utilisé de manière typée avec TypeScript de Microsoft.

Et surtout ... il possède un éco-système immense !

## Les bases

On fait un petit rappel des bases du JavaScript.

### Les variables

Pour une variable : `let`

```javascript
    let foo = 'je suis une chaîne de caractère';
    foo = 'et maintenant ?';
    foo = 1; // la variable vaut maintenant 1
```

Pour une constante : `const`

```javascript
    const foo = 'je suis une constante';
    foo = 2; // error ici, on ne peut pas réaffecter la constante 'foo' !
```

### Les types simples

::: warning
JavaScript est un langage faiblement typé ! 
:::

Ce qui veut dire :

* On ne déclare pas les variables avec leur type. Mais les variables ont tout de même un type !
* Le type d'une variable peut changer au cours de l'execution.

```javascript
let foo = 'foo';
console.log(typeof foo); // foo est un 'string'

foo = 1; // on réaffacte foo avec une nouvelle valeur ... de quel type ?
console.log(typeof foo); // foo est maintenant un 'number'
```

Il existe plusieurs types dits primitifs : 

```javascript
const number = 1; // je suis un 'number';
const string = 'bonjour'; // je suis une 'string'
const boolean = true; // je suis un 'boolean', true ou false
const float = 3.14159265359; // je suis un aussi 'number' mais avec des décimales
const nullValue = null; // je suis de type null !
let undefinedValue; // Je n'ai pas de type explicite, je suis undefined !!
```

### null !== undefined

Attention !

* `null` : représente la nullité. 
* `undefined` : valeur donnée à une variable déclarée sans valeur explicite (:warning: ce n'est pas égal à `null`)

Pour plus d'infos entre null/undefined [https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/null](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/null)

```javascript
let foo;
console.log(foo); // valeur undefined, la variable a été définie sans valeur

foo = null;
console.log(foo); // valeur null, elle a été définie explicitement
```

::: tip
Les APIs renvoient souvent la valeur `null` si elle ne correspond à aucune valeur à renvoyer.
:::

### Les blocs de conditions

Un bloc de condition en JavaScript se défini par le mot clé `if..else if ...else` :
```javascript
const isActive = true;
if (isActive) {
    console.log('actif');
} else {
    console.log('not actif');
}
```

::: warning
Il y a une différence entre `===` et `==`. Le premier testera aussi le type !
Sauf cas extremes, vous pouvez toujours utiliser les comparatifs `===` et `!==`.
:::

::: tip Questions
Que retournent les conditions suivantes ?
```javascript
console.log(1 === '1');
console.log(1 == '1');
console.log('true' === true);
console.log('true' == true);
console.log('' === false);
console.log('' == false);
console.log(null == undefined);
console.log(null === undefined);
```
:::

Pour tester l'existance d'une variable on est pas obligé d'utiliser l'opérateur `=== null || === undefined` :

```javascript
let name;
if (name) {
    console.log(name);
} else {
    console.log('pas de nom');
}
```

### Les boucles

Une boucle est définie à l'aide du mot-clé `for` ou `while` :

```javascript
for(let i = 0; i < 10; i++) {
    console.log(i);
}

let j = 0;
while(j < 10) {
    console.log(j);
    j++;
}
```

### Les objects

Un objet est défini avec les brackets `{}`. 
C'est un type qui contient un nombre illimité de paires avec : 

* un nom (chaîne de caractère) 
* une valeur (de n'importe quel type !).

```javascript
const empty = {}; // je suis un objet vide, mais j'ai quand même une valeur !

const car = {
    name: '207 peugeot',
    wheels: 4,
    hasBrake: true
}; // je suis un object qui contient un nom (string), des roues (number), et hasBrake (boolean)

const nestedObject = {
    subObject1: {
        prop1: 'bonsoir',
        prop2: 'au revoir'
    },
    subObject2: {
        prop1: 'bonjour',
        prop2: 'bonne journée'
    }
} // On peut imbriquer ! je suis un object qui contient 2 sous-objects
```

On peut accéder aux valeurs de l'objet avec le `.` :

```javascript
let car = {
    name: '207 peugeot',
    wheels: {
       amount: 4,
       brand: 'Michelin'
    },
    hasBrake: true
};

console.log(car.name); // affiche la propriété `name`

car.name = '206 peugeot'; // je modifie le nom de l'objet `car`
car.doors = 5; // je rajoute une propriété à l'objet !
car.wheels.brand = 'Goodyear'; // Je peux modifier une propriété d'un sous objet
car.wheels = {}; // Et même modifier la valeur ou le type du sous-objet

console.log(car);

let foo = {
    foo: {
        foo: {
            foo: {}
        } 
    }
}
foo.foo.foo.foo = 'end'; // ...
console.log(foo);
```

::: warning
Tous les autres types en JavaScript non primitifs sont dérivés de l'objet (Tableaux, fonction ... etc) !
On dit en JavaScript que tout est objet ! 
:::

### Les tableaux 

Un Tableau est défini par des `[]` : 

* il contient une liste de valeurs. 
* la clé est l'index. Qui commence à 0 pour la première valeur.

```javascript
const myEmptyArray = []; // vide
const myArray = [1, 2, 3, 4, 5];
const politness = ['bonjour', 'bonsoir', 'merci', 'aurevoir'];

const mixed = [1, 'bonjour']; // on peut mélanger les types mais ce n'est pas conseillé !
const objects = [{
     name: '207 peugeot',
     wheels: {
        amount: 4,
        brand: 'Michelin'
     },
     hasBrake: true
}, {
     name: '206 peugeot',
     wheels: {
        amount: 4,
        brand: 'Goodyear'
     },
     hasBrake: true
}]; // on peut déclarer un tableau d'objets...

console.log(objects);

const arrays = [[], [], []]; // ...et des tableaux de tableaux
```

On accède à leur valeur grâce à leur index :
```javascript
const politness = ['bonjour', 'bonsoir', 'merci', 'aurevoir'];

const bonjour = politness[0]; // index 0 correspond à la première valeur ... `bonjour`;
console.log(bonjour);
const aurevoir = politness[politness.length - 1]; // index correpond à la taille du tableau - 1 .. donc à la dernière valeur ... `au revoir`
console.log(aurevoir);
const und = politness[20]; // index en dehors des limites ... undefined
console.log(und);
```

Le tableau est un dérivé du type objet qui contient des fonctions (ajouter, trier, ...)

```javascript
const politness = ['bonjour', 'bonsoir', 'merci', 'aurevoir'];

politness.push('bonne soirée'); // j'ajoute à la fin du tableau la valeur 'bonne soirée'
const goodEvening = politness[politness.length - 1]; // 'bonne soirée'

politness.sort();
console.log(politness); // trier !
```

Pour boucler sur un tableau, plusieurs façons : 

```javascript
const myArray = [1, 2, 3, 4, 5];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (let index in myArray) {
    console.log(myArray[index]);
}

for (let elem of myArray) {
    console.log(elem);
}
```

Pour une liste complète des fonctions c'est par ici [https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Objets_globaux/Array)

### Les fonctions

Les fonctions sont des bouts de codes pouvant être appelées à d'autre endroit, ou par elle-même.

Elles peuvent : 

* prendre ou non des arguments de n'importe quel type;
* renvoyer ou non une valeur avec `return`. De n'importe quel type (dont une fonction);
* avoir ou non un nom.
* peuvent se définir avec le mot-clé `function` ...
```javascript
function myFunction(arguments) {
    // do something
}
```
* ... ou avec une flèche `=>` ...
```javascript
const myFunction = (arguments) => {
    // do something
};
``` 

Petit example :

```javascript
/**
* On définit une fonction `add` qui prend en paramètre 2 arguments et qui retourne leur somme.
*/
const add = (a, b) => {
    return a + b;
};

/**
* On définit une fonction `sub` qui prend en paramètre 2 arguments et qui retourne leur soustraction.
*/
function sub(a, b) {
    return a - b;
}

let val = add(1,2);
console.log(val); // val vaut 3
val = sub(2, 1);
console.log(val); // val vait 1

// attention au type !
val = add('bonsoir ','stefan');
console.log(val); // val vaut 'bonsoir stefan'
```

Voici cet objet : 
```javascript
const car = {
    name: '207 peugeot',
    wheels: {
     amount: 4,
     brand: 'Michelin'
    },
    hasBrake: true,
    doors: 5,
    drivers: []
}
```

::: tip Exercice 15min
Faites 3 fonctions qui : 

* renomme la voiture.
* ajoute une roue de secours à l'objet `wheels` avec en paramètre la marque.
* ajoute un conducteur au tableau `drivers`, sauf si il s'appelle `sans permis`.

::: spoiler Solution
```javascript
const car = {
    name: '207 peugeot',
    wheels: {
        amount: 4,
        brand: 'Michelin'
    },
    hasBrake: true,
    doors: 5,
    drivers: []
}

const rename = (car, name) => {
    car.name = name;
    return car;
}

const addWheels = (car, brand) => {
    car.wheels.emergency = {
        amount: 1,
        brand: brand
    };
    return car;
}

const addDriver = (car, driver) => {
    if (driver !== 'sans permis') {
        car.drivers.push(driver);
    }
    return car;
}

let myCar = rename(car, 'Voiture de Stefan');
myCar = addWheels(myCar, 'Mercedes');
myCar = addDriver(myCar, 'Stefan');
myCar = addDriver(myCar, 'Chris');
myCar = addDriver(myCar, 'sans permis');

console.log(myCar);
```
:::

::: tip Questions
Dans le code ci-dessous, que vaut la variable name ?

```javascript
const modify = (name) => {
    name = 'chris';
}

const name = 'stefan';
modify(name);

console.log(name);
```

Dans le code ci-dessous, que vaut la propriété object.name ?

```javascript
const modify = (obj) => {
    obj.name = 'chris';
}

const object = {
    name: 'stefan',
};
modify(object);

console.log(object.name);
```

::: spoiler Autres examples
```javascript
const name = 'stefan';
let cloneName = name;
cloneName = 'chris';
console.log(name);
```

```javascript
const obj = {
    name: 'stefan'
}

const clone = obj;
clone.name = 'chris';
console.log(obj.name);
```
:::

### Les closures

Allons plus loin avec les **closures**.
Une closure est le résultat de la fusion de l'environnement locale d'une fonction avec son extérieur.

Example sans closure :

```javascript
const button = {
    size: 16,
};

const changeSize = (button, size) => {
    button.size = size;
}

changeSize(button, 10);
changeSize(button, 15);
changeSize(button, 20);
```

Example avec closure :

```javascript
const text = {
    size: 16,
};

// changeSize ferme le paramètre size de la fonction de retour
const changeSize = (size) => {
    return () => {
        text.size = size;
    }
}

// size10, size15, size20 sont des fonctions !
// Elles partagent la même fonction changeSize ! Mais avec des environnements différents (size 10, 15 ou 20)
const size10 = changeSize(10); // on ferme le paramètre size à 10
const size15 = changeSize(15); // on ferme le paramètre size à 15
const size20 = changeSize(20); // on ferme le paramètre size à 20

// ... later in the code

size10();
console.log(text); // size 10
size15();
console.log(text); // size 15
size20();
console.log(text); // size 20
```

### Try ... catch ! And throw

Le bloc `try ... catch` permet d'attraper les erreurs que peuvent nous renvoyer le moteur Javascript ... ou notre code.

```javascript
try {
    nonExistentFunction(); // on essaye d'appeler une fonction qui n'existe pas
} catch (err) {
    console.log('je t\'ai attrapé');
    console.log(err);
}
```

La commande `throw` permet de lancer une erreur ... qui devra être attrapée !

```javascript
const foo = () => {
    console.log('je lance une erreur');
    throw new Error('mon erreur'); // on verra l'usage du new plus tard !
}

try {
    foo(); // attention !
} catch (err) {
    console.log('je t\'ai attrapé !');
    console.log(err);
}
```

### Les callbacks

En JavaScript on peut donner en paramètre d'une fonction ... une autre fonction ! C'est le principe du `callback`

```javascript
const changeSize = (text, size, display) => {
    text.size = size;
    display(text); // ici display est une fonction ! on peut donc l'appeler !
}

const display = (elem) => {
    console.log('mon element :');
    console.log(elem);
}

const text = {
    size: 10,
}

changeSize(text, 15, display);
```

C'est utilisé en pratique pour les événements... 

```javascript
const events = require('events');
const eventEmitter = new events.EventEmitter();

// On définit la fonction 'scream' qui log 
const scream = function () {
  console.log('j\'ai entendu un bruit ! AHHHHH !');
}

// On définit si l'événement 'noise' est lancé alors l'eventEmitter va appeler la fonction 'scream'
eventEmitter.on('noise', scream);

// On lance l'événement 'noise' !!
eventEmitter.emit('noise');
```

...ou par exemple pour les tableaux... 

```javascript
const myArray = [1, 2, 3, 4, 5];

// le type Array a une fonction forEach qui permet de boucler sur les éléments du tableau 
// on lui passe une fonction en paramètre. Celle-ci doit avoir comme argument l'élément courant !
// La fonction forEach va appelé notre fonction pour chaque élément.
myArray.forEach((elem) => {
    console.log(elem);
});
```

...et pour tout ce qui est asynchrone !

::: tip Exercice 15min
Executer ce code ? 
Que devrais t'on avoir ?
Qu'est ce qu'on observe ?

```javascript
const filename = 'foo.txt';

// asynchrone request, attends 3 secondes avant d'appeler la fonction de callback 
const request = (callback) => {
    const response = 'Ceci est la réponse du serveur';
    setTimeout(function () {
        console.log('1. je viens de faire ma requête');
        callback(response);
    }, 3000);
}

// asynchrone write, attends 2 secondes avant d'appeler la fonction de callback 
const write = (content, callback) => {
    const file = {
        filename: filename,
        content: content
    };
    setTimeout(function () {
        console.log('3. je viens de mettre à jour le fichier');
        callback(file);
    }, 2000);
}

// asynchrone read, attends 1 seconde avant d'appeler la fonction de callback 
const read = (callback) => {
    const content = '1. some text in my file.';
    setTimeout(function () {
        console.log('2. je viens de lire le fichier');
        callback(content);
    }, 1000);
}

let resp;
let cont;

// je fais la requête
request((response) => {
    resp = response;
});

// je lis mon fichier et ajoute le contenu de ma requête
read((content) => {
    cont = cont + ' ' + resp;
});

// j'écris mon fichier
write(cont, (file) => {
    console.log(file);
});

// Fin du code ?!
console.log('??. Fin du code ?');
```

Exercice : Comment est-ce que l'on peut le corriger en se servant des callbacks ? 20min

::: spoiler Solution
```javascript
const filename = 'foo.txt';

// asynchrone request, attends 3 secondes avant d'appeler la fonction de callback 
const request = (callback) => {
    const response = 'Ceci est la réponse du serveur';
    setTimeout(function () {
        console.log('1. je viens de faire ma requête');
        callback(response);
    }, 3000);
}

// asynchrone write, attends 2 secondes avant d'appeler la fonction de callback 
const write = (content, callback) => {
    const file = {
        filename: filename,
        content: content
    };
    setTimeout(function () {
        console.log('3. je viens de mettre à jour le fichier');
        callback(file);
    }, 2000);
}

// asynchrone read, attends 1 seconde avant d'appeler la fonction de callback 
const read = (callback) => {
    const content = 'some text in my file.';
    setTimeout(function () {
        console.log('2. je viens de lire le fichier');
        callback(content);
    }, 1000);
}

// je fais la requête
request((response) => {

    // lorsque j'ai la réponse je lis mon fichier
    read((content) => {
        content = content + ' ' + response;

        // lorsque j'ai lu mon fichier, je met à jour
        write(content, (file) => {
            console.log(file);
        });
    });
});

// Fin du code ?!
console.log('??. Fin du code ?');
```
:::

### Callback hell

Que se passe t-il si on doit enchaîner beaucoup plus de requêtes asynchrones mais qui doivent être executer l'une après l'autre ?
Quel est le problème dans le code ci-dessous ?

```javascript
// fonction asynchrone, j'attends 1 seconde avant d'appeler le callback `resolve`
const asynchrone = (resolve) => {
    setTimeout(function () {
        console.log('execution asynchrone...');
        resolve();
    }, 1000);
}

// J'enchaîne mes appels. Beurk;
asynchrone( () => {
    asynchrone( () => {
        asynchrone( () => {
            asynchrone( () => {
                asynchrone( () => {
                    asynchrone( () => {
                        asynchrone( () => {
                            asynchrone( () => {
                                console.log('ouf on est arrivé ?');
                            });     
                        });     
                    });   
                });  
            });
        });
    });
});
```

Et encore on pourrait avoir un callback pour l'erreur aussi !

```javascript

// fonction asynchrone, j'attends 1 seconde avant d'appeler le callback `resolve`. 
// Mais si il y a une erreur j'appelle le callback reject.
const asynchrone = (resolve, reject) => {
    setTimeout(function () {
        try {
            console.log('execution asynchrone...');
            resolve();
        } catch (err) {
            reject(err);
        }
    }, 1000);
}

// J'enchaîne mes appels. Beurk;
asynchrone( () => {
    asynchrone( () => {
        asynchrone( () => {
            asynchrone( () => {
                asynchrone( () => {
                    asynchrone( () => {
                        asynchrone( () => {
                            asynchrone( () => {
                                console.log('ouf on est arrivé ?');
                            }, (err) => {
                                console.log('oops une erreur ici');
                            });     
                        }, (err) => {
                            console.log('oops une erreur ici');
                        });     
                    }, (err) => {
                        console.log('oops une erreur ici');
                    });   
                }, (err) => {
                    console.log('oops une erreur ici');
                });  
            }, (err) => {
                console.log('oops une erreur ici');
            });
        }, (err) => {
            console.log('oops une erreur ici');
        });
    }, (err) => {
        console.log('oops une erreur ici');
    });
});
```

### Les promises

Les promesses en JavaScript nous permettent de remédier à ce problème.
Elles encapsulent pour nous les fonctions de callback `resolve` et `reject`.
Et surtout nous pouvons les enchaîner !

```javascript
const myPromise = new Promise((resolve, reject) => {
    resolve('ok');
})
```

Les promesses sont des objets ayant comme fonctions : 

* `.then(callback)` : Elle est appelée lorsque la promesse est finie et qu'elle s'est déroulée correctement;
* `.catch(callback)` : Elle est appelée lorsque la promesse est finie mais qu'il y a eu une erreur.

Si la promesse est un succès alors la promesse execute la suivante à l'aide du `.then` qui contient la réponse. 
En cas d'erreur c'est le `.catch` qui est appelé avec son erreur. 

```javascript
let success = new Promise((resolve, reject) => {
    resolve('succès :) !!');
})

success
    .then( (response) => {
        console.log('youpi !! ', response);
    })
    .catch((err) => {
        console.log('mince ... ', err);
    });

const failed = new Promise((resolve, reject) => {
    reject('erreur :( !!');
})

failed
    .then( (response) => {
        console.log('youpi ... ', response);
    })
    .catch((err) => {
        console.log('mince ... ', err);
    });
```

Mais on peut surtout les enchaîner !! Que devient notre code ?

```javascript

// notre fonction renvoie maintent une promesse !
const asynchrone = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            try {
                console.log('execution asynchrone...');
                resolve();
            } catch (err) {
                reject(err);
            }
        }, 1000);
    });
}

asynchrone()
    .then( () => {
        return asynchrone();
    })
    .then( () => {
        return asynchrone();
    })
    .then( () => {
        return asynchrone();
    })
    .then( () => {
        return asynchrone();
    })
    .then( () => {
        return asynchrone();
    })
    .then( () => {
        return asynchrone();
    })
    .then( () => {
        return asynchrone();
    })
    .catch( (err) => {
        console.log('oops une erreur ici');
    });
```

On peut toujours faire mieux non ?
Lorsque dans le `.then` on appelle une fonction qui attends comme le même argument que la réponse de la promesse précédente ... on peut les enchaîner ! 

```javascript
// notre fonction renvoi maintent une promesse !
const asynchrone = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            try {
                console.log('execution asynchrone...');
                resolve();
            } catch (err) {
                reject(err);
            }
        }, 1000);
    });
}

asynchrone()
    .then(asynchrone)
    .then(asynchrone)
    .then(asynchrone)
    .then(asynchrone)
    .then(asynchrone)
    .then(asynchrone)
    .then(asynchrone)
    .then(asynchrone)
    .catch( (err) => {
        console.log('oops une erreur ici');
    });
```

::: tip Exercice 20min
Notre petit programme qui simulait une écriture de fichier doit être passé en promesse !

::: spoiler Solution
```javascript
const filename = 'foo.txt';

const request = () => {
    return new Promise((resolve, reject) => {
        const response = 'Ceci est la réponse du serveur';
        setTimeout(function () {
            console.log('1. je viens de faire ma requête');
            resolve(response);
        }, 3000);
    });
}

const write = (content) => {
    return new Promise((resolve, reject) => {
        const file = {
            filename: filename,
            content: content
        };

        setTimeout(function () {
            console.log('3. je viens de mettre à jour le fichier');
            resolve(file);
        }, 2000);
    });
}

const read = () => {
    return new Promise((resolve, reject) => {
        const content = 'some text in my file.';
        setTimeout(function () {
            console.log('2. je viens de lire le fichier');
            resolve(content);
        }, 1000);
    });
}

let res;

// je fais la requête
request()
    .then((response) => {
        // on stock ici la valeur de response dans une variable pour l'utiliser plus tard !
        res = response;
        // lorsque j'ai la réponse je lis mon fichier
        return read();
    })
    .then((content) => {
        // lorsque j'ai lu mon fichier, je met à jour
        content = content + res;
        return write(content);
    })
    .then((file) => {
        console.log(file);
    });

console.log('??. Fin du code ?');
```
:::

### async/await

On peut encore faire mieux avec les mots clé `async` et `await` qui rendent totalement abstraites les promesses !.

* Une fonction est `async` si elle renvoie une promesse
* L'appelant doit alors `await` la fonction pour attendre son résultat.

Reprenons notre code :
```javascript
// notre fonction utilise le mot-clé `async` pour dire qu'elle renvoie une promesse
const asynchrone = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            try {
                console.log('execution asynchrone...');
                resolve();
            } catch (err) {
                reject(err);
            }
        }, 1000);
    });
}

// attention nous sommes obligés d'encapsuler nos appels dans une fonction asynchrone
async function main() {
    try {
        // chaque appel attends avec le mot-clé `await`
        await asynchrone();
        await asynchrone();
        await asynchrone();
        await asynchrone();
        await asynchrone();
        await asynchrone();
        await asynchrone();
        await asynchrone();
    } catch (err) {
        console.log('oops une erreur ici');
    }
}

main();
```

::: tip Exercice 20min
Notre petit programme qui simulait une écriture de fichier doit être passé avec `async/await` ! 
N'oubliez pas qu'il faut encapsuler le programme dans une fonction asynchrone (main ci dessus).

::: spoiler Solution
```javascript
const filename = 'foo.txt';

const request = async () => {
    return new Promise((resolve, reject) => {
        const response = 'Ceci est la réponse du serveur';
        setTimeout(function () {
            console.log('1. je viens de faire ma requête');
            resolve(response);
        }, 3000);
    });
}

const write = async (content) => {
    return new Promise((resolve, reject) => {
        const file = {
            filename: filename,
            content: content
        };

        setTimeout(function () {
            console.log('3. je viens de mettre à jour le fichier');
            resolve(file);
        }, 2000);
    });
}

const read = async () => {
    return new Promise((resolve, reject) => {
        const content = 'some text in my file.';
        setTimeout(function () {
            console.log('2. je viens de lire le fichier');
            resolve(content);
        }, 1000);
    });
}

async function main() {
    // je fais la requête
    const res = await request();

    // lorsque j'ai la réponse je lis mon fichier
    let content = await read();

    // lorsque j'ai lu mon fichier, je met à jour
    content = content + res;
    const file = await write(content);
    console.log(file);
}

main();

console.log('??. Fin du code ?');
```
:::

Dans la réalité, la plupart des librairies faisant des appels asynchrones (requête HTTP, requête base de données) renvoient déjà des promesses.
Vous pouvez donc directement retourner celle-ci sans l'encapsuler avec un `new Promise`.

### Les classes

Le JavaScript est un langage orienté-objet !

* Il utilise le concept de [prototype](https://developer.mozilla.org/fr/docs/Learn/JavaScript/Objects/Prototypes_Objet)...
* ..qui permet de chaîner l'héritage.
* Un objet est simplement le résultat d'un constructeur représenté par une `function`.

Plus simplement, nous allons utilisé le mot-clé `class` qui est simplement du sucre syntaxique !

Une classe est la définition d'un ensemble contenant :

* des attributs (de n'import quel type) qui représentent son état
* des méthodes (des fonctions) qui représentent son comportement
* un constructeur optionnel qui permet de créer une instance (ou objets) via le mot-clé `new`.

::: warning
* Une classe n'est qu'une déclartion, qu'une définition.
* Une instance d'une classe est l'objet "physique" issu de la classe.  
:::

```javascript
// La définition de ma classe Person
class Person {
    constructor(firstName, lastName) {
        // on déclare les attributs à l'aide du mot-clé this dans le constructeur
        this.firstName = firstName;
        this.lastName = lastName;
    }
    
    name() {
        return this.firstName + ' ' + this.lastName;
    }
}

// Instanciation de la classe qui renvoient des objets

// Les deux personnes partagent la même classe mais sont deux instances différents.
// Avec des états différents !
const stefan = new Person('Stefan', 'Michalet');
const chris = new Person('Christophe', 'Bouvard');

const stefanName = stefan.name();
console.log(stefanName);

const chrisName = chris.name();
console.log(chrisName);

// les attributs sont accessibles directement depuis l'instance !
stefan.firstName = 'nicolas';
```

::: tip
Le mot-clé `this` à l'intérieur de la classe est égal à l'instance courante !
:::

Pour aller plus loin :

* La notion d'héritage est gérée par le mot-clé `extends`;
* Les classes filles peuvent appeler la fonction mère à l'aide du mot-clé `super`;
* On peut avoir des classes statiques;
* Les méthodes des classes peuvent être passées en tant que callback !

### JSON

Une petite parenthèse sur le format JSON qui ressemble beaucoup aux objets et qui peut être directement ajouter comme valeur à une variable !

Le fichier `test.json` :
```json
{
  "name": "207 peugeot",
  "wheels": {
     "amount": 4,
     "brand": "Michelin"
  },
  "hasBrake": true,
  "drivers": ["stefan", "chris"]
}
```

Le fichier `js` :
```javascript
const json = require('./test.json'); // attention ce code est synchrone ! On le verra plus tard. Dans la pratique il vaut mieux utiliser `fs` pour lire des fichiers JSON dynamiquement.
const car = json;
console.log(car);
```