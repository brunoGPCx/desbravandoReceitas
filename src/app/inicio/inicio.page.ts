import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  public userLogin: User = {};
  private loading: any;


  constructor(
    private loadingCtrl: LoadingController,
   private toastCtrl: ToastController, 
   private authService: AuthService
  ) { }

  ngOnInit() {}

  async login(){
    await this.presentLoading();

    try{
      await this.authService.login(this.userLogin);
    }catch(error ) {
      this.presentToast(error.message);
    }finally{
      this.loading.dismiss();
    }
  }
  async presentLoading(){
    this.loading = await this.loadingCtrl.create({message: 'por favor, aguarde...'});
    return this.loading.present();
  }

  async presentToast(message: string){
    const toast = await this.toastCtrl.create({ message, duration: 2000});
    toast.present();
  }

}
