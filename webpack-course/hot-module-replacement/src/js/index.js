import '../css/index.css';
import text from './text';

console.log("Hola Mundo desde home")
text();

if (module.hot) {
  module.hot.accept('./text.js', function() {
    text();
  })
}
