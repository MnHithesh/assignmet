import { Component,OnInit } from '@angular/core';
// import { ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('dataContainer') dataContainer: ElementRef;
  svg:SafeHtml;
  svg1:SafeHtml;
  svg2:SafeHtml;
  svg3:SafeHtml;

  title = 'Hithesh';
  public source;
  public destination;
  public sourceList = [];
  public destinationList = [];
  
  constructor(private sanitizer: DomSanitizer) {}

  validation(form){
    this.source = form.source;
    let sourceIndex = this.sourceList.indexOf(this.source);
    let ssource = this.source.substring(0,3);
    this.sourceList.push(this.source);
    this.destination = form.destination;
    let destinationIndex = this.destinationList.indexOf(this.destination);
    let sdesti = this.destination.substring(0,3);
    this.destinationList.push(this.destination);
    console.log(this.sourceList);
    console.log(this.destinationList); 

    if(this.destinationList.includes(this.source) == true){
      alert(ssource+"-"+sdesti+" Continous Trip")
      this.svg = this.sanitizer.bypassSecurityTrustHtml("<svg><use x='100' y='100' xlink:href='#continous' /></svg>");
    }
    else if((sourceIndex === destinationIndex) && sourceIndex != -1 && destinationIndex != -1 ){
      alert(ssource+"-"+sdesti+" Level up")
      this.svg2 = this.sanitizer.bypassSecurityTrustHtml("<svg><use x='20' y='40' xlink:href='#levelUp' /></svg>");
      this.svg1 = this.sanitizer.bypassSecurityTrustHtml("<svg><use x='20' y='60' xlink:href='#nonContinous' /></svg>"); 
    }
    else if(this.destinationList.includes(this.source) == false && this.destinationList.length > 1){
      alert(ssource+"-"+sdesti+" Non-Continous Trip")
      this.svg1 = this.sanitizer.bypassSecurityTrustHtml("<svg><use x='200' y='200' xlink:href='#nonContinous' /></svg>");
    }
    else if(this.destinationList.includes(this.source) == true && this.destinationList.length > 1){
      alert(ssource+"-"+sdesti+" Level Down")
      this.svg3 = this.sanitizer.bypassSecurityTrustHtml("<svg><use x='200' y='200' xlink:href='#levelDown' /></svg>");
    }
  }



  ngOnInit() {
    // this.svg3 = this.sanitizer.bypassSecurityTrustHtml("<svg xmlns='http://www.w3.org/2000/svg' width='310' height='300'><defs><marker id='markerCircle' markerWidth='8' markerHeight='8' refX='5' refY='5'><circle cx='5' cy='5' r='3' style='stroke: none; fill:#000000;'/></marker><marker id='markerArrow' markerWidth='13' markerHeight='13' refX='2' refY='6' orient='auto'><path d='M2,2 L2,11 L10,6 L2,2' style='fill: #000000;'/></marker></defs><path d='M307,254 C66,254 291,41 72,41' style='stroke: #6666ff; stroke-width: 1px; fill: none;marker-start: url(#markerCircle);' /></svg>")
  }
}


