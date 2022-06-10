//Recorrer el dom desde el elemento body hasta que llega al último elemento
//Mientras recorre compara si el elemento sobre el que está posicionado contiene el selector buscado
var traverseDomAndCollectElements = function(matchFunc, startEl) { //fn(el), h1
  var resultSet = []; // [<p>, <h2>]

  if (typeof startEl === "undefined") {
    startEl = document.body; //  root
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if(matchFunc(startEl)) resultSet.push(startEl);

  for (let i = 0; i < startEl.children.length; i++) {
    let child = startEl.children[i]; // h2
    // llamada recursiva si el elem. actual tiene hijos también
    let result = traverseDomAndCollectElements(matchFunc, child); //h1
    resultSet = [...resultSet, ...result]
  }
  
  return resultSet; //[<p>, <h2>] 
};

//traverseDomAndCollectElements(fn, h5)
//traverseDomAndCollectElements(fn, h2)
//traverseDomAndCollectElements(fn, body) // [h1, h2, div, h2...]

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) { // '#uno' | '.red' | 'div' | 'div.red'
  // tu código aquí
  if(selector[0] === '#') return 'id';
  if(selector[0] === '.') return 'class';
  if(selector.split('.').length === 2) return 'tag.class';// 'div.red'.split('.') --> [div, red]
  return 'tag';
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

//Recibe un selector y:
//1° Verifica que tipo de selector me pasaron: id, class, tag.class, tag
//2° Retorna una función dependiendo el tipo de slector que tenga y es función responde con un booleano comparando el selector recibido con el que me indicaron buscar
var matchFunctionMaker = function(selector) { // '#uno' | '.red' | 'div' | 'div.red' --> <div class='red>
  var selectorType = selectorTypeMatcher(selector); // 'tag' | 'id'
  var matchFunction;
  if (selectorType === "id") { 
   matchFunction = function(el) { //Recibe un elemento del dom
    // <div id='uno'> {id: 'uno'}
    return '#' + el.id === selector;   // 'uno' === '#uno'
   }
  } else if (selectorType === "class") {
    matchFunction = function(el) { // <div class='container home intro'> {classList: 'container'}
      if(el.classList.length > 1 ) {
        for (let i = 0; i < el.classList.length; i++) { //[container]
          if('.' + el.classList[i] === selector) {
            return true;
          }
        }
      }
      return '.' + el.classList === selector;
    }
  } else if (selectorType === "tag.class") { //'div.red'
    matchFunction = function(el) {
      let array = selector.split('.'); // [div, red]
      if(el.tagName.toLowerCase() === array[0]) { // Div === div
        if(el.classList.length > 1) {
          for (let i = 0; i < el.classList.length; i++) {
            if(el.classList[i] === array[1]) return true; // nombre de clase === red
          }
        }
        if(el.classList === array[1]) return true;
      }
      return false;
    }
    
  } else if (selectorType === "tag") {
    matchFunction = function(el) {
      return el.tagName.toLowerCase() === selector;
    }
  }
  return matchFunction;
};

//Recibe un tipo de selector y llama a las demás
var $ = function(selector) { // .querySelectorAll('')  $('#pageTtitle')
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector); // function(el) {return boolean;}
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};


//selectorTypeMatcher('.small') // --> 'class'
//matchFunctionMaker('.small') // --> function(el) {'class' === selector} 
//$('.small')


//<h2 class='lead big' id='pagetitle'>My Photos</h2>

// {
//   tagName: body,
//   classList: ['lead', 'big'],
//   id: 'pagetitle',
//   innerText: My Photos,
//   children: []
// }


// function(el) { // <div class='container home intro'> {classList: 'container'}
//   if(el.classList.length > 1 ) {
//     for (let i = 0; i < el.classList.length; i++) { //[container]
//       if('.' + el.classList[i] === selector) {
//         return true;
//       }
//     }
//   }
//   return '.' + el.classList === selector;
// }