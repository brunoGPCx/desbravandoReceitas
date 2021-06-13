import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-suporte',
  templateUrl: './suporte.page.html',
  styleUrls: ['./suporte.page.scss'],
})
export class SuportePage {

  constructor(
    private loadingCtrl: LoadingController,
   private toastCtrl: ToastController, 
   private authService: AuthService,
   public navCtrl: NavController,
    public alertController: AlertController
  ) { }

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Ticket enviado!',
      message: 'clique em OK para continuar',
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

}
