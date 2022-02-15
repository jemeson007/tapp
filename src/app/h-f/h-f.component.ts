import { Component, Input , OnInit} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
// import { Observable } from 'rxjs';
// import firebase from 'firebase';
// import { Observable } from 'rxjs';
// import { Observable } from 'rxjs';
// import { ActivatedRoute } from '@angular/router';
import { Hf } from '../h-f';
import { HFiService } from '../hFi.service';
// import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-h-f',
  templateUrl: './h-f.component.html',
  styleUrls: ['./h-f.component.scss'],
  providers: [ HFiService ]
})
// 
export class HFComponent implements OnInit {

  powers = [' base expect ',' meets expect ',' exceeds expect '];
  q = [
      { value: 've', viewValue: 'base expect'},
      { value :'dd', viewValue: 'meets expect' },
      { value : 'vd', viewValue: 'exceeds expect'}
  ];  


  model = new Hf(18, 'Agent 1', 'base expect', 'a@b.org', 'Customer 109');
  // @Input() 
  // color = ThemePalette;
  // @Input()  m : Hf[] =[];
  //  
  @Input() m =  this.st.collection('m').valueChanges({ idField : 'id'});
  
  //
  

  submitted = false;
  onSubmit() {
	this.submitted = true;
	}

  // constructor() { };

  constructor(
    // private route : ActivatedRoute,
    private st : AngularFirestore,
    private hfS : HFiService
    ){};

  ngOnInit(){
    // this.getHFi();
    // this.m  = 
     this.st.collection('m').get();
    //  this.hfS.getHfis();
  }

  // email = new FormControl('', [Validators.required, Validators.email]);

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  d(aa: any) {
    this.st.collection('m').doc(aa.id).delete();
  }


  // de(id: number): Observable<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.delete<Hero>(url, this.httpOptions).pipe(
  //     tap(_ => this.log(`deleted hero id=${id}`)),
  //     catchError(this.handleError<Hero>('deleteHero'))
  //   );
  // }

  getHFi(){
    this.hfS.getHfis();
    return this.st.collection('m').get();
     
    //  this.hfS.getHf()
    //    .subscribe( m => this.m = m);
  }

  addToHFi( hk ){
    this.st.collection('m').add({... hk});
    this.hfS.addToHfi(hk);
    // this.hfS.addToHffi(hk)
    //   .subscribe(mm  => this.m.push(mm) );
  }

  newHf() {
    this.model=new Hf(412,'','', '');
     
  }

}
