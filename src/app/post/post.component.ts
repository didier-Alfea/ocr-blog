import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() postTitle: string;
  @Input() postContent: string;
  @Input() postCreated_at: Date;
  @Input() postLoveIts: number;

  constructor() { }

  ngOnInit() {
    this.postCreated_at = new Date();
  }

  voteUp() {
    this.postLoveIts ++;
  }
  voteDown() {
    this.postLoveIts --;
  }
}
