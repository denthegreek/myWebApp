import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'DNDS';
	navInfo:string = "// home";
	activeInfo:string="// home";

	scroller:number=0;
	scrollCount:number=0;

	currentVideoLink:string="https://www.youtube.com/embed/YrigaGXr--E";
	currentVideo:string="Stohos Shooting Club";

	currentSocialMedia="";

	choicePosition="-4.5vw";
	njitPosition="19vh";

	assetsPath="/myWebApp/";

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
		this.currentVideoLink="https://www.youtube.com/embed/YrigaGXr--E";
		this.currentVideo="Stohos Shooting Club";
		this.scroller=0;
		this.scrollCount=0;
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
	elementSizing=0;
	aboutMeCategories=["my introduction","recent work experience","basic and contact information"];
	async aboutMeMovement(direction:string){
		if(direction=="left" && this.scrollCount > 0){
			this.scroller=(this.scrollCount - 1) * document.getElementById("aboutMePanel")!.clientWidth;
			document.getElementById("aboutMePanel")!.scroll(this.scroller, 0);
			this.scrollCount--;
			console.log(document.getElementById("aboutMePanel")!.clientWidth);
		}
		else if(direction=="right" &&  this.scrollCount < 2){
			this.scroller=(this.scrollCount + 1) * document.getElementById("aboutMePanel")!.clientWidth;
			document.getElementById("aboutMePanel")!.scroll(this.scroller, 0);
			this.scrollCount++;
			console.log(document.getElementById("aboutMePanel")!.clientWidth);
		}
	}
	scrollTop(){
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"});
	}
	codeScroller(element:string){
		document.getElementById(element)!.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
	}
	codeTarget:string="";
	clickMeCode:string="";
	codeTargetSetting(target:string){
		if(target==""){
			this.clickMeCode="";
		}
		else{
			this.clickMeCode="click to be rederected to github"
		}
		this.codeTarget=target;
	}
	changeVideoSource(source:string, title:string){
		if(source != this.currentVideoLink){
			var element:HTMLIFrameElement=document.getElementById('youtubePlayer')! as HTMLIFrameElement;
			element.src=source;
			this.currentVideoLink=source;
			this.currentVideo=title;
		}
	}
}