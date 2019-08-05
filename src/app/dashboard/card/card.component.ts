import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card;
  constructor(private httpClient: HttpClient) { }

  ngOnInit() { 
  }

  onLike(card: any){
    // TODO: incrementar o like, salvar via rest
    card.likes += 1;
    this.httpClient.post('/api/skills', card).subscribe( ret => {
      console.log(ret); console.log('Sucesso');
    }, err => {
      console.log(err); console.log('Erro');
    });
  }

  onShare(){
    // TODO: abrir o link do seu linkedin
    window.open('https://www.linkedin.com/in/flavio-ota-619020137/');
  }

}
