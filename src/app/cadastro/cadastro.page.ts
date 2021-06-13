import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';
import { User } from '../interfaces/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {
  public userRegister: User = {};
  private loading: any;

  constructor(
   private loadingCtrl: LoadingController,
   private toastCtrl: ToastController, 
   private authService: AuthService
  ) { }

  ngOnInit() {}

  async register() {
    await this.presentLoading();
    try{
      await this.authService.register(this.userRegister);
    }catch(error ) {
    console.error(error);
      this.presentToast(error.message);
    }finally{
      this.loading.dismiss();
    }
    console.log(this.userRegister);
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
