import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'DNDS';
	navInfo:string = "";
	activeInfo:string="// about me";

	assetsPath="../";

	whiteMode={
		background : "#0000",
		text : "#8C62F1",
		gradBckgrnd1 : "rgb(34,1,51)",
		gradBckgrnd2 :"linear-gradient(150deg, rgba(34,1,51,1) 0%, rgba(38,0,55,1) 55%, rgba(19,0,65,1) 82%, rgba(0,57,34,1) 100%)"
	}
	navClick(elementId:string){
		let collection= Array.from(document.getElementsByClassName("activeCircle"));
		console.log(collection);
		collection.forEach(element => {
			element.classList.remove("activeCircle");
			element.classList.add("circle");
		});

		document.getElementById(elementId)!.classList.remove("circle");
		document.getElementById(elementId)!.classList.add("activeCircle");
		this.activeInfo="// "+elementId;
		document.getElementById("position")!.style.color="#8C62F1";
	}
	navigateInfoChanger(info:string){
		if(info!="" && info!=this.activeInfo){
			this.navInfo=info;
			document.getElementById("position")!.style.color="#1CC3E2";
		}
		else{
			this.navInfo=this.activeInfo;
			document.getElementById("position")!.style.color="#8C62F1";
		}
	}
	scroller:number=0;
	scrollCount:number=0;
	aboutMeCategories=["my introduction","recent work experience","basic and contact information"];
	async aboutMeMovement(direction:string){
		if(direction=="left" && this.scrollCount > 0){
			this.scroller=this.scroller-document.getElementById("aboutMePanel")!.clientWidth;
			document.getElementById("aboutMePanel")!.scroll(this.scroller, 0);
			this.scrollCount--;
		}
		else if(direction=="right" &&  this.scrollCount < 2){
			this.scroller=this.scroller+document.getElementById("aboutMePanel")!.clientWidth;
			document.getElementById("aboutMePanel")!.scroll(this.scroller, 0);
			this.scrollCount++;
		}
	}
}