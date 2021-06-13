import { Component } from '@angular/core';
import { AlertController, LoadingController, NavController, ToastController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private loadingCtrl: LoadingController,
   private toastCtrl: ToastController, 
   private authService: AuthService,
   public navCtrl: NavController,
    public alertController: AlertController
  ) {}

  async showAlertSucesso() {
    const alert = await this.alertController.create({
      header: 'Postagem realizada com sucesso',
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
