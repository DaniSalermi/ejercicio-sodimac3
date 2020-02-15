import { Component, OnInit } from "@angular/core";
import { HeroService } from "src/app/services/hero.service";
import { FormControl } from "@angular/forms";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
  heroes: any = [];
  search = new FormControl("batman");
  error: boolean;

  constructor(private heroesService: HeroService) {}

  ngOnInit() {
    this.searchHero();
  }

  searchHero() {
    this.heroesService.getHeroes(this.search.value).subscribe((heroes: any) => {
      this.error = heroes.response === "error";
      this.heroes = heroes.results;
    });
  }
}
