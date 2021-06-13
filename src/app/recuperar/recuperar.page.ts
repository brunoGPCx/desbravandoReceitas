import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage {

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController, 
    private authService: AuthService,
    public navCtrl: NavController,
     public alertController: AlertController
  ) { }

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Postagem realizada com sucesso',
      message: 'clique em OK para continuar',
      buttons: [
        {
          text: 'OK',
          handler: () => {
            console.log('Confirm Okay');
            this.navCtrl.navigateRoot('/inicio');
          }
        }
      ]
    });

    await alert.present();
  }
}
