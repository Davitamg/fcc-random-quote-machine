(this.webpackJsonprandom=this.webpackJsonprandom||[]).push([[0],{35:function(e,t,n){e.exports=n(51)},40:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),o=n(9),c=n.n(o),r=(n(40),n(21)),i=n(22),u=n(13),l=n(31),d=n(30),h=n(75),m=n(72),f=n(76),b=n(73),g=n(71),x=n(23),p=n(28),w=function(e){var t=e.assignNewQuoteMethod,n=e.selectedQuote;return s.a.createElement(f.a,{id:"text"},s.a.createElement(g.a,null,s.a.createElement(m.a,{variant:"h5",color:"secondary"},'" ',n.quote,'" ---'," ",s.a.createElement("span",{id:"author"},n.author," "))),s.a.createElement(b.a,null,s.a.createElement(h.a,{id:"new-quote",size:"small",onClick:t},"Next Quote"),s.a.createElement(h.a,{color:"primary",target:"_blank",id:"tweet-quote",href:encodeURI("https://twitter.com/intent/tweet?text=".concat(n.quote))},s.a.createElement(x.a,{icon:p.a,size:"md"}))))},E=n(29),I=(n(49),n(74)),Q=n(5),q=(n(50),function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={quotes:[],selectedIndex:null},a.selectedIndex=a.selectedIndex.bind(Object(u.a)(a)),a.assignNewQuoteMethod=a.assignNewQuoteMethod.bind(Object(u.a)(a)),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(e){return e.json()})).then((function(t){return e.setState({quotes:t},e.assignNewQuoteMethod)}))}},{key:"selectedIndex",value:function(){if(this.state.quotes.length)return Object(E.random)(0,this.state.quotes.length-1)}},{key:"assignNewQuoteMethod",value:function(){this.setState({selectedIndex:this.selectedIndex()})}},{key:"render",value:function(){return console.log(this.state.selectedIndex),s.a.createElement(I.a,{className:this.props.classes.root,id:"quote-box",justify:"center",container:!0},s.a.createElement(I.a,{xs:11,lg:4,item:!0},this.selectedQuote?s.a.createElement(w,{selectedQuote:this.selectedQuote,assignNewQuoteMethod:this.assignNewQuoteMethod}):null))}},{key:"selectedQuote",get:function(){if(this.state.quotes.length&&Number.isInteger(this.state.selectedIndex))return this.state.quotes[this.state.selectedIndex]}}]),n}(s.a.Component)),j=Object(Q.a)({root:{alignItems:"center",display:"flex",height:"100vh",color:"red"}})(q);c.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(j,null)),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.9bf4b877.chunk.js.map