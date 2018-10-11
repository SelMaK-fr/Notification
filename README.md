A propos
------------

Ce script me permet d'installer rapidement un système de notification.

Utilisation
------------

Avant tout, chargez jQuery et Mustache

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>  
<script src="/public/assets/js/jquery.nnk.notify.js"></script>  
<script src="/public/assets/js/mustache.js"></script>
```

Pour un affichage au chargement de la page

```javascript
$('body').notif({title:'My title', content: 'My content', cls:'myClassCss', timeout:4000});
```

Pour un affichage au click

```javascript
  $('.add').click(function(event){
      event.preventDefault();
      $('body').notif({title:'Mon alert', content: 'Mon contenu', cls:'success', timeout:4000});
  });
```

```html
<a href="#" class="add">My Link</a>
```