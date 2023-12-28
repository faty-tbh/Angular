import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Flowers } from 'src/app/models/flowers.model';
import { FlowersService } from 'src/app/services/flowers.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-flowers',
  templateUrl: './add-flowers.component.html',
  styleUrls: ['./add-flowers.component.css']
})
export class AddFlowersComponent implements OnInit {

  constructor(private flowerSErvice:FlowersService,
    private router: Router,
    private route:ActivatedRoute ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'));
  }


    flower:Flowers = {
      nom:'',
      couleur:'',
      prix:''
    };
    saveFlower(): void{
         const data ={
          nom:this.flower.nom,
          couleur:this.flower.couleur,
          prix: this.flower.prix,
         };
         this.flowerSErvice.create(data).subscribe({

          next: ()=>console.log("ajout fait"),
          error: (e)=>console.error(e),
          complete:()=> this.router.navigate(['/flowers'])
         })
    }

}
