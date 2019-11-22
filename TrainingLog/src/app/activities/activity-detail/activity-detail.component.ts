import { Component, OnInit, Input } from '@angular/core';
// import { NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Activity } from '../../_models/activity';
import { Code } from '../../_models/code';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivityCalendar } from '../../_models/activity-calendar';


@Component({
  selector: 'training-log-activity-detail',
  templateUrl: './activity-detail.component.html',
  styleUrls: ['./activity-detail.component.css']
})
export class ActivityDetailComponent implements OnInit {

    // Objects that are to be initialized from caller need
    // to be instantiated in order to be initialized
    activityCalendar: ActivityCalendar = new ActivityCalendar();
    activityDetail: Activity = new Activity();
    activityOperation = 'Add';

    editForm: FormGroup;

    activityCategories = new Array<Code>(); // Get from Code biz obj.
    private _activityTypeCodes = new Array<Code>();
    activityTypes: Array<Code>;

    constructor(public bsModalRef: BsModalRef) { }

    ngOnInit() {

      this.setDefaultData();
      this.initializeForm();

    }

    initializeForm() {


        if (!this.activityDetail) { // Insure there's an actual object to work with
            this.activityDetail = new Activity();
        }

        this.editForm = new FormGroup({
          activityCategory: new FormControl(this.activityDetail.ActivityCategoryCode, Validators.required),
          activityType: new FormControl(this.activityDetail.ActivityCode),
          activityDuration: new FormControl(this.activityDetail.ActivityDuration)
        });

     }

     onSubmit() {

        const activityDetailUpdate = new Activity();
        activityDetailUpdate.ActivityCategoryCode = this.editForm.controls.activityCategory.value;
        activityDetailUpdate.ActivityCode = this.editForm.controls.activityType.value;
        activityDetailUpdate.ActivityDuration = this.editForm.controls.activityDuration.value;

        console.log('form submitted', activityDetailUpdate);

        this.editForm.reset();

      }

    setDefaultData() {
        this.loadCodes();
        this.activityDetail.ActivityCategoryCode = '2';
        this.loadActivityTypeCodes(this.activityDetail.ActivityCategoryCode);
        this.activityDetail.ActivityCode = 'a';
        this.activityDetail.ActivityDuration = 'For ever';
    }

    onActivityCategoryChange() {
        console.log('Activity Category change', this.editForm.controls.activityCategory.value);
        this.loadActivityTypeCodes(this.editForm.controls.activityCategory.value);
        this.editForm.controls.activityType.setValue(this._activityTypeCodes[0].Code);
    }

    loadActivityTypeCodes( activityCategoryCode: string) {
        this.activityTypes = this._activityTypeCodes.filter( (activityTypeCode: Code) => {
          return activityTypeCode.ForeignKey === activityCategoryCode;
        });
    }


    loadCodes() {

        const x = new Code();
        x.CodeId = 1;
        x.Code = 'a';
        x.Description = 'Category A';
        this.activityCategories.push(x);

        const y = new Code();
        y.CodeId = 2;
        y.Code = 'b';
        y.Description = 'Category B';
        this.activityCategories.push(y);

        const z = new Code();
        z.CodeId = 3;
        z.Code = 'c';
        z.Description = 'Category C';
        this.activityCategories.push(z);



        const a = new Code();
        a.CodeId = 1;
        a.Code = 'a';
        a.Description = 'Category A - Activity Type A';
        a.ForeignKey = 1;
        this._activityTypeCodes.push(a);

        const b = new Code();
        b.CodeId = 2;
        b.Code = 'b';
        b.Description = 'Category A - Activity Type B';
        b.ForeignKey = 1;
        this._activityTypeCodes.push(b);

        const c = new Code();
        c.CodeId = 3;
        c.Code = 'c';
        c.Description = 'Category A - Activity Type C';
        c.ForeignKey = 1;
        this._activityTypeCodes.push(c);

        const d = new Code();
        d.CodeId = 1;
        d.Code = 'a';
        d.Description = 'Category B - Activity Type A';
        d.ForeignKey = 2;
        this._activityTypeCodes.push(d);

        const e = new Code();
        e.CodeId = 2;
        e.Code = 'b';
        e.Description = 'Category B - Activity Type B';
        e.ForeignKey = 2;
        this._activityTypeCodes.push(e);

        const f = new Code();
        f.CodeId = 3;
        f.Code = 'c';
        f.Description = 'Category B - Activity Type C';
        f.ForeignKey = 2;
        this._activityTypeCodes.push(f);

        const g = new Code();
        g.CodeId = 1;
        g.Code = 'a';
        g.Description = 'Category C - Activity Type A';
        g.ForeignKey = 3;
        this._activityTypeCodes.push(g);

        const h = new Code();
        h.CodeId = 2;
        h.Code = 'b';
        h.Description = 'Category C - Activity Type B';
        h.ForeignKey = 3;
        this._activityTypeCodes.push(h);

        const i = new Code();
        i.CodeId = 3;
        i.Code = 'c';
        i.Description = 'Category C - Activity Type C';
        i.ForeignKey = 3;
        this._activityTypeCodes.push(i);

    }

}
