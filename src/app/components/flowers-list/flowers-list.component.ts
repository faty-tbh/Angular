import { Component, OnInit } from '@angular/core';
import { Flowers } from 'src/app/models/flowers.model';
import { FlowersService } from 'src/app/services/flowers.service';

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.css']
})
export class FlowersListComponent implements OnInit {

  flowers: Flowers[] | undefined;

  constructor(private  FlowersService: FlowersService) { }

  ngOnInit(): void {
    this.retrieveFlowers();
  }
retrieveFlowers(){
  this.FlowersService.getAll().subscribe({
    next:(data) => this.flowers=(data),
    error: (e) => console.error(e),
    complete: ()=>console.log('get all done')
  })
}

}
