import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommentsService } from '../comments.service';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-newrec',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,NgFor],
  templateUrl: './newrec.component.html',
  styleUrl: './newrec.component.scss'
})
export class NewrecComponent {



  form!:FormGroup
  sendform:any
  
constructor(private fb:FormBuilder, private comm:CommentsService){}

ngOnInit()
{
  this.form=this.fb.group({
    userId:'',
    title:'',
    body:'',
  })
}

  submit()
  {
    // console.log(this.form.value);
    // this.sendform=JSON.stringify(this.form.value)
    this.comm.senddetails(this.form.value).subscribe((data:any)=>{
      this.sendform=data
      // console.log(this.sendform+'entry');
      
      
    })
    // console.log(this.sendform);

  }

}
