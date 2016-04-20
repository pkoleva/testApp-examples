import { EventData } from "data/observable";
import { Page } from "ui/page";
import view = require("ui/core/view");
import label = require("ui/label");
import button = require("ui/button");

// Event handler for Page "navigatingTo" event attached in main-page.xml
export function navigatingTo(args: EventData) {
    // Get the event sender
    var page = <Page>args.object;
}

var ttransfarray=["uppercase", "lowercase","capitalize"];
var i=0;

var tdecoarray=["line-through","underline"];
var d=0;

var lspacing=[0,1,5];
var s=0;

export function changeTextTransform(args){
	var btnChange = <button.Button>args.object;
	var lbl = <label.Label>btnChange.parent.getViewById("lblTransform");
	var statuslbl = <label.Label>btnChange.parent.getViewById("statusTransform");
	i==2? i=0:i++;
	lbl.style.textTransform=ttransfarray[i];
	statuslbl.text=ttransfarray[i];
	console.log("Set text-transform to: " + ttransfarray[i]);
	console.log("Label property " + lbl.style.textTransform);
};

export function changeTextDecoration(args){
	var btnChange = <button.Button>args.object;
	var lbl = <label.Label>btnChange.parent.getViewById("lblDecoration");
	var statuslbl = <label.Label>btnChange.parent.getViewById("statusDecoration");
	d==1? d=0:d++;
	lbl.style.textDecoration=tdecoarray[d];
	statuslbl.text=tdecoarray[d];
	console.log("Set text-decoration to: " + tdecoarray[d]);
	console.log("Label property " + lbl.style.textTransform);

};

export function changeLetterSpacing(args){
	var btnChange = <button.Button>args.object;
	var lbl = <label.Label>btnChange.parent.getViewById("lblLetterSpacing");
	var statuslbl = <label.Label>btnChange.parent.getViewById("statusLetterSpacing");
	s==2? s=0:s++;
	lbl.style.letterSpacing=String(lspacing[s]);
	statuslbl.text=String(lspacing[s]);
	console.log("Set letter-spacing " + lspacing[s]);
	console.log("Label property " + lbl.style.letterSpacing);
};

