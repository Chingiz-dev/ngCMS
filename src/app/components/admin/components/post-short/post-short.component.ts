import { Post } from 'src/app/model/post';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-post-short',
  templateUrl: './post-short.component.html',
  styleUrls: ['./post-short.component.scss']
})
export class PostShortComponent implements OnInit {
  @Input() post!: Post;
  @Output() onDeletePost: EventEmitter<Post> = new EventEmitter();
  faTimes = faTimes;
  faEdit = faEdit;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(post: Post){
    this.onDeletePost.emit(post);
  }
}
