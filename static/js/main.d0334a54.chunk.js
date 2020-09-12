(this.webpackJsonpg2i=this.webpackJsonpg2i||[]).push([[0],{60:function(e,n,t){e.exports=t(93)},93:function(e,n,t){"use strict";t.r(n);var r,a=t(0),o=t.n(a),c=t(27),i=t.n(c),u=t(20),l=t(18),d=t(14),s=t(59),f=t(22);!function(e){e.FETCH_QUESTIONS="@questions/FETCH_QUESTIONS",e.FETCH_QUESTIONS_SUCCESS="@questions/FETCH_QUESTIONS_SUCCESS",e.FETCH_QUESTIONS_ERROR="@questions/FETCH_QUESTIONS_ERROR"}(r||(r={}));var m,b={data:[],error:!1,loading:!0},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case r.FETCH_QUESTIONS:return Object(f.a)(Object(f.a)({},e),{},{loading:!0,error:!1});case r.FETCH_QUESTIONS_SUCCESS:return Object(f.a)(Object(f.a)({},n.payload),{},{loading:!1,error:!1});case r.FETCH_QUESTIONS_ERROR:return Object(f.a)(Object(f.a)({},e),{},{loading:!1,error:!0});default:return e}},p=t(58);!function(e){e.RESET_ANSWERS="@answers/RESET_ANSWERS",e.ANSWER_QUESTION="@answers/ANSWER_QUESTION"}(m||(m={}));var g={data:[]},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case m.RESET_ANSWERS:return{data:[]};case m.ANSWER_QUESTION:return{data:[].concat(Object(p.a)(e.data),[n.payload])};default:return e}},x=Object(d.c)({questions:h,answers:v}),E=t(15),O=t.n(E),S=t(17),j=t(50),y=t.n(j).a.create({baseURL:"https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean"}),T=t(21),w=function(){return Object(T.action)(r.FETCH_QUESTIONS_ERROR)},k=O.a.mark(C);function C(){var e,n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(S.b)(y.get,"");case 3:if(n=t.sent,0===(null===(e=n.data)||void 0===e?void 0:e.response_code)){t.next=7;break}return t.next=7,Object(S.c)(w());case 7:return t.next=9,Object(S.c)((a=n.data.results,Object(T.action)(r.FETCH_QUESTIONS_SUCCESS,{data:a})));case 9:t.next=15;break;case 11:return t.prev=11,t.t0=t.catch(0),t.next=15,Object(S.c)(w());case 15:case"end":return t.stop()}var a}),k,null,[[0,11]])}var q=O.a.mark(_);function _(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(S.a)([Object(S.d)(r.FETCH_QUESTIONS,C)]);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),q)}var z=_,R=Object(s.a)(),B=Object(d.e)(x,Object(d.a)(R));R.run(z);var F,N=B,I=t(37),U=t(26),Q=function(e){return window.localStorage.getItem(e)},H=function(e,n){return window.localStorage.setItem(e,n)},P={en_US:{translation:{general:{loading:"Loading...",notFound:"Page not found."},quiz:{homeTitle:"Trivia Challenge",homeSubTitle:"Welcome!",homeDescription:"You will be presented with 10 True or False questions",homeChallenge:"Can you score 100%?",homeButtonStart:"Begin",quizButtonTrue:"True",quizButtonFalse:"False",quizCounterPreposition:"of",resultsTitle:"You scored",resultsButtonRetry:"Play Again"}}},pt_BR:{translation:{general:{loading:"Carregando...",notFound:"P\xe1gina n\xe3o encontrada."},quiz:{homeTitle:"Desafio de Trivia",homeSubTitle:"Bem-vindo(a)!",homeDescription:"S\xe3o 10 quest\xf5es que voc\xea deve responder com Verdadeiro ou Falso",homeChallenge:"Voc\xea consegue acertar 100%?",homeButtonStart:"Iniciar",quizButtonTrue:"Verdadeiro",quizButtonFalse:"Falso",quizCounterPreposition:"de",resultsTitle:"Resultado",resultsButtonRetry:"Jogar Novamente"}}}},L=null!==(F=Q("quizLanguage"))&&void 0!==F?F:"en_US";I.a.use(U.e).init({resources:P,interpolation:{escapeValue:!1},lng:L});I.a;var A=t(7),W=t(94),D=t(13),V=t(4),J=t(3);function Y(){var e=Object(V.a)(["\n  color: ",";\n  margin: 0;\n"]);return Y=function(){return e},e}var M=J.d.p(Y(),(function(e){return e.theme.colors.text}));function G(){var e=Object(V.a)(["\n      border-color: transparent;\n      left: ","px;\n    "]);return G=function(){return e},e}function K(){var e=Object(V.a)(["\n  width: 40px;\n  height: 21px;\n  background-color: ",';\n  border-radius: 100px;\n  margin-right: 0.5rem;\n  margin-left: 0.5rem;\n  position: relative;\n  flex-shrink: 0;\n\n  &::after {\n    content: " ";\n    position: absolute;\n    width: 18px;\n    height: 18px;\n    border-radius: 100%;\n    background-color: #fff;\n    border: 1px solid ',";\n    left: 2px;\n    top: 2px;\n    box-sizing: border-box;\n    transition: all 0.2s ease;\n    ","\n  }\n}"]);return K=function(){return e},e}function X(){var e=Object(V.a)(["\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n  background-color: transparent;\n  border: none;\n  padding: 0;\n"]);return X=function(){return e},e}var Z=J.d.button.attrs({type:"button"})(X()),$=J.d.div(K(),(function(e){return e.theme.colors.control}),(function(e){return e.theme.colors.control}),(function(e){return e.switched&&Object(J.c)(G(),20)})),ee=function(e){var n=e.value,t=e.onChange,r=e.labelLeft,a=e.labelRight,c=e.labelLeftProps,i=e.labelRightProps,u=e.disabled;return o.a.createElement("div",null,o.a.createElement(Z,{disabled:u,onClick:function(){u||t(!n)}},r&&o.a.createElement(M,Object.assign({as:"span"},c),r," "),o.a.createElement($,{switched:n,disabled:u}),a&&o.a.createElement(M,Object.assign({as:"span"},i)," ",a)))};function ne(){var e=Object(V.a)(["\n        align-items: ",";\n    "]);return ne=function(){return e},e}function te(){var e=Object(V.a)(["\n    display: flex;\n    flex-direction: ",";\n    justify-content: space-between;\n    width: 100%;\n    min-height: 48px;\n    ","\n"]);return te=function(){return e},e}var re=J.d.div(te(),(function(e){return!0===e.vertical?"column":"row"}),(function(e){return e.alignItems&&Object(J.c)(ne(),(function(e){return e.alignItems}))})),ae=function(e){var n=e.children,t=e.alignItems,r=e.vertical;return o.a.createElement(re,{alignItems:t,vertical:r},n)};function oe(){var e=Object(V.a)(["\n  padding-bottom: 16px;\n  min-height: 62px;\n"]);return oe=function(){return e},e}var ce=J.d.div(oe()),ie=function(e){var n=e.theme,t=e.language,r=e.onChangeTheme,a=e.onChangeLanguage;return o.a.createElement(ce,null,o.a.createElement(ae,{vertical:!0,alignItems:"center"},o.a.createElement(ee,{value:"pt_BR"===t,labelLeft:"EN",labelRight:"PT",disabled:!1,onChange:function(e){return a(e)}}),o.a.createElement(ee,{value:"dark"===n,labelLeft:"Light",labelRight:"Dark",disabled:!1,onChange:function(e){return r(e)}})))};function ue(){var e=Object(V.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n  body {\n    background-color: ",";\n    display: flex;\n    align-items: center;\n    font-family: ",";\n    justify-content: center;\n    text-align: center;\n  }\n"]);return ue=function(){return e},e}var le,de=Object(J.b)(ue(),(function(e){return e.theme.colors.bodyBackground}),(function(e){return e.theme.fonts.primary})),se={colors:{primary:"#44a9ff",success:"#2ac498",error:"#f33236",text:"#2d3956",control:"#C0D0E6",icon:"#7F8B97",bodyBackground:"#fafafa",sectionBackground:"#e0e0e0",handheldBackground:"#cec9cc",handheldBackgroundSecondary:"#908a99",handheldText:"#211a21",handheldPrimary:"#b5b6e4",handheldSecondary:"#4f43ae",handheldSecondaryShadow:"#352d75"},fonts:{primary:"'Helvetica Now', Helvetica, Arial, sans-serif",secondary:"'Press Start 2P', cursive"}},fe={colors:{primary:"#00b9be",success:"#2ac498",error:"#ff0033",text:"#9ff4e5",control:"#C0D0E6",icon:"#7F8B97",bodyBackground:"#57001a",sectionBackground:"#002b59",handheldBackground:"#cec9cc",handheldBackgroundSecondary:"#908a99",handheldText:"#211a21",handheldPrimary:"#b5b6e4",handheldSecondary:"#4f43ae",handheldSecondaryShadow:"#352d75"},fonts:{primary:"'Helvetica Now', Helvetica, Arial, sans-serif",secondary:"'Press Start 2P', cursive"}};var me=Object(a.createContext)({}),be=null!==(le=Q("quizTheme"))&&void 0!==le?le:"light",he=function(e){var n=e.children,t=function(e){var n=Object(a.useState)(e),t=Object(D.a)(n,2),r=t[0],o=t[1];return Object(a.useEffect)((function(){H("quizTheme",r)}),[r]),[r,function(){return o("light"===r?"dark":"light")}]}(be),r=Object(D.a)(t,2),c=r[0],i=r[1],u={dark:fe,light:se};return o.a.createElement(me.Provider,{value:{selectedTheme:c,setSelectedTheme:i}},o.a.createElement(J.a,{theme:u[c]},o.a.createElement(de,null),n))};function pe(){var e=Object(V.a)(["\n    display: flex;\n    flex-direction: column;\n    padding: 20px;\n    height: 100%;\n    min-height: 560px;\n    width: 360px;\n    background-color: ",";\n    box-shadow: 5px 5px rgba(0,0,0,0.3);\n    border-radius: 10px 10px 60px 10px;\n"]);return pe=function(){return e},e}var ge,ve=J.d.div(pe(),(function(e){return e.theme.colors.handheldBackground})),xe=t(56);var Ee=null!==(ge=Q("quizLanguage"))&&void 0!==ge?ge:"en_US";function Oe(e){var n=e.children,t=function(e){var n=Object(a.useState)(e),t=Object(D.a)(n,2),r=t[0],o=t[1],c=Object(W.a)().i18n,i=function(){var e=Object(xe.a)(O.a.mark((function e(n){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n?"pt_BR":"en_US",e.next=3,c.changeLanguage(t);case 3:o(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return H("quizLanguage",r)}),[r]),[r,i]}(Ee),r=Object(D.a)(t,2),c=r[0],i=r[1],u=Object(a.useContext)(me),l=u.selectedTheme,d=u.setSelectedTheme;return o.a.createElement(o.a.Fragment,null,o.a.createElement(ie,{theme:l,language:c,onChangeTheme:d,onChangeLanguage:i}),o.a.createElement(ve,null,n))}function Se(){var e=Object(V.a)(["\n    transform: rotate(-11deg);\n    width: 50%;\n    display: flex;\n    //justify-content: space-between;\n    //background-color: ",";\n    padding: 12px;\n    border-radius: 30px;\n    box-shadow: inset 1px 1px rgba(0,0,0,0.06);\n    margin-bottom: 1rem;\n"]);return Se=function(){return e},e}function je(){var e=Object(V.a)(["\n    transform: rotate(-11deg);\n    width: 50%;\n    display: flex;\n    justify-content: space-between;\n    background-color: ",";\n    padding: 12px;\n    border-radius: 30px;\n    box-shadow: inset 1px 1px rgba(0,0,0,0.06);\n    margin-bottom: 1rem;\n"]);return je=function(){return e},e}function ye(){var e=Object(V.a)(["\n    display: flex;\n    //justify-content: flex-end;\n    width: 100%;\n"]);return ye=function(){return e},e}var Te=J.d.div(ye()),we=J.d.div(je(),(function(e){return e.theme.colors.handheldBackgroundSecondary})),ke=J.d.div(Se(),(function(e){return e.theme.colors.handheldBackgroundSecondary})),Ce=function(e){var n=e.children;return o.a.createElement(Te,null,o.a.createElement(ke,null,n),o.a.createElement(we,null,n))};function qe(){var e=Object(V.a)(["\nwidth: 48px;\nheight: 48px;\n  text-decoration: none;\n  display: block;\n  padding: 15px;\n  font-family: ",";\n  font-size: 1rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: #fff;\n  background-color: ",";\n  border: none;\n  border-radius: 100%;\n  cursor: pointer;\n  box-shadow: 0px 4px 0px ",";\n\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.8;\n    color: #d1d1d1;\n  }\n  \n  &:active{\n    box-shadow: 0px 2px 0px ",";\n    position: relative;\n    top: 2px;\n}\n"]);return qe=function(){return e},e}var _e=Object(J.d)(l.b)(qe(),(function(e){return e.theme.fonts.handheldtext}),(function(e){return e.theme.colors.handheldSecondary}),(function(e){return e.theme.colors.handheldSecondaryShadow}),(function(e){return e.theme.colors.handheldSecondaryShadow})),ze=function(e){return o.a.createElement(_e,e)};function Re(){var e=Object(V.a)(["\n    color: ",";\n    min-height: 56px;\n    font-family: ",";\n"]);return Re=function(){return e},e}var Be=J.d.h1(Re(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.fonts.secondary}));function Fe(){var e=Object(V.a)(["\n    height: 400px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    box-shadow: inset 3px 3px rgba(0,0,0,0.15);\n    padding: 1rem;\n    margin-bottom: 46px;\n    margin-left: auto;\n    margin-right: auto;\n    background: #bdae58;\n"]);return Fe=function(){return e},e}function Ne(){var e=Object(V.a)(["\n    position: relative;\n    top: 60px;\n    left: 40px;\n    width: 342px;\n    height: 272px;\n    margin-bottom: 58px;\n    background-color: #777;\n    border-radius: 13px 13px 50px 13px;\n"]);return Ne=function(){return e},e}function Ie(){var e=Object(V.a)(["\n    font-family: ",";\n    color: ",";\n    font-size: 1rem;\n    padding-bottom: 28px;\n"]);return Ie=function(){return e},e}var Ue=J.d.p(Ie(),(function(e){return e.theme.fonts.secondary}),(function(e){return e.theme.colors.text})),Qe=(J.d.div(Ne()),J.d.div(Fe()));function He(){var e=Object(W.a)().t;return o.a.createElement(Oe,null,o.a.createElement(Qe,null,o.a.createElement(Be,null,e("quiz.homeTitle")),o.a.createElement(Ue,null,e("quiz.homeSubTitle")),o.a.createElement(Ue,null,e("quiz.homeDescription")),o.a.createElement(Ue,null,e("quiz.homeChallenge"))),o.a.createElement(Ce,null,o.a.createElement(ze,{to:"".concat("/react-ts-trivia-game","/quiz")},"A"),o.a.createElement(ze,{to:"".concat("/react-ts-trivia-game","/quiz")},"B")))}function Pe(){var e=Object(V.a)(["\n  display: block;\n  padding: 15px;\n  font-family: ",";\n  font-size: 1.1rem;\n  font-weight: bold;\n  text-transform: uppercase;\n  color: ",";\n  background-color: transparent;\n  border: 2pt solid ",";\n  border-radius: 4px;\n  cursor: pointer;\n  min-width: 153px;\n  &[disabled] {\n    cursor: not-allowed;\n    opacity: 0.7;\n    color: #d1d1d1;\n  }\n"]);return Pe=function(){return e},e}var Le=J.d.button(Pe(),(function(e){return e.theme.fonts.primary}),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary})),Ae=function(e){var n=e.title,t=e.disabled,r=e.onClick;return o.a.createElement(Le,{title:n,disabled:t,onClick:r},n)};function We(){var e=Object(V.a)(["\n    padding: 30px;\n    font-size: 1.5rem;\n"]);return We=function(){return e},e}function De(){var e=Object(V.a)(["\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    line-height: 1.4;\n    font-size: 1.3rem;\n    color: ",";\n    padding: 16px;\n    border: 1pt solid ",";\n    border-radius: 4px;\n    height: 260px;\n    width: 260px;\n    margin: 20px auto auto;\n    word-break: break-word;\n"]);return De=function(){return e},e}var Ve=J.d.p(De(),(function(e){return e.theme.colors.text}),(function(e){return e.theme.colors.text})),Je=J.d.div(We()),Ye=t(31),Me=t.n(Ye),Ge=function(e){var n=e.question,t=e.currentQuestion,r=e.totalQuestions,a=Object(W.a)().t;return o.a.createElement(o.a.Fragment,null,o.a.createElement(Ve,null,Me.a.decode(n)),o.a.createElement(Je,null,o.a.createElement(M,null,"".concat(t," ").concat(a("quiz.quizCounterPreposition")," ").concat(r)," ")))};function Ke(){var e=Object(V.a)(["\n  width: 2.5rem;\n  height: 2.5rem;\n  border-top-color: ",";\n  border-left-color: ",";\n  animation: "," 600ms linear infinite;\n  border-bottom-color: transparent;\n  border-right-color: transparent;\n  border-style: solid;\n  border-width: 3px;\n  border-radius: 50%;  \n  box-sizing: border-box;\n  display: inline-block;\n  vertical-align: middle;\n  margin: auto;\n"]);return Ke=function(){return e},e}function Xe(){var e=Object(V.a)(["\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n"]);return Xe=function(){return e},e}var Ze=Object(J.e)(Xe()),$e=J.d.div(Ke(),(function(e){return e.theme.colors.primary}),(function(e){return e.theme.colors.primary}),Ze);function en(){var e=Object(u.c)((function(e){return e.questions})),n=Object(a.useState)(0),t=Object(D.a)(n,2),c=t[0],i=t[1],l=Object(W.a)().t,d=Object(u.b)(),s=Object(A.g)(),f=function(n){var t={question:e.data[c].question,correct:n===e.data[c].correct_answer};d(function(e){return Object(T.action)(m.ANSWER_QUESTION,e)}(t)),c+1<e.data.length?i(c+1):s.push("".concat("/react-ts-trivia-game","/results"))};return Object(a.useEffect)((function(){d(Object(T.action)(r.FETCH_QUESTIONS)),d(Object(T.action)(m.RESET_ANSWERS))}),[d]),e.loading?o.a.createElement($e,null):o.a.createElement(o.a.Fragment,null,o.a.createElement(Be,{as:"h2"},e.data[c].category),o.a.createElement(Ge,{totalQuestions:e.data.length,currentQuestion:c+1,question:e.data[c].question}),o.a.createElement(ae,null,o.a.createElement(Ae,{title:l("quiz.quizButtonFalse"),onClick:function(){return f("False")}}),o.a.createElement(Ae,{title:l("quiz.quizButtonTrue"),onClick:function(){return f("True")}})))}function nn(){return o.a.createElement(Oe,null,o.a.createElement(en,null))}function tn(){var e=Object(V.a)(["\n    padding-left: 1em;\n    text-indent: -0.8em;\n    margin-bottom: 1rem;\n    text-align: left;\n    color: ",";\n"]);return tn=function(){return e},e}function rn(){var e=Object(V.a)(["\n    max-height: 320px;\n    overflow: auto;\n    list-style: none;\n    margin-left: 0;\n    padding-left: 0;\n    margin-bottom: 25px;\n"]);return rn=function(){return e},e}function an(){var e=Object(V.a)(["\n    min-height: 446px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n"]);return an=function(){return e},e}function on(){var e=Object(V.a)(["\n    color: ",";\n    font-size: 1.4rem;\n    padding-bottom: 38px;\n"]);return on=function(){return e},e}J.d.p(on(),(function(e){return e.theme.colors.text}));var cn=J.d.div(an()),un=J.d.ul(rn()),ln=J.d.li(tn(),(function(e){return e.correct?e.theme.colors.success:e.theme.colors.error}));function dn(){var e=Object(W.a)().t,n=Object(u.c)((function(e){return e.answers.data})),t=n.filter((function(e){return e.correct}));return 0===n.length?o.a.createElement(A.a,{push:!0,to:"".concat("/react-ts-trivia-game","/")}):o.a.createElement(Oe,null,o.a.createElement(cn,null,o.a.createElement(Be,null,e("quiz.resultsTitle")),o.a.createElement(M,{as:"h1"},t.length," / ",n.length),o.a.createElement(un,null,n.map((function(e,n){return o.a.createElement(ln,{key:n,correct:e.correct},e.correct?" + ":" - ",Me.a.decode(e.question))})))),o.a.createElement(ze,{to:"".concat("/react-ts-trivia-game","/")},e("quiz.resultsButtonRetry")))}function sn(){var e=Object(W.a)().t;return o.a.createElement(Be,null,e("general.notFound"))}function fn(){return o.a.createElement(A.d,null,o.a.createElement(A.b,{exact:!0,path:"".concat("/react-ts-trivia-game","/"),component:He}),o.a.createElement(A.b,{path:"".concat("/react-ts-trivia-game","/quiz"),component:nn}),o.a.createElement(A.b,{path:"".concat("/react-ts-trivia-game","/results"),component:dn}),o.a.createElement(A.b,{component:sn}))}var mn=function(){return o.a.createElement(u.a,{store:N},o.a.createElement(l.a,null,o.a.createElement(he,null,o.a.createElement(fn,null))))};i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(mn,null)),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.d0334a54.chunk.js.map