Loo uus HTML dokument ning lisa Bootstrap'i library ja järgnev kood:
```html
<div class="container">
    <ul class="list-group">
        <li class="list-group-item">Ootel: Lorem ipsum dolor sit amet</li>
        <li class="list-group-item">Tehtud: Lorem ipsum dolor sit amet</li>
        <li class="list-group-item">Viga: Lorem ipsum dolor sit amet</li>
        <li class="list-group-item">Tehtud: Lorem ipsum dolor sit amet</li>
        <li class="list-group-item">Tehtud: Lorem ipsum dolor sit amet</li>
        <li class="list-group-item">Lorem ipsum dolor sit amet</li>
        <li class="list-group-item">Viga: Lorem ipsum dolor sit amet</li>
      </ul>
</div>
```

Kasuta Javascripti, mis tuvastab, et kui tekstis on vastav sõna, siis määratakse sellele vastav klass:
* ootel – list-group-item-warning
* tehtud – list-group-item-success
* viga – list-group-item-danger

Täienda koodi nii, et list-group-item-success lisatakse css omadus font-weight: 700
