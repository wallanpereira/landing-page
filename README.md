# landing-page
Primeira Landing Page: HTML, CSS, JavaScript, Gulp, Nodejs, npm.

Site oficial: http://preview.themeforest.net/item/appx-lander-responsive-app-landing-page-template/full_screen_preview/21974232?_ga=2.74159697.295720976.1530800900-772741403.1510054994&_gac=1.56313561.1528073104.CjwKCAjwo87YBRBgEiwAI1LkqeY8BxzUKcmLKvRWElqrZN9xoPzWlZxJ7IQbVMvIjoj-FppLVeCcwxoCKroQAvD_BwE


Caso use Linux, e fique com erro com node-gyp e nonde-sass.

1 - Instale: python2.7
Link: https://www.python.org/downloads/

2 - Instale: npm install -g node-gyp-install
Link: https://github.com/nodejs/node-gyp
ou
Link: https://www.npmjs.com/package/node-gyp-install

3 - Execute os comando abaixo para limpa o cache e remove bugs.
Link: https://github.com/sass/node-sass/issues/2562

"Constuma acontece por causa que o NodeJs está atualizado".

$ sudo rm -rf node_modules/ package-log.json

$ sudo npm cache clean --force

$ sudo npm install node-sass --unsafe-perm

$ sudo npm install --unsafe-perm
