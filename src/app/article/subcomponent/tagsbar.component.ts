import { Component } from "@angular/core";
import { tags_list } from "./tagslist/tagslist";
import { TagsList } from "./tagslist/tagslist.model";

@Component ({
    selector: 'tagsbar',
    templateUrl: 'tagsbar.component.html',
    styleUrls: ['tagsbar.component.css']
})

export class TagsBarComponent {
    tags: TagsList [] = [];

  constructor() {
    for (var tag of tags_list) {
      this.tags.push(tag);
    }
  }
}

