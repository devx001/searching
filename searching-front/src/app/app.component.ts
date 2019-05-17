import { Component } from '@angular/core';
import { ConsumeApiService } from './services/consume-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'searching-front';

  resultsNames: any[] = [];
  resultHistory: any[] = [];
  showResultsNames: boolean;

  constructor(private consumeApiService: ConsumeApiService) { }

  search(text: string) {
    this.showResultsNames = false;
    if (!text) {
      this.resultsNames = null;
      return;
    }

    this.consumeApiService.findNames(text)
      .subscribe((data: any) => {
        this.resultsNames = data;
      });

    this.getHistory();
  }

  add(name: string) {
    console.log(name);
    if (!name) {
      return;
    }
    this.consumeApiService.addName(name);
    this.getHistory();
  }

  getHistory() {
    this.consumeApiService.getHistory()
      .subscribe((data: any) => {
        this.resultHistory = data;
      });
  }

}
