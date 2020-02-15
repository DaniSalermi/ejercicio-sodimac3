import { Component, OnInit } from "@angular/core";
import { HeroService } from "../../services/hero.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-detail",
  templateUrl: "./detail.component.html",
  styleUrls: ["./detail.component.scss"]
})
export class DetailComponent implements OnInit {
  id: string;
  detail: any = {};
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    this.heroService.getDetailInfoHero(this.id).subscribe(detail => {
      this.detail = detail;
      console.log(detail);
    });
  }
}
