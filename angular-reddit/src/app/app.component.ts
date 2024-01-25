import { Component, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 
  
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    let t = title.value;
    let v= link.value;
    console.log(`Adding article title: `+t+ ` and link: `+ v);
    console.log(`Adding article title: `+title.value+ ` and link: `+ link.value);
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }

  articles = new Array<string>();
  spamArticles(spamText: HTMLInputElement, amount: HTMLInputElement): boolean {
    
    console.log(`spamText: ${spamText.value} and spamNum: ${amount.value} taken as input`);
    var thisAmount = Number(amount.value);
    for(let i:number =0; i < thisAmount; i++)  
    {
        this.articles[i] = String(spamText);
        console.log(`${this.articles[i]} on index ${i}`);
    }
    console.log("for loop done");
    return false;
  }
}
