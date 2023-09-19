# Ülesanne

Kõik osad peavad olema eraldi lehtedel.

Bootstrapi jne võib kasutada.

Veebilehed, kasutades DOM-i, mida võimaldab:
* lisada uut objekti
* muuta olemasolevat (nimi, hing, kogus jne) objekti
* kustutada ühe või rohkem kui ühe objekteid (`.splice()` ja `[input=radio]`)
* otsida objekteid

Tehtud töö -> nikolas.laus@tthk.ee meili peale.

## Tooded 
Kasuta sisu [eelmisest ülesannest](https://github.com/blinchk/tthk-js-2/blob/main/objects-ylesanne.md) toode objektiga.

* Kuva ostukorvi summa

## Nimed

```js
const nimed = ["mari maasikas", "jaan jõesaar", "kristiina kukk", "margus mustikas", "jaak järve", "kadi kask", "Toomas Tamm", "Kadi Meri", "Leena Laas", "Madis Mets", "Hannes Hõbe", "Anu Allikas", "Kristjan Käär", "Eva Esimene", "Jüri Jõgi", "Liis Lepik", "Kalle Kask", "Tiina Teder", "Kaidi Koppel", "tiina Toom"];
```

* Nime objekti lisamise võimalus.
* Kasuta nimede massiivi ja tee nimed korda, et kõik hakkaks suure algustähega.
* Kasuta perenimesid (väiketähed), et luua neile email kujul perenimi@tthk.ee.
* Loo funktsioon, mis otsib kas massiivis on nimi või mitte. Kui on, siis kuvab täisnimed.

## Sünniaeg ja vanus

```js
const inimesteAndmed = [
{ nimi: "Mari Maasikas", isikukood: "38705123568" },
{ nimi: "Jaan Jõesaar", isikukood: "49811234567" },
{ nimi: "Kristiina Kukk", isikukood: "39203029876" },
{ nimi: "Margus Mustikas", isikukood: "49807010346" },
{ nimi: "Jaak Järve", isikukood: "39504234985" },
{ nimi: "Kadi Kask", isikukood: "39811136789" },
// Lisa kontrollimiseks oma nimi ja isikukood
];
```
* Kasuta objektide masiivi ja lisa meetod, mis leiab inimeste sünniaja ja vanuse
* Inimese objekti lisamise võimalus
* Peale objekti lisamist vanus ja sünniaeg peab olema sama reas

## Kaugushüpe

```js
const opilased = [
{ nimi: "Anna", tulemused: [4.5, 4.8, 4.6] },
{ nimi: "Mart", tulemused: [5.2, 5.1, 5.4] },
{ nimi: "Kati", tulemused: [4.9, 5.0, 4.7] },
{ nimi: "Jaan", tulemused: [4.3, 4.6, 4.4] },
{ nimi: "Liis", tulemused: [5.0, 5.2, 5.1] },
{ nimi: "Peeter", tulemused: [5.5, 5.3, 5.4] },
{ nimi: "Eva", tulemused: [4.8, 4.9, 4.7] },
{ nimi: "Marten", tulemused: [4.7, 4.6, 4.8] },
{ nimi: "Kairi", tulemused: [5.1, 5.3, 5.0] },
{ nimi: "Rasmus", tulemused: [4.4, 4.5, 4.3] },
];
```
Siin on õpilaste kaugushüppe tulemused. 
* Kuva õpilase nimi, tulemused, parem ja keskmine tulemus. 
* Peab olema võimalus lisada rohkem, kui 3 tulemust.
* Keskmine tulemus ümarda 2 komakohta.
* Tulemuse lisamise võimalus
