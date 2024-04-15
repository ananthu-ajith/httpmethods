import { Component } from '@angular/core';
import { CommentsService } from '../comments.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-findrec',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './findrec.component.html',
  styleUrl: './findrec.component.scss'
})
export class FindrecComponent {
  dataarr:any[]=[]
  check:any=''

  constructor(private comm:CommentsService){}

  abcde()
  {
    this.comm.getdetails().subscribe((data:any)=>{
      this.dataarr=data
      console.log(this.dataarr);
      
    })
  }

  find()
  {
    console.log(this.check);
    if(this.check)
      {
    this.comm.getdetails().subscribe((data:any)=>{
      this.dataarr = data.filter((data: { name: string; email:string; username:string }) => {
        return data.name.toLowerCase().includes(this.check.toLowerCase())||data.email.toLowerCase().includes(this.check.toLowerCase())||data.username.toLowerCase().includes(this.check.toLowerCase());
      });      
    })
  }

  if(!this.check)
    {
      this.dataarr=[]
    }


  }

  
  
}
