/*
 *  /MathJax/extensions/TeX/AMSmath.js
 *  
 *  Copyright (c) 2010 Design Science, Inc.
 *
 *  Part of the MathJax library.
 *  See http://www.mathjax.org for details.
 * 
 *  Licensed under the Apache License, Version 2.0;
 *  you may not use this file except in compliance with the License.
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 */

MathJax.Extension["TeX/AMSmath"]={version:"1.1.2",number:0,startNumber:0,labels:{},eqlabels:{},refs:[]};MathJax.Hub.Register.StartupHook("TeX Jax Ready",function(){var b=MathJax.ElementJax.mml,g=MathJax.InputJax.TeX,f=MathJax.Extension["TeX/AMSmath"];var d=g.Definitions,e=g.Stack.Item,a=g.config.equationNumbers;var c=function(h){return h.join("em ")+"em"};d.Add({macros:{mathring:["Accent","2DA"],nobreakspace:"Tilde",negmedspace:["Spacer",b.LENGTH.NEGATIVEMEDIUMMATHSPACE],negthickspace:["Spacer",b.LENGTH.NEGATIVETHICKMATHSPACE],intI:["Macro","\\mathchoice{\\!}{}{}{}\\!\\!\\int"],iiiint:["MultiIntegral","\\int\\intI\\intI\\intI"],idotsint:["MultiIntegral","\\int\\cdots\\int"],dddot:["Macro","\\mathop{#1}\\limits^{\\textstyle \\mathord{.}\\mathord{.}\\mathord{.}}",1],ddddot:["Macro","\\mathop{#1}\\limits^{\\textstyle \\mathord{.}\\mathord{.}\\mathord{.}\\mathord{.}}",1],sideset:["Macro","\\mathop{\\mathop{\\rlap{\\phantom{#3}}}\\nolimits#1\\!\\mathop{#3}\\nolimits#2}",3],boxed:["Macro","\\fbox{$\\displaystyle{#1}$}",1],tag:"HandleTag",notag:"HandleNoTag",label:"HandleLabel",ref:"HandleRef",eqref:["HandleRef",true],substack:["Macro","\\begin{subarray}{c}#1\\end{subarray}",1],injlim:["Macro","\\mathop{\\rm inj\\,lim}"],projlim:["Macro","\\mathop{\\rm proj\\,lim}"],varliminf:["Macro","\\mathop{\\underline{\\rm lim}}"],varlimsup:["Macro","\\mathop{\\overline{\\rm lim}}"],varinjlim:["Macro","\\mathop{\\underrightarrow{\\rm lim\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"],varprojlim:["Macro","\\mathop{\\underleftarrow{\\rm lim\\Rule{-1pt}{0pt}{1pt}}\\Rule{0pt}{0pt}{.45em}}"],DeclareMathOperator:"HandleDeclareOp",operatorname:"HandleOperatorName",genfrac:"Genfrac",frac:["Genfrac","","","",""],tfrac:["Genfrac","","","",1],dfrac:["Genfrac","","","",0],binom:["Genfrac","(",")","0em",""],tbinom:["Genfrac","(",")","0em",1],dbinom:["Genfrac","(",")","0em",0],cfrac:"CFrac",shoveleft:["HandleShove",b.ALIGN.LEFT],shoveright:["HandleShove",b.ALIGN.RIGHT],xrightarrow:["xArrow",8594,5,6],xleftarrow:["xArrow",8592,7,3]},environment:{align:["AMSarray",null,true,true,"rlrlrlrlrlrl",c([5/18,2,5/18,2,5/18,2,5/18,2,5/18,2,5/18])],"align*":["AMSarray",null,false,true,"rlrlrlrlrlrl",c([5/18,2,5/18,2,5/18,2,5/18,2,5/18,2,5/18])],multline:["Multline",null,true],"multline*":["Multline",null,false],split:["AMSarray",null,false,false,"rl",c([5/18])],gather:["AMSarray",null,true,true,"c"],"gather*":["AMSarray",null,false,true,"c"],alignat:["AlignAt",null,true,true],"alignat*":["AlignAt",null,false,true],alignedat:["AlignAt",null,false,false],aligned:["Array",null,null,null,"rlrlrlrlrlrl",c([5/18,2,5/18,2,5/18,2,5/18,2,5/18,2,5/18]),".5em","D"],gathered:["Array",null,null,null,"c",null,".5em","D"],subarray:["Array",null,null,null,null,c([0,0,0,0]),"0.1em","S",1],smallmatrix:["Array",null,null,null,"c",c([1/3]),".2em","S",1],equation:["EquationBegin","Equation",true],"equation*":["EquationBegin","EquationStar",false]},delimiter:{"\\lvert":["2223",{texClass:b.TEXCLASS.OPEN}],"\\rvert":["2223",{texClass:b.TEXCLASS.CLOSE}],"\\lVert":["2225",{texClass:b.TEXCLASS.OPEN}],"\\rVert":["2225",{texClass:b.TEXCLASS.CLOSE}]}},null,true);g.Parse.Augment({HandleTag:function(j){var i=this.trimSpaces(this.GetArgument(j)),h=i;if(i==="*"){h=i=this.GetArgument(j)}else{i=a.formatTag(i)}var k=this.stack.global;k.tagID=h;if(k.notags){g.Error(j+" not allowed in "+k.notags+" environment")}if(k.tag){g.Error("Multiple "+j)}k.tag=b.mtd.apply(b,this.InternalMath(i)).With({id:a.formatID(h)})},HandleNoTag:function(h){if(this.stack.global.tag){delete this.stack.global.tag}this.stack.global.notag=true},HandleLabel:function(i){var j=this.stack.global,h=this.GetArgument(i);if(!f.refUpdate){if(j.label){g.Error("Multiple "+i+"'s")}j.label=h;if(f.labels[h]||f.eqlabels[h]){g.Error("Label '"+h+"' mutiply defined")}f.eqlabels[h]="???"}},HandleRef:function(j,l){var i=this.GetArgument(j);var k=f.labels[i]||f.eqlabels[i];if(!k){k="??";f.badref=!f.refUpdate}var h=k;if(l){h=a.formatTag(h)}this.Push(b.mrow.apply(b,this.InternalMath(h)).With({href:a.formatURL(k),"class":"MathJax_ref"}))},HandleDeclareOp:function(i){var h="";var j=this.trimSpaces(this.GetArgument(i));if(j=="*"){h="\\limits";j=this.trimSpaces(this.GetArgument(i))}if(j.charAt(0)=="\\"){j=j.substr(1)}var k=this.GetArgument(i);k=k.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}");g.Definitions.macros[j]=["Macro","\\mathop{\\rm "+k+"}"+h]},HandleOperatorName:function(i){var h="\\nolimits";var j=this.trimSpaces(this.GetArgument(i));if(j=="*"){h="\\limits";j=this.trimSpaces(this.GetArgument(i))}j=j.replace(/\*/g,"\\text{*}").replace(/-/g,"\\text{-}");this.string="\\mathop{\\rm "+j+"}"+h+" "+this.string.slice(this.i);this.i=0},HandleShove:function(i,h){var j=this.stack.Top();if(j.type!=="multline"||j.data.length){g.Error(i+" must come at the beginning of the line")}j.data.shove=h},CFrac:function(k){var h=this.trimSpaces(this.GetBrackets(k)),j=this.GetArgument(k),l=this.GetArgument(k);var i=b.mfrac(g.Parse("\\strut\\textstyle{"+j+"}",this.stack.env).mml(),g.Parse("\\strut\\textstyle{"+l+"}",this.stack.env).mml());h=({l:b.ALIGN.LEFT,r:b.ALIGN.RIGHT,"":""})[h];if(h==null){g.Error("Illegal alignment specified in "+k)}if(h){i.numalign=i.denomalign=h}this.Push(i)},Genfrac:function(i,k,p,m,h){if(k==null){k=this.GetDelimiterArg(i)}else{k=this.convertDelimiter(k)}if(p==null){p=this.GetDelimiterArg(i)}else{p=this.convertDelimiter(p)}if(m==null){m=this.GetArgument(i)}if(h==null){h=this.trimSpaces(this.GetArgument(i))}var l=this.ParseArg(i);var o=this.ParseArg(i);var j=b.mfrac(l,o);if(m!==""){j.linethickness=m}if(k||p){j=b.mfenced(j).With({open:k,close:p})}if(h!==""){var n=(["D","T","S","SS"])[h];if(n==null){g.Error("Bad math style for "+i)}j=b.mstyle(j);if(n==="D"){j.displaystyle=true;j.scriptlevel=0}else{j.displaystyle=false;j.scriptlevel=h-1}}this.Push(j)},Multline:function(i,h){this.Push(i);this.checkEqnEnv();return e.multline(h,this.stack).With({arraydef:{displaystyle:true,rowspacing:".5em",width:g.config.MultLineWidth,columnwidth:"100%",side:g.config.TagSide,minlabelspacing:g.config.TagIndent}})},AMSarray:function(j,i,h,l,k){this.Push(j);if(h){this.checkEqnEnv()}l=l.replace(/[^clr]/g,"").split("").join(" ");l=l.replace(/l/g,"left").replace(/r/g,"right").replace(/c/g,"center");return e.AMSarray(j.name,i,h,this.stack).With({arraydef:{displaystyle:true,rowspacing:".5em",columnalign:l,columnspacing:(k||"1em"),rowspacing:"3pt",side:g.config.TagSide,minlabelspacing:g.config.TagIndent}})},AlignAt:function(j,i,h){var k=this.GetArgument("\\begin{"+j.name+"}");if(k.match(/[^0-9]/)){g.Error("Argument to \\begin{"+j.name+"} must me a positive integer")}align="";spacing=[];while(k>0){align+="rl";spacing.push("0em 0em");k--}spacing=spacing.join(" ");if(h){return this.AMSarray(j,i,h,align,spacing)}return this.Array(j,null,null,align,spacing,".5em","D")},EquationBegin:function(h,i){this.checkEqnEnv();this.stack.global.forcetag=(i&&a.autoNumber!=="none");return h},EquationStar:function(h,i){this.stack.global.tagged=true;return i},checkEqnEnv:function(){if(this.stack.global.eqnenv){g.Error("Erroneous nesting of equation structures")}this.stack.global.eqnenv=true},MultiIntegral:function(h,l){var k=this.GetNext();if(k==="\\"){var j=this.i;k=this.GetArgument(h);this.i=j;if(k==="\\limits"){if(h==="\\idotsint"){l="\\!\\!\\mathop{\\,\\,"+l+"}"}else{l="\\!\\!\\!\\mathop{\\,\\,\\,"+l+"}"}}}this.string=l+" "+this.string.slice(this.i);this.i=0},xArrow:function(j,n,m,h){var k={width:"+"+(m+h)+"mu",lspace:m+"mu"};var o=this.GetBrackets(j),p=this.ParseArg(j);var q=b.mo(b.chars(String.fromCharCode(n))).With({stretchy:true,texClass:b.TEXCLASS.REL});var i=b.munderover(q);i.SetData(i.over,b.mpadded(p).With(k).With({voffset:".15em"}));if(o){o=g.Parse(o,this.stack.env).mml();i.SetData(i.under,b.mpadded(o).With(k).With({voffset:"-.24em"}))}this.Push(i)},GetDelimiterArg:function(h){var i=this.trimSpaces(this.GetArgument(h));if(i==""){return null}if(!d.delimiter[i]){g.Error("Missing or unrecognized delimiter for "+h)}return this.convertDelimiter(i)}});e.Augment({autoTag:function(){var i=this.global;if(!i.notag){f.number++;i.tagID=a.formatNumber(f.number.toString());var h=g.Parse("\\text{"+a.formatTag(i.tagID)+"}",{}).mml();i.tag=b.mtd(h.With({id:a.formatID(i.tagID)}))}},getTag:function(){var i=this.global,h=i.tag;i.tagged=true;if(i.label){f.eqlabels[i.label]=i.tagID}delete i.tag;delete i.tagID;delete i.label;return h}});e.multline=e.array.Subclass({type:"multline",Init:function(i,h){this.SUPER(arguments).Init.apply(this);this.numbered=(i&&a.autoNumber!=="none");this.save={notag:h.global.notag};h.global.tagged=!i&&!h.global.forcetag},EndEntry:function(){var h=b.mtd.apply(b,this.data);if(this.data.shove){h.columnalign=this.data.shove}this.row.push(h);this.data=[]},EndRow:function(){if(this.row.length!=1){g.Error("multline rows must have exactly one column")}this.table.push(this.row);this.row=[]},EndTable:function(){this.SUPER(arguments).EndTable.call(this);if(this.table.length){var j=this.table.length-1,k;if(!this.table[0][0].columnalign){this.table[0][0].columnalign=b.ALIGN.LEFT}if(!this.table[j][0].columnalign){this.table[j][0].columnalign=b.ALIGN.RIGHT}var h=b.mtr;if(!this.global.tag&&this.numbered){this.autoTag()}if(this.global.tag&&!this.global.notags){this.table[0]=[this.getTag()].concat(this.table[0]);h=b.mlabeledtr}this.table[0]=h.apply(b,this.table[0]);for(k=1,j=this.table.length;k<j;k++){this.table[k]=b.mtr.apply(b,this.table[k])}}this.global.notag=this.save.notag}});e.AMSarray=e.array.Subclass({type:"AMSarray",Init:function(k,j,i,h){this.SUPER(arguments).Init.apply(this);this.numbered=(j&&a.autoNumber!=="none");this.save={notags:h.global.notags,notag:h.global.notag};h.global.notags=(i?null:k);h.global.tagged=!j&&!h.global.forcetag},EndRow:function(){var h=b.mtr;if(!this.global.tag&&this.numbered){this.autoTag()}if(this.global.tag&&!this.global.notags){this.row=[this.getTag()].concat(this.row);h=b.mlabeledtr}if(this.numbered){delete this.global.notag}this.table.push(h.apply(b,this.row));this.row=[]},EndTable:function(){this.SUPER(arguments).EndTable.call(this);this.global.notags=this.save.notags;this.global.notag=this.save.notag}});e.start.Augment({oldCheckItem:e.start.prototype.checkItem,checkItem:function(j){if(j.type==="stop"){var h=this.mmlData(),i=this.global;if(f.display&&!i.tag&&!i.tagged&&!i.isInner&&(a.autoNumber==="all"||i.forcetag)){this.autoTag()}if(i.tag){var l=[this.getTag(),b.mtd(h)];var k={side:g.config.TagSide,minlabelspacing:g.config.TagIndent,columnalign:h.displayAlign};if(h.displayAlign===b.INDENTALIGN.LEFT){k.width="100%";if(h.displayIndent&&!String(h.displayIndent).match(/^0+(\.0*)?($|[a-z%])/)){k.columnwidth=h.displayIndent+" fit";k.columnspacing="0";l=[l[0],b.mtd(),l[1]]}}else{if(h.displayAlign===b.INDENTALIGN.RIGHT){k.width="100%";if(h.displayIndent&&!String(h.displayIndent).match(/^0+(\.0*)?($|[a-z%])/)){k.columnwidth="fit "+h.displayIndent;k.columnspacing="0";l[2]=b.mtd()}}}h=b.mtable(b.mlabeledtr.apply(b,l)).With(k)}return e.mml(h)}return this.oldCheckItem.call(this,j)}});g.prefilterHooks.Add(function(h){f.display=h.display;f.number=f.startNumber;f.eqlabels={};f.badref=false;if(f.refUpdate){f.number=h.script.MathJax.startNumber}});g.postfilterHooks.Add(function(h){h.script.MathJax.startNumber=f.startNumber;f.startNumber=f.number;MathJax.Hub.Insert(f.labels,f.eqlabels);if(f.badref&&!h.math.texError){f.refs.push(h.script)}});MathJax.Hub.Register.MessageHook("Begin Math Input",function(){f.refs=[];f.refUpdate=false});MathJax.Hub.Register.MessageHook("End Math Input",function(k){if(f.refs.length){f.refUpdate=true;for(var j=0,h=f.refs.length;j<h;j++){f.refs[j].MathJax.state=MathJax.ElementJax.STATE.UPDATE}return MathJax.Hub.processInput(f.refs)}return null});MathJax.Hub.Startup.signal.Post("TeX AMSmath Ready")});MathJax.Ajax.loadComplete("[MathJax]/extensions/TeX/AMSmath.js");

