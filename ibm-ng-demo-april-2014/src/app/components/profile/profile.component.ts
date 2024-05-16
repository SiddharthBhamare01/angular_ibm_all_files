import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms'; @Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  profileData: any;
  tempData: any;

  constructor() {
    console.log('constructor');
    this.profileData = {
      firstName: 'Sonu',
      lastName: 'Sane',
      phones: [9867542301, 9102837465],
      email: 'sonu.sane@gmail.com',
      aadhaar: 564738291029,
      salary: 10.50,
      avatar: 'https://png.pngtree.com/png-vector/20191101/ourmid/pngtree-cartoon-color-simple-male-avatar-png-image_1934459.jpg',
    };
    this.tempData = JSON.parse(JSON.stringify(this.profileData));
    // this.tempData = this.profileData;
  };


  setProfileData = () => {
    console.log(this.tempData);
    this.profileData = JSON.parse(JSON.stringify(this.tempData));
    console.log(this.profileData);
  };

}


// type UserProfile = {
//   firstName: string;
//   lastName: string;
//   phones: number[];
//   email: string;
//   aadhaar: number;
//   salary: number;
//   avatar: string;
// };