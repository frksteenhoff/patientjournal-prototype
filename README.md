# Til pigerne:
For at kunne se hjemmesiden, skal I have hentet projektet ned på jeres egen computer. Det gør I ved at trykke på "Clone/Download" knappen (den grønne).

Når I har hentet filerne skal I bare gøre som der står her:

* Tryk på filen `index.html` for at åbne projektet.
* Prøve at trykke på de forskellige knapper og se hvad der sker
* Når I har fået en forståelse af, hvad I kan i programmet, kan I prøve at lave rettelser selv.
* For at lave ændringer i farver osv. find filen `style.css`
  * Læs det der står inde i filen, for at finde ud af, hvad I skal ændre :-)
  
Happy coding!


## Prerequisites
  - NodeJS

## Instructions
Execute the following command to load dependencies:
```sh
$ npm install -g gulp-cli
$ npm install
```

Run the project
```sh
$ gulp
```

The project can be run without the gulp client by running `index.html` instead. The node dependencies should be installed either way.

## Additional
Clean generated dist folder
```sh
$ gulp clean
```

## Contributions // acknowledgements
The design and the basic app architecture was developed by [@fpegios](https://github.com/fpegios) in collaboration with [@frksteenhoff](https://www.github.com/frksteenhoff) and Marianna Tzachsan for a DTU course in the fall of 2018. Most of the logic has been redone, but the design has been reused to a large extent.
