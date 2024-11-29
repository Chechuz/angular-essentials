import { Component, computed, EventEmitter, Input, input, Output, output } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!: string;  //el signo "!" se pone porque el string no esta inicializado
  @Input({required:true}) name!: string;
  @Output() select = new EventEmitter<string>();
  //select = output<string>();  // NO es una signal !!
  //avatar = input.required<string>();  //son signals
  //name = input.required<string>();

  //imagePath = computed(()=>{   //signal
  //  return '../assets/users/' + this.avatar;
  // });
  get imagePath(){
    return '../assets/users/' + this.avatar;
  }

  onSelectUser(id:string){
    this.select.emit(this.id);
   }
}
