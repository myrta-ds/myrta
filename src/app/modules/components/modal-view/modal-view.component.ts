import { Component, OnInit } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { AlertService, DialogColor, DialogType } from 'myrtex-mf-ui-composite';
import { AssessmentService } from 'myrtex-mf-assessment';
import { SmallModalComponent } from './modals/small-modal/small-modal.component';
import { MediumModalComponent } from './modals/medium-modal/medium-modal.component';
import { LargeModalComponent } from './modals/large-modal/large-modal.component';
import { DefaultModalComponent } from './modals/default-modal/default-modal.component';
import { InfoModalComponent } from './modals/info-modal/info-modal.component';
import { NegativeModalComponent } from './modals/negative-modal/negative-modal.component';
import { AttentionModalComponent } from './modals/attention-modal/attention-modal.component';
import { ContentModalComponent } from './modals/content-modal/content-modal.component';
import { ExtraLargeModalComponent } from './modals/extra-large-modal/extra-large-modal.component';

@Component({
  selector: 'mrx-modal-view',
  templateUrl: './modal-view.component.html',
  styleUrls: ['./modal-view.component.less']
})
export class ModalViewComponent implements OnInit {

  constructor(
    private simpleModalService: SimpleModalService,
    private alertService: AlertService,
    private assessmentService: AssessmentService
  ) {

  }

  ngOnInit(): void {
  }


  public showSmallModal(): void {
    this.simpleModalService.addModal(SmallModalComponent, {
      title: 'Small modal title',
      message: '<div class="text-center">Внимание! После выполнения действия у Вас не будет включенных шаблонов данного типа. <br> Вы хотите удалить шаблон?</div>'
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
      .subscribe((result) => {
        if (result.result) {
          console.log(result.result)
        }
      });
  }

  public showMediumModal(): void {
    this.simpleModalService.addModal(MediumModalComponent, {
      title: 'Medium modal title',
      message: '<div class="text-center">Внимание! После выполнения действия у Вас не будет включенных шаблонов данного типа. <br> Вы хотите удалить шаблон?</div>'
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
      .subscribe((result) => {
        if (result.result) {
          console.log(result.result)
        }
      });
  }

  public showLargeModal(): void {
    this.simpleModalService.addModal(LargeModalComponent, {
      title: 'Large modal title',
      message: '<div class="text-center">Внимание! После выполнения действия у Вас не будет включенных шаблонов данного типа. <br> Вы хотите удалить шаблон?</div>'
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
      .subscribe((result) => {
        if (result.result) {
          console.log(result.result)
        }
      });
  }

  public showExtraLargeModal(): void {
    this.simpleModalService.addModal(ExtraLargeModalComponent, {
      title: 'Extra Large modal title',
      message: '<div class="text-center">Внимание! После выполнения действия у Вас не будет включенных шаблонов данного типа. <br> Вы хотите удалить шаблон?</div>'
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
      .subscribe((result) => {
        if (result.result) {
          console.log(result.result)
        }
      });
  }


  public showDefaultModal(): void {
    this.simpleModalService.addModal(DefaultModalComponent, {
      title: 'Small modal title',
      message: '<div class="text-center">Внимание! После выполнения действия у Вас не будет включенных шаблонов данного типа. <br> Вы хотите удалить шаблон?</div>'
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
      .subscribe((result) => {
        if (result.result) {
          console.log(result.result)
        }
      });
  }

  public showInfoModal(): void {
    this.simpleModalService.addModal(InfoModalComponent, {
      title: 'Small modal title',
      message: '<div class="text-center">Внимание! После выполнения действия у Вас не будет включенных шаблонов данного типа. <br> Вы хотите удалить шаблон?</div>'
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
      .subscribe((result) => {
        if (result.result) {
          console.log(result.result)
        }
      });
  }

  public showNegativeModal(): void {
    this.simpleModalService.addModal(NegativeModalComponent, {
      title: 'Small modal title',
      message: '<div class="text-center">Внимание! После выполнения действия у Вас не будет включенных шаблонов данного типа. <br> Вы хотите удалить шаблон?</div>'
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
      .subscribe((result) => {
        if (result.result) {
          console.log(result.result)
        }
      });
  }

  public showAttentionModal(): void {
    this.simpleModalService.addModal(AttentionModalComponent, {
      title: 'Small modal title',
      message: '<div class="text-center">Внимание! После выполнения действия у Вас не будет включенных шаблонов данного типа. <br> Вы хотите удалить шаблон?</div>'
    }, {wrapperDefaultClasses: 'mrx-modal fade-anim'})
      .subscribe((result) => {
        if (result.result) {
          console.log(result.result)
        }
      });
  }

  public showContentModal(): void {
    this.simpleModalService.addModal(ContentModalComponent, {
      title: 'Small modal title',
    }, {wrapperDefaultClasses: 'mrx-modal mrx-modal-responsive fade-anim'})
      .subscribe((result) => {
        if (result.result) {
          console.log(result.result)
        }
      });
  }

  showAlertDef() {
    this.alertService.showDialog({
      title: 'Удаление данных',
      message: 'Вы уверены, что хотите удалить данные?',
      color: DialogColor.red,
      type: DialogType.confirm,
      defaultValue: false,
      okCallback: (ok) => {
        console.log('ok', ok)
      },
      cancelCallback: (result) => {
        console.log('res', result)
      }
    });
  }

  showAssessmentModal() {
    this.assessmentService.showModal({role: 1, email: 'АВЫЫААААаа', isSupport: false})
    // this.simpleModalService.addModal(AssessmentModalComponent, {
    //   role: 7,
    //   email: 'АВЫЫААААаа',
    //   isSupportCenter: false,
    // }, { wrapperDefaultClasses: 'mrx-modal fade-anim' })
    //   .subscribe((response) => {
    //     console.log(response)
    //     if (response?.response) {
    //       console.log('OK')
    //       console.log(response)
    //     }
    //     else{
    //       console.log('NO');
    //     }
    //   });
  }

  showConfirmDef() {
    console.log(2)
  }
}
