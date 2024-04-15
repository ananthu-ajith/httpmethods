import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommentsService } from '../comments.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-updaterec',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule,FormsModule],
  templateUrl: './updaterec.component.html',
  styleUrl: './updaterec.component.scss'
})
export class UpdaterecComponent {
  
  form!: FormGroup
  sendform:any
  deleteid!:number
  patchbody:any={
    body:''
  }
  patchid!:number
  
constructor(private fb:FormBuilder, private comm:CommentsService){}

ngOnInit()
{
  this.form=this.fb.group({
    id:'',
    userId:'',
    title:'',
    body:'',
  })
}



  update()
  {
    this.comm.updatedetails(this.form.value.id, this.form.value).subscribe(
      (response:any) => {
        console.log(response);
      },
     
    )
  }

  delete()
  {
    console.log(this.deleteid);
    this.comm.deletedetails(this.deleteid).subscribe((response:any)=>{console.log(response);
    })
    
  }

  patch()
  {
    console.log(this.patchbody,this.patchid);
    this.comm.patchdetails(this.patchid,this.patchbody).subscribe((response:any)=>{
      console.log(response);
      
    })

  }

}
