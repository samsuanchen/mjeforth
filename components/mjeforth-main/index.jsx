var kde=Require("ksana-document").kde;
var kse=Require("ksana-document").kse;
var bootstrap=Require("bootstrap");
var jefvm=Require("jefvm");
var main = React.createClass({
  getInitialState:function(){
    console.log('jefvm.v3',jefvm.v3)
    return {lenSys:0,lenExt:0,lenTst:0};
  },
  render: function() {
    return (
      <div className="main">
      Trying mjeforth!<pre id="jefLog"></pre>
<button type="button" onclick="onClick()">run jeforth</button>
<button type="button" onclick="prevInp()">&lt;</button>
<button type="button" onclick="nextInp()">&gt;</button>
<button type="button" onclick="clearJefTst()">clear</button>
<button type="button" onclick="saveJefTst()">save</button><br/><br/>
<textarea id="jefTst" value="svg append circle r 42   cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append circle r 54   cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append circle r 72.2 cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append circle r 112  cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append circle r 123  cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append g  id myGraph1\ng append circle r 5 cx 70 cy 70\ng append line x1 70 y1 70 x2 130 y2 130 style stroke:red;stroke-width:.5\ng append line x1 70 y1 70 x2 10 y2 130 style stroke:red;stroke-width:.5\ng append text transform rotate(19,5,40) x 10 y 25\ntext  append tspan  fill blue  text  我\ntext  append tspan  fill green text  愛\ntext  append tspan  fill brown text  偕伊\ntext  append tspan  fill red   text  符式\ntext  append tspan  fill blue  text  I   x 52 y 1\ntext  append tspan  fill green text  love  x 62 y 1\ntext  append tspan  fill brown text  je  x 85 y 1\ntext  append tspan  fill red   text  forth x 97 y 1\ng append rect stroke red fill rgba(255,100,100,.1) x 10 y 10 height 120 width 120\nsvg append g  id myTest1  transform translate(40,40),rotate(0,110,60)\ng append use  xlink:href #myGraph1"></textarea>
<br/><br/>
<svg>
</svg>
      </div>
      );
  }
});
module.exports=main;