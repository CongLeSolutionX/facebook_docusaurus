"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([["2350"],{17112:function(t,e,i){i.d(e,{diagram:function(){return U}});var n=i(28923),r=i(11141),s=i(34684),a=i(38582),l=i(28076),o=function(){var t=(0,n.eW)(function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},"o"),e=[6,8,10,11,12,14,16,17,20,21],i=[1,9],r=[1,10],s=[1,11],a=[1,12],l=[1,13],o=[1,16],c=[1,17],h={trace:(0,n.eW)(function(){},"trace"),yy:{},symbols_:{error:2,start:3,timeline:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,title:11,acc_title:12,acc_title_value:13,acc_descr:14,acc_descr_value:15,acc_descr_multiline_value:16,section:17,period_statement:18,event_statement:19,period:20,event:21,$accept:0,$end:1},terminals_:{2:"error",4:"timeline",6:"EOF",8:"SPACE",10:"NEWLINE",11:"title",12:"acc_title",13:"acc_title_value",14:"acc_descr",15:"acc_descr_value",16:"acc_descr_multiline_value",17:"section",20:"period",21:"event"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,1],[9,2],[9,2],[9,1],[9,1],[9,1],[9,1],[18,1],[19,1]],performAction:(0,n.eW)(function(t,e,i,n,r,s,a){var l=s.length-1;switch(r){case 1:return s[l-1];case 2:case 6:case 7:this.$=[];break;case 3:s[l-1].push(s[l]),this.$=s[l-1];break;case 4:case 5:this.$=s[l];break;case 8:n.getCommonDb().setDiagramTitle(s[l].substr(6)),this.$=s[l].substr(6);break;case 9:this.$=s[l].trim(),n.getCommonDb().setAccTitle(this.$);break;case 10:case 11:this.$=s[l].trim(),n.getCommonDb().setAccDescription(this.$);break;case 12:n.addSection(s[l].substr(8)),this.$=s[l].substr(8);break;case 15:n.addTask(s[l],0,""),this.$=s[l];break;case 16:n.addEvent(s[l].substr(2)),this.$=s[l]}},"anonymous"),table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:i,12:r,14:s,16:a,17:l,18:14,19:15,20:o,21:c},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:18,11:i,12:r,14:s,16:a,17:l,18:14,19:15,20:o,21:c},t(e,[2,5]),t(e,[2,6]),t(e,[2,8]),{13:[1,19]},{15:[1,20]},t(e,[2,11]),t(e,[2,12]),t(e,[2,13]),t(e,[2,14]),t(e,[2,15]),t(e,[2,16]),t(e,[2,4]),t(e,[2,9]),t(e,[2,10])],defaultActions:{},parseError:(0,n.eW)(function(t,e){if(e.recoverable)this.trace(t);else{var i=Error(t);throw i.hash=e,i}},"parseError"),parse:(0,n.eW)(function(t){var e=this,i=[0],r=[],s=[null],a=[],l=this.table,o="",c=0,h=0,d=0,u=a.slice.call(arguments,1),p=Object.create(this.lexer),y={yy:{}};for(var g in this.yy)Object.prototype.hasOwnProperty.call(this.yy,g)&&(y.yy[g]=this.yy[g]);p.setInput(t,y.yy),y.yy.lexer=p,y.yy.parser=this,void 0===p.yylloc&&(p.yylloc={});var f=p.yylloc;a.push(f);var m=p.options&&p.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function x(){var t;return"number"!=typeof(t=r.pop()||p.lex()||1)&&(t instanceof Array&&(t=(r=t).pop()),t=e.symbols_[t]||t),t}(0,n.eW)(function(t){i.length=i.length-2*t,s.length=s.length-t,a.length=a.length-t},"popStack"),(0,n.eW)(x,"lex");for(var b,_,k,w,v,W,S,$,M,E={};;){if(k=i[i.length-1],this.defaultActions[k]?w=this.defaultActions[k]:(null==b&&(b=x()),w=l[k]&&l[k][b]),void 0===w||!w.length||!w[0]){var I="";for(W in M=[],l[k])this.terminals_[W]&&W>2&&M.push("'"+this.terminals_[W]+"'");I=p.showPosition?"Parse error on line "+(c+1)+":\n"+p.showPosition()+"\nExpecting "+M.join(", ")+", got '"+(this.terminals_[b]||b)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==b?"end of input":"'"+(this.terminals_[b]||b)+"'"),this.parseError(I,{text:p.match,token:this.terminals_[b]||b,line:p.yylineno,loc:f,expected:M})}if(w[0]instanceof Array&&w.length>1)throw Error("Parse Error: multiple actions possible at state: "+k+", token: "+b);switch(w[0]){case 1:i.push(b),s.push(p.yytext),a.push(p.yylloc),i.push(w[1]),b=null,_?(b=_,_=null):(h=p.yyleng,o=p.yytext,c=p.yylineno,f=p.yylloc,d>0&&d--);break;case 2:if(S=this.productions_[w[1]][1],E.$=s[s.length-S],E._$={first_line:a[a.length-(S||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(S||1)].first_column,last_column:a[a.length-1].last_column},m&&(E._$.range=[a[a.length-(S||1)].range[0],a[a.length-1].range[1]]),void 0!==(v=this.performAction.apply(E,[o,h,c,y.yy,w[1],s,a].concat(u))))return v;S&&(i=i.slice(0,-1*S*2),s=s.slice(0,-1*S),a=a.slice(0,-1*S)),i.push(this.productions_[w[1]][0]),s.push(E.$),a.push(E._$),$=l[i[i.length-2]][i[i.length-1]],i.push($);break;case 3:return!0}}return!0},"parse")},d={EOF:1,parseError:(0,n.eW)(function(t,e){if(this.yy.parser)this.yy.parser.parseError(t,e);else throw Error(t)},"parseError"),setInput:(0,n.eW)(function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},"setInput"),input:(0,n.eW)(function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},"input"),unput:(0,n.eW)(function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},"unput"),more:(0,n.eW)(function(){return this._more=!0,this},"more"),reject:(0,n.eW)(function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"reject"),less:(0,n.eW)(function(t){this.unput(this.match.slice(t))},"less"),pastInput:(0,n.eW)(function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},"pastInput"),upcomingInput:(0,n.eW)(function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},"upcomingInput"),showPosition:(0,n.eW)(function(){var t=this.pastInput(),e=Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},"showPosition"),test_match:(0,n.eW)(function(t,e){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack)for(var s in r)this[s]=r[s];return!1},"test_match"),next:(0,n.eW)(function(){if(this.done)return this.EOF;!this._input&&(this.done=!0),!this._more&&(this.yytext="",this.match="");for(var t,e,i,n,r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[s])))return t;if(!this._backtrack)return!1;else{e=!1;continue}}if(!this.options.flex)break}if(e)return!1!==(t=this.test_match(e,r[n]))&&t;return""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},"next"),lex:(0,n.eW)(function(){var t=this.next();return t?t:this.lex()},"lex"),begin:(0,n.eW)(function(t){this.conditionStack.push(t)},"begin"),popState:(0,n.eW)(function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},"popState"),_currentRules:(0,n.eW)(function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},"_currentRules"),topState:(0,n.eW)(function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},"topState"),pushState:(0,n.eW)(function(t){this.begin(t)},"pushState"),stateStackSize:(0,n.eW)(function(){return this.conditionStack.length},"stateStackSize"),options:{"case-insensitive":!0},performAction:(0,n.eW)(function(t,e,i,n){switch(i){case 0:case 1:case 3:case 4:break;case 2:return 10;case 5:return 4;case 6:return 11;case 7:return this.begin("acc_title"),12;case 8:return this.popState(),"acc_title_value";case 9:return this.begin("acc_descr"),14;case 10:return this.popState(),"acc_descr_value";case 11:this.begin("acc_descr_multiline");break;case 12:this.popState();break;case 13:return"acc_descr_multiline_value";case 14:return 17;case 15:return 21;case 16:return 20;case 17:return 6;case 18:return"INVALID"}},"anonymous"),rules:[/^(?:%(?!\{)[^\n]*)/i,/^(?:[^\}]%%[^\n]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:timeline\b)/i,/^(?:title\s[^\n]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:section\s[^:\n]+)/i,/^(?::\s[^:\n]+)/i,/^(?:[^#:\n]+)/i,/^(?:$)/i,/^(?:.)/i],conditions:{acc_descr_multiline:{rules:[12,13],inclusive:!1},acc_descr:{rules:[10],inclusive:!1},acc_title:{rules:[8],inclusive:!1},INITIAL:{rules:[0,1,2,3,4,5,6,7,9,11,14,15,16,17,18],inclusive:!0}}};function u(){this.yy={}}return h.lexer=d,(0,n.eW)(u,"Parser"),u.prototype=h,h.Parser=u,new u}();o.parser=o;var c={};(0,n.r2)(c,{addEvent:()=>k,addSection:()=>m,addTask:()=>_,addTaskOrg:()=>w,clear:()=>f,default:()=>W,getCommonDb:()=>g,getSections:()=>x,getTasks:()=>b});var h="",d=0,u=[],p=[],y=[],g=(0,n.eW)(()=>n.LJ,"getCommonDb"),f=(0,n.eW)(function(){u.length=0,p.length=0,h="",y.length=0,(0,n.ZH)()},"clear"),m=(0,n.eW)(function(t){h=t,u.push(t)},"addSection"),x=(0,n.eW)(function(){return u},"getSections"),b=(0,n.eW)(function(){let t=v(),e=0;for(;!t&&e<100;)t=v(),e++;return p.push(...y),p},"getTasks"),_=(0,n.eW)(function(t,e,i){let n={id:d++,section:h,type:h,task:t,score:e||0,events:i?[i]:[]};y.push(n)},"addTask"),k=(0,n.eW)(function(t){y.find(t=>t.id===d-1).events.push(t)},"addEvent"),w=(0,n.eW)(function(t){let e={section:h,type:h,description:t,task:t,classes:[]};p.push(e)},"addTaskOrg"),v=(0,n.eW)(function(){let t=(0,n.eW)(function(t){return y[t].processed},"compileTask"),e=!0;for(let[i,n]of y.entries())t(i),e=e&&n.processed;return e},"compileTasks"),W={clear:f,getCommonDb:g,addSection:m,getSections:x,getTasks:b,addTask:_,addTaskOrg:w,addEvent:k},S=(0,n.eW)(function(t,e){let i=t.append("rect");return i.attr("x",e.x),i.attr("y",e.y),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("width",e.width),i.attr("height",e.height),i.attr("rx",e.rx),i.attr("ry",e.ry),void 0!==e.class&&i.attr("class",e.class),i},"drawRect"),$=(0,n.eW)(function(t,e){let i=t.append("circle").attr("cx",e.cx).attr("cy",e.cy).attr("class","face").attr("r",15).attr("stroke-width",2).attr("overflow","visible"),s=t.append("g");function a(t){let i=(0,r.Nb1)().startAngle(Math.PI/2).endAngle(Math.PI/2*3).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+2)+")")}function l(t){let i=(0,r.Nb1)().startAngle(3*Math.PI/2).endAngle(Math.PI/2*5).innerRadius(7.5).outerRadius(15/2.2);t.append("path").attr("class","mouth").attr("d",i).attr("transform","translate("+e.cx+","+(e.cy+7)+")")}function o(t){t.append("line").attr("class","mouth").attr("stroke",2).attr("x1",e.cx-5).attr("y1",e.cy+7).attr("x2",e.cx+5).attr("y2",e.cy+7).attr("class","mouth").attr("stroke-width","1px").attr("stroke","#666")}return s.append("circle").attr("cx",e.cx-5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),s.append("circle").attr("cx",e.cx+5).attr("cy",e.cy-5).attr("r",1.5).attr("stroke-width",2).attr("fill","#666").attr("stroke","#666"),(0,n.eW)(a,"smile"),(0,n.eW)(l,"sad"),(0,n.eW)(o,"ambivalent"),e.score>3?a(s):e.score<3?l(s):o(s),i},"drawFace"),M=(0,n.eW)(function(t,e){let i=t.append("circle");return i.attr("cx",e.cx),i.attr("cy",e.cy),i.attr("class","actor-"+e.pos),i.attr("fill",e.fill),i.attr("stroke",e.stroke),i.attr("r",e.r),void 0!==i.class&&i.attr("class",i.class),void 0!==e.title&&i.append("title").text(e.title),i},"drawCircle"),E=(0,n.eW)(function(t,e){let i=e.text.replace(/<br\s*\/?>/gi," "),n=t.append("text");n.attr("x",e.x),n.attr("y",e.y),n.attr("class","legend"),n.style("text-anchor",e.anchor),void 0!==e.class&&n.attr("class",e.class);let r=n.append("tspan");return r.attr("x",e.x+2*e.textMargin),r.text(i),n},"drawText"),I=(0,n.eW)(function(t,e){function i(t,e,i,n,r){return t+","+e+" "+(t+i)+","+e+" "+(t+i)+","+(e+n-r)+" "+(t+i-1.2*r)+","+(e+n)+" "+t+","+(e+n)}(0,n.eW)(i,"genPoints");let r=t.append("polygon");r.attr("points",i(e.x,e.y,50,20,7)),r.attr("class","labelBox"),e.y=e.y+e.labelMargin,e.x=e.x+.5*e.labelMargin,E(t,e)},"drawLabel"),T=(0,n.eW)(function(t,e,i){let n=t.append("g"),r=P();r.x=e.x,r.y=e.y,r.fill=e.fill,r.width=i.width,r.height=i.height,r.class="journey-section section-type-"+e.num,r.rx=3,r.ry=3,S(n,r),H(i)(e.text,n,r.x,r.y,r.width,r.height,{class:"journey-section section-type-"+e.num},i,e.colour)},"drawSection"),A=-1,N=(0,n.eW)(function(t,e,i){let n=e.x+i.width/2,r=t.append("g");A++;r.append("line").attr("id","task"+A).attr("x1",n).attr("y1",e.y).attr("x2",n).attr("y2",450).attr("class","task-line").attr("stroke-width","1px").attr("stroke-dasharray","4 2").attr("stroke","#666"),$(r,{cx:n,cy:300+(5-e.score)*30,score:e.score});let s=P();s.x=e.x,s.y=e.y,s.fill=e.fill,s.width=i.width,s.height=i.height,s.class="task task-type-"+e.num,s.rx=3,s.ry=3,S(r,s),H(i)(e.task,r,s.x,s.y,s.width,s.height,{class:"task"},i,e.colour)},"drawTask"),C=(0,n.eW)(function(t,e){S(t,{x:e.startx,y:e.starty,width:e.stopx-e.startx,height:e.stopy-e.starty,fill:e.fill,class:"rect"}).lower()},"drawBackgroundRect"),L=(0,n.eW)(function(){return{x:0,y:0,fill:void 0,"text-anchor":"start",width:100,height:100,textMargin:0,rx:0,ry:0}},"getTextObj"),P=(0,n.eW)(function(){return{x:0,y:0,width:100,anchor:"start",height:100,rx:0,ry:0}},"getNoteRect"),H=function(){function t(t,e,i,n,s,a,l,o){r(e.append("text").attr("x",i+s/2).attr("y",n+a/2+5).style("font-color",o).style("text-anchor","middle").text(t),l)}function e(t,e,i,n,s,a,l,o,c){let{taskFontSize:h,taskFontFamily:d}=o,u=t.split(/<br\s*\/?>/gi);for(let t=0;t<u.length;t++){let o=t*h-h*(u.length-1)/2,p=e.append("text").attr("x",i+s/2).attr("y",n).attr("fill",c).style("text-anchor","middle").style("font-size",h).style("font-family",d);p.append("tspan").attr("x",i+s/2).attr("dy",o).text(u[t]),p.attr("y",n+a/2).attr("dominant-baseline","central").attr("alignment-baseline","central"),r(p,l)}}function i(t,i,n,s,a,l,o,c){let h=i.append("switch"),d=h.append("foreignObject").attr("x",n).attr("y",s).attr("width",a).attr("height",l).attr("position","fixed").append("xhtml:div").style("display","table").style("height","100%").style("width","100%");d.append("div").attr("class","label").style("display","table-cell").style("text-align","center").style("vertical-align","middle").text(t),e(t,h,n,s,a,l,o,c),r(d,o)}function r(t,e){for(let i in e)i in e&&t.attr(i,e[i])}return(0,n.eW)(t,"byText"),(0,n.eW)(e,"byTspan"),(0,n.eW)(i,"byFo"),(0,n.eW)(r,"_setTextAttrs"),function(n){return"fo"===n.textPlacement?i:"old"===n.textPlacement?t:e}}(),O=(0,n.eW)(function(t){t.append("defs").append("marker").attr("id","arrowhead").attr("refX",5).attr("refY",2).attr("markerWidth",6).attr("markerHeight",4).attr("orient","auto").append("path").attr("d","M 0,0 V 4 L6,2 Z")},"initGraphics");function j(t,e){t.each(function(){var t,i=(0,r.Ys)(this),n=i.text().split(/(\s+|<br>)/).reverse(),s=[],a=i.attr("y"),l=parseFloat(i.attr("dy")),o=i.text(null).append("tspan").attr("x",0).attr("y",a).attr("dy",l+"em");for(let r=0;r<n.length;r++)t=n[n.length-1-r],s.push(t),o.text(s.join(" ").trim()),(o.node().getComputedTextLength()>e||"<br>"===t)&&(s.pop(),o.text(s.join(" ").trim()),s="<br>"===t?[""]:[t],o=i.append("tspan").attr("x",0).attr("y",a).attr("dy","1.1em").text(t))})}(0,n.eW)(j,"wrap");var D=(0,n.eW)(function(t,e,i,n){let r=i%12-1,s=t.append("g");e.section=r,s.attr("class",(e.class?e.class+" ":"")+"timeline-node section-"+r);let a=s.append("g"),l=s.append("g"),o=l.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(j,e.width).node().getBBox(),c=n.fontSize?.replace?n.fontSize.replace("px",""):n.fontSize;return e.height=o.height+.55*c+e.padding,e.height=Math.max(e.height,e.maxHeight),e.width=e.width+2*e.padding,l.attr("transform","translate("+e.width/2+", "+e.padding/2+")"),R(a,e,r,n),e},"drawNode"),z=(0,n.eW)(function(t,e,i){let n=t.append("g"),r=n.append("text").text(e.descr).attr("dy","1em").attr("alignment-baseline","middle").attr("dominant-baseline","middle").attr("text-anchor","middle").call(j,e.width).node().getBBox(),s=i.fontSize?.replace?i.fontSize.replace("px",""):i.fontSize;return n.remove(),r.height+.55*s+e.padding},"getVirtualNodeHeight"),R=(0,n.eW)(function(t,e,i){t.append("path").attr("id","node-"+e.id).attr("class","node-bkg node-"+e.type).attr("d",`M0 ${e.height-5} v${-e.height+10} q0,-5 5,-5 h${e.width-10} q5,0 5,5 v${e.height-5} H0 Z`),t.append("line").attr("class","node-line-"+i).attr("x1",0).attr("y1",e.height).attr("x2",e.width).attr("y2",e.height)},"defaultBkg"),B={initGraphics:O,drawNode:D,getVirtualNodeHeight:z},F=(0,n.eW)(function(t,e,i,s){let a;let l=(0,n.nV)(),o=l.leftMargin??50;n.cM.debug("timeline",s.db);let c=l.securityLevel;"sandbox"===c&&(a=(0,r.Ys)("#i"+e));let h=("sandbox"===c?(0,r.Ys)(a.nodes()[0].contentDocument.body):(0,r.Ys)("body")).select("#"+e);h.append("g");let d=s.db.getTasks(),u=s.db.getCommonDb().getDiagramTitle();n.cM.debug("task",d),B.initGraphics(h);let p=s.db.getSections();n.cM.debug("sections",p);let y=0,g=0,f=0,m=0,x=50+o,b=50;m=50;let _=0,k=!0;p.forEach(function(t){let e={number:_,descr:t,section:_,width:150,padding:20,maxHeight:y},i=B.getVirtualNodeHeight(h,e,l);n.cM.debug("sectionHeight before draw",i),y=Math.max(y,i+20)});let w=0,v=0;for(let[t,e]of(n.cM.debug("tasks.length",d.length),d.entries())){let i={number:t,descr:e,section:e.section,width:150,padding:20,maxHeight:g},r=B.getVirtualNodeHeight(h,i,l);n.cM.debug("taskHeight before draw",r),g=Math.max(g,r+20),w=Math.max(w,e.events.length);let s=0;for(let t of e.events){let i={descr:t,section:e.section,number:e.section,width:150,padding:20,maxHeight:50};s+=B.getVirtualNodeHeight(h,i,l)}v=Math.max(v,s)}n.cM.debug("maxSectionHeight before draw",y),n.cM.debug("maxTaskHeight before draw",g),p&&p.length>0?p.forEach(t=>{let e=d.filter(e=>e.section===t),i={number:_,descr:t,section:_,width:200*Math.max(e.length,1)-50,padding:20,maxHeight:y};n.cM.debug("sectionNode",i);let r=h.append("g"),s=B.drawNode(r,i,_,l);n.cM.debug("sectionNode output",s),r.attr("transform",`translate(${x}, ${m})`),b+=y+50,e.length>0&&V(h,e,_,x,b,g,l,w,v,y,!1),x+=200*Math.max(e.length,1),b=m,_++}):(k=!1,V(h,d,_,x,b,g,l,w,v,y,!0));let W=h.node().getBBox();n.cM.debug("bounds",W),u&&h.append("text").text(u).attr("x",W.width/2-o).attr("font-size","4ex").attr("font-weight","bold").attr("y",20),f=k?y+g+150:g+100,h.append("g").attr("class","lineWrapper").append("line").attr("x1",o).attr("y1",f).attr("x2",W.width+3*o).attr("y2",f).attr("stroke-width",4).attr("stroke","black").attr("marker-end","url(#arrowhead)"),(0,n.j7)(void 0,h,l.timeline?.padding??50,l.timeline?.useMaxWidth??!1)},"draw"),V=(0,n.eW)(function(t,e,i,r,s,a,l,o,c,h,d){for(let o of e){let e={descr:o.task,section:i,number:i,width:150,padding:20,maxHeight:a};n.cM.debug("taskNode",e);let u=t.append("g").attr("class","taskWrapper"),p=B.drawNode(u,e,i,l).height;if(n.cM.debug("taskHeight after draw",p),u.attr("transform",`translate(${r}, ${s})`),a=Math.max(a,p),o.events){let e=t.append("g").attr("class","lineWrapper"),n=a;s+=100,Y(t,o.events,i,r,s,l),s-=100,e.append("line").attr("x1",r+95).attr("y1",s+a).attr("x2",r+95).attr("y2",s+a+(d?a:h)+c+120).attr("stroke-width",2).attr("stroke","black").attr("marker-end","url(#arrowhead)").attr("stroke-dasharray","5,5")}r+=200,d&&!l.timeline?.disableMulticolor&&i++}},"drawTasks"),Y=(0,n.eW)(function(t,e,i,r,s,a){let l=0,o=s;for(let o of(s+=100,e)){let e={descr:o,section:i,number:i,width:150,padding:20,maxHeight:50};n.cM.debug("eventNode",e);let c=t.append("g").attr("class","eventWrapper"),h=B.drawNode(c,e,i,a).height;l+=h,c.attr("transform",`translate(${r}, ${s})`),s=s+10+h}return s=o,l},"drawEvents"),Z={setConf:(0,n.eW)(()=>{},"setConf"),draw:F},q=(0,n.eW)(t=>{let e="";for(let e=0;e<t.THEME_COLOR_LIMIT;e++)t["lineColor"+e]=t["lineColor"+e]||t["cScaleInv"+e],(0,s.Z)(t["lineColor"+e])?t["lineColor"+e]=(0,a.Z)(t["lineColor"+e],20):t["lineColor"+e]=(0,l.Z)(t["lineColor"+e],20);for(let i=0;i<t.THEME_COLOR_LIMIT;i++){let n=""+(17-3*i);e+=`
    .section-${i-1} rect, .section-${i-1} path, .section-${i-1} circle, .section-${i-1} path  {
      fill: ${t["cScale"+i]};
    }
    .section-${i-1} text {
     fill: ${t["cScaleLabel"+i]};
    }
    .node-icon-${i-1} {
      font-size: 40px;
      color: ${t["cScaleLabel"+i]};
    }
    .section-edge-${i-1}{
      stroke: ${t["cScale"+i]};
    }
    .edge-depth-${i-1}{
      stroke-width: ${n};
    }
    .section-${i-1} line {
      stroke: ${t["cScaleInv"+i]} ;
      stroke-width: 3;
    }

    .lineWrapper line{
      stroke: ${t["cScaleLabel"+i]} ;
    }

    .disabled, .disabled circle, .disabled text {
      fill: lightgray;
    }
    .disabled text {
      fill: #efefef;
    }
    `}return e},"genSections"),G=(0,n.eW)(t=>`
  .edge {
    stroke-width: 3;
  }
  ${q(t)}
  .section-root rect, .section-root path, .section-root circle  {
    fill: ${t.git0};
  }
  .section-root text {
    fill: ${t.gitBranchLabel0};
  }
  .icon-container {
    height:100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .edge {
    fill: none;
  }
  .eventWrapper  {
   filter: brightness(120%);
  }
`,"getStyles"),U={db:c,renderer:Z,parser:o,styles:G}}}]);