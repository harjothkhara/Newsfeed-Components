// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) { //domElement = article "semantics"
    
  // assign this.domElement to the passed in domElement
    this.domElement = domElement; //referencing single article
    // console.log(this.domElement);
    
    // create a reference to the ".expandButton" class. 
    this.expandButton = this.domElement.querySelector('.expandButton');
    // console.log(this.expandButton);
    
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.innerText = 'expand'
   
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click',this.expandArticle.bind(this));
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
this.domElement.classList.toggle('article-open');
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable. 

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

//get the original DOM elements. Grabbled each article off its class name x4
let articles = document.querySelectorAll('.article');

//return a newly constructed DOM element, returning back a smarter Article. Used method from our nodelist
//...current value in our forEach method is arbitrary--i used article representing each individual article coming through.



articles.forEach(function(article){
  return new Article (article);          
});
