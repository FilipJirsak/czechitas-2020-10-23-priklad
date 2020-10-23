# Příklad – kalendář se svátky

## 1. Stažení zdrojových kódů příkladu

### Jednoduchá varianta
V repository na GitHubu rozbalte menu `Code` a stáhněte si zdrojáky přes volbu `Download ZIP`.

### Profi varianta

Vytvořte si kopii („fork“) tohoto git repository ve svém GitHub účtu. Na GitHubu na stránce tohoto repository klikněte vpravo nahoře na tlačítko `fork`.
Přejděte na stránku forknutého repository ve svém účtu, pod tlačítkem `Code` zjistěte adresu pro klonování (typ HTTP) a naklonujte si repository na svůj disk:
```
git clone <HTTP adresa>
```

Například:
```
git clone https://github.com/FilipJirsak/czechitas-2020-10-23-priklad.git
```

## 2. Zadání

Když uživatel vybere den z aktuálního měsíce, vybraný den se podbarví červeně a nad kalendářem se vypíše, kdo má ten den svátek.

## 3. Technické zadání
První krok: podívat se na strukturu HTML.

K čemu jsme došli – co vše je potřeba udělat:
* na políčku musí být posluchač události 'click'
* posluchač musí být nastaven pro všechna políčka (metoda `querySelectAll`)
* * s výjimkou těch, která mají třídu `jiny-mesic`
* * tj. použít selektor `.kalendar td:not(.jiny-mesic)`
* vybranému políčku nastavíme třídu s červeným podbarvením
* * elementu `td` (políčku) nastavit třídu `active`
* * zapamatovat si, na jaké políčko uživatel kliknul, aby bylo možné později třídu `active` smazat
* za text „Dnes má svátek:“ připojíme, kdo má ten den svátek
* * svátek vkládat do elementu `#dnes`
* * kdo má svátek je v elementu `span.svatek` v daném políčku (`td`)
* zrušit červené podbarvení předchozího vybraného dne
* * dříve vybranému políčku zrušit třídu `active`
* zrušit dříve zapsané jméno?
