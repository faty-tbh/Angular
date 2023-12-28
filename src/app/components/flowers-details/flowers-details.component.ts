import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Flowers } from 'src/app/models/flowers.model';
import { FlowersService } from 'src/app/services/flowers.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flowers-details',
  templateUrl: './flowers-details.component.html',
  styleUrls: ['./flowers-details.component.css']
})
export class FlowersDetailsComponent implements OnInit{

  currentFlower :Flowers={

    _id:'',
    nom:'',
    couleur:'',
    prix:''
  };

constructor(private flowerService: FlowersService,

  private route:ActivatedRoute,
  private router: Router ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.getFlower(this.route.snapshot.paramMap.get('id'));

  }


getFlower(_id:any): void{
 this.flowerService.findById(_id).subscribe({

   next:(data)=>this.currentFlower=data,
   error:(e)=> console.error(e),
   //complete:()=>console.log('get one done')
   complete:()=>console.log(this.currentFlower)
 });
}
updateFlower(): void{

  this.flowerService.update(this.currentFlower._id, this.currentFlower).subscribe({

   next: ()=>console.log("update done"),
   error: (e)=>console.error(e),
   complete:()=> this.router.navigate(['/flowers'])

 });

}
deleteFriandise(): void{
  this.flowerService.delete(this.currentFlower._id, this.currentFlower).subscribe({

    next: ()=>console.log("delete done"),
   error: (e)=>console.error(e),
   complete:()=> this.router.navigate(['/flowers'])

  })




}
cancelFriandise():void{
  this.flowerService.getAll().subscribe({


   complete:()=> this.router.navigate(['/flowers'])

  })



}
}



