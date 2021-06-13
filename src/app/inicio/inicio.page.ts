import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController, NavController, AlertController } from '@ionic/angular';
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
  public loginCorreto: boolean;


  constructor(
    private loadingCtrl: LoadingController,
   private toastCtrl: ToastController, 
   private authService: AuthService,
   public navCtrl: NavController,
    public alertController: AlertController
  ) { }

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Sucesso',
      message: 'Login realizado com sucesso, clique em OK para continuar',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.navigateRoot('/tabs/tab1');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {}

  async login(){
    await this.presentLoading();

    try{
      await this.authService.login(this.userLogin);
      this.loginCorreto = true;
    }catch(error ) {
      this.loginCorreto = false;
      this.presentToast(error.message);
    }finally{
      this.loading.dismiss();
      if (this.loginCorreto){
        this.showAlertSucesso();
      }else{

      }
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
