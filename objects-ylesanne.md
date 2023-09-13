# Ülesanne
## Toote objekt
*  Loo toote jaoks objekt ‘toode‘, mis sisaldab vähemalt 3 omadust (nimetus, hind, kogus)
* Kuva objekti omadused konsoolis
* Lisa meetodid ja kuva konsoolis:
1. toote koguhind
2. muudab toote kogust
3. kuvab objekti sisu, kasutades sõne malli
## Ostukorv
Tekita uus objekt ‘ostukorv‘ ja lisa omadus ‘tooted‘ ja lisa massiivina väärtused nimi, hind ja kogus
### Meetodid
* Lisa meetod, mis kuvab kogu sisu
```js
console.log(${toode.nimi} - ${toode.hind} EUR - Kogus: ${toode.kogus});
```
Lisa meetod, mis lisab ostukorvi tooteid juurde
```js
ostukorv.lisaToode('Kohv', 5.80, 2);
```
Lisa meetod, mis kuvab ostukorvi summa
```js
console.log('Ostukorvi kogu summa:', ostukorv.koguSumma());
```