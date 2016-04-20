"use strict";
// Event handler for Page "navigatingTo" event attached in main-page.xml
function navigatingTo(args) {
    // Get the event sender
    var page = args.object;
}
exports.navigatingTo = navigatingTo;
var ttransfarray = ["uppercase", "lowercase", "capitalize"];
var i = 0;
var tdecoarray = ["line-through", "underline"];
var d = 0;
var lspacing = [0, 1, 5];
var s = 0;
function changeTextTransform(args) {
    var btnChange = args.object;
    var lbl = btnChange.parent.getViewById("lblTransform");
    var statuslbl = btnChange.parent.getViewById("statusTransform");
    i == 2 ? i = 0 : i++;
    lbl.style.textTransform = ttransfarray[i];
    statuslbl.text = ttransfarray[i];
    console.log("Set text-transform to: " + ttransfarray[i]);
    console.log("Label property " + lbl.style.textTransform);
}
exports.changeTextTransform = changeTextTransform;
;
function changeTextDecoration(args) {
    var btnChange = args.object;
    var lbl = btnChange.parent.getViewById("lblDecoration");
    var statuslbl = btnChange.parent.getViewById("statusDecoration");
    d == 1 ? d = 0 : d++;
    lbl.style.textDecoration = tdecoarray[d];
    statuslbl.text = tdecoarray[d];
    console.log("Set text-decoration to: " + tdecoarray[d]);
    console.log("Label property " + lbl.style.textTransform);
}
exports.changeTextDecoration = changeTextDecoration;
;
function changeLetterSpacing(args) {
    var btnChange = args.object;
    var lbl = btnChange.parent.getViewById("lblLetterSpacing");
    var statuslbl = btnChange.parent.getViewById("statusLetterSpacing");
    s == 2 ? s = 0 : s++;
    lbl.style.letterSpacing = String(lspacing[s]);
    statuslbl.text = String(lspacing[s]);
    console.log("Set letter-spacing " + lspacing[s]);
    console.log("Label property " + lbl.style.letterSpacing);
}
exports.changeLetterSpacing = changeLetterSpacing;
;
//# sourceMappingURL=label-styles.js.map