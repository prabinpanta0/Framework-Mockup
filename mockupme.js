
(function (document) {


  // change all images
  var images = document.getElementsByTagName('img');
  var length = images.length;

  for (var i = 0; i < length; i++) {
    var width = images[i].width;
    var height = images[i].height;
    if (width != height) {
      images[i].src = 'http://placehold.it/' + width + 'x' + height;
    } else {
      images[i].src = 'http://placehold.it/' + width;
    }
  }
  // change all text paragraphs to random lorem ipsum text paragraphs
  var paragraphs = document.getElementsByTagName('p');
  var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";

  for (var i = 0; i < paragraphs.length; i++) {
    var originalText = paragraphs[i].textContent;
    paragraphs[i].textContent = loremIpsum.substring(0, originalText.length);
  }

  // change all text headers to random lorem ipsum text headers
  var headers = document.getElementsByTagName('h1');
  for (var i = 0; i < headers.length; i++) {
    var originalText = headers[i].textContent;
    headers[i].textContent = loremIpsum.substring(0, originalText.length);
  }

  // label to lorem ipsum
  var labels = document.getElementsByTagName('label');
  for (var i = 0; i < labels.length; i++) {
    var originalText = labels[i].textContent;
    labels[i].textContent = loremIpsum.substring(0, originalText.length);
  }

  headers = document.getElementsByTagName('h2');
  for (var i = 0; i < headers.length; i++) {
    var originalText = headers[i].textContent;
    headers[i].textContent = loremIpsum.substring(0, originalText.length);
  }

  var textfields = document.getElementsByTagName('input');
  for (var i = 0; i < textfields.length; i++) {
    var originalPlaceholder = textfields[i].placeholder;
    textfields[i].placeholder = loremIpsum.substring(0, originalPlaceholder.length);
  }

  headers = document.getElementsByTagName('h3');
  for (var i = 0; i < headers.length; i++) {
    var originalText = headers[i].textContent;
    headers[i].textContent = loremIpsum.substring(0, originalText.length);
  }

  // change all lists to lorem ipsum lists
  var lists = document.getElementsByTagName('ul');
  for (var i = 0; i < lists.length; i++) {
    var listItems = lists[i].getElementsByTagName('li');
    for (var j = 0; j < listItems.length; j++) {
      listItems[j].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    }
  }
  // change other text elements to lorem ipsum with the same length as original text
  var textElements = document.getElementsByTagName('span');
  for (var i = 0; i < textElements.length; i++) {
    var originalText = textElements[i].textContent;
    var loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
    textElements[i].textContent = loremIpsum.substring(0, originalText.length);
  }

  // change all divs to have a border
  var divs = document.getElementsByTagName('div');
  for (var i = 0; i < divs.length; i++) {
    divs[i].style.border = "1px solid black";
  }

  // change all sections to have a border
  var sections = document.getElementsByTagName('section');
  for (var i = 0; i < sections.length; i++) {
    sections[i].style.border = "1px solid black";
  }

  // <svg> </svg> to <img> </img>
  var svgs = document.querySelectorAll('svg');
  for (var i = 0; i < svgs.length; i++) {
    var img = document.createElement('img');
    img.src = 'http://placehold.it/40';
    img.alt = 'Wireframe Image';
    svgs[i].parentNode.replaceChild(img, svgs[i]);
  }

  // change iframe tag to img and src to http://placehold.it/400
  var iframes = document.getElementsByTagName('iframe');
  for (var i = 0; i < iframes.length; i++) {
    var img = document.createElement('img');
    img.src = 'http://placehold.it/400';
    img.alt = 'Wireframe Image';
    iframes[i].parentNode.replaceChild(img, iframes[i]);
  }

  // change all colors to black
  var allElements = document.querySelectorAll('*');
  for (var i = 0; i < allElements.length; i++) {
    if (allElements[i].style.color === 'white') {
      allElements[i].style.color = 'black';
    } else if (allElements[i].style.color === 'black') {
      allElements[i].style.color = 'white';
    }
  }

  

  // Remove shadow from all elements
  var allElementsNoShadow = document.querySelectorAll('*');
  for (var i = 0; i < allElementsNoShadow.length; i++) {
    allElementsNoShadow[i].style.boxShadow = 'none';
  }

  // except the button and link with png/svg. change them to lorem ipsum text
  var buttons = document.getElementsByTagName('button');
  for (var i = 0; i < buttons.length; i++) {
    if (!buttons[i].querySelector('img')) {
      buttons[i].textContent = "Lorem Ipsum";
    }
  }

  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (!links[i].querySelector('img')) {
      links[i].textContent = "Lorem Ipsum";
    }
  }

  // remove animations
  var animations = document.querySelectorAll('*');
  for (var i = 0; i < animations.length; i++) {
    animations[i].style.animation = 'none';
  }


  // find all background images
  var tags = document.getElementsByTagName('*');
  var el;

  for (var i = 0, len = tags.length; i < len; i++) {
    el = tags[i];
    if (el.currentStyle) {
      if (el.currentStyle['backgroundImage'] !== 'none')
        el.className += ' bg_found';
    }
    else if (window.getComputedStyle) {
      if (document.defaultView.getComputedStyle(el, null).getPropertyValue('background-image') !== 'none')
        el.className += ' bg_found';
    }
  }




})(document);
