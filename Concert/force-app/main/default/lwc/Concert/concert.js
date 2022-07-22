import { LightningElement } from 'lwc';
import addNewEvent from '@salesforce/apex/Event.addNewEvent';
import addNewAttendee from '@salesforce/apex/Event.addNewAttendee';
import SystemModstamp from '@salesforce/schema/Account.SystemModstamp';
export default class concert extends LightningElement {
    errorMsg = '';
    firstNameWjs = '';
    lastName = '';
    birthDate = '';
    email = '';
    concertName = '';
    concertDate = '';
    concertLocation = '';
    concertDescription = '';


    changeFirstName(event) {
        this.firstNameWjs = event.target.value;
    }
    changeLastName(event) {
        this.lastName = event.target.value;
    }
    changeBDate(event) {
        this.birthDate = event.target.value;
    }
    changeEmail(event) {
        this.email = event.target.value;
    }
    changeConName(event) {
        this.concertName = event.target.value;
    }
    changeConDate(event) {
        this.concertDate = event.target.value;
    }
    changeConLocation(event) {
        this.concertLocation = event.target.value;
    }
    changeConDescription(event) {
        this.concertDescription = event.target.value;
    }



    saveUser() {
        addNewEvent({ name: this.concertName, day: this.concertDate, location: this.concertLocation, description: this.concertDescription })
            .then(result => {})
            .catch(error => {
                this.error = error;
            });

        let concert = new Date(this.concertDate);
        let bDay = new Date(this.birthDate);
        let difference = concert - bDay;

        if (difference > 568036800000) {
            addNewAttendee({ firstName: this.firstNameWjs, lastName: this.lastName, email: this.email, birthday: this.birthDate })
                .then(result => {
                    this.errorMsg = '';
                })
                .catch(error => {
                    this.error = error;
                });
        } else {
            this.errorMsg = 'You should be legal age to attend this event';
        }

    }
}