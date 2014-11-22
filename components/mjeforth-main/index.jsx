//var kde=Require("ksana-document").kde;
//var kse=Require("ksana-document").kse;
//var bootstrap=Require("bootstrap");
//var d3=Require("d3"); 
var jefvm = Require("jefvm");
vm.circles =
  [{move:1,dx:5,dy:4,r:50,cx:150,cy:100,stroke:'black',fill:'yellow',stroke_width:1}
  ,{move:1,dx:Math.random()*5,dy:Math.random()*5,r:5,cx:  5,cy:  5,stroke:'#000',fill:'#f00',stroke_width:1}
  ,{move:1,dx:Math.random()*5,dy:Math.random()*5,r:5,cx:  5,cy:190,stroke:'#000',fill:'#ff0',stroke_width:1}
  ,{move:1,dx:Math.random()*5,dy:Math.random()*5,r:5,cx:290,cy:190,stroke:'#000',fill:'#0f0',stroke_width:1}
  ,{move:1,dx:Math.random()*5,dy:Math.random()*5,r:5,cx:290,cy:  5,stroke:'#000',fill:'#00f',stroke_width:1}
  ];
vm.updateCircles = function(){

}
var stepChange = function(circle) {
  circle.cx+=circle.dx,circle.cy+=circle.dy;
  return circle;
}
var stepAdjust = function(circle) {
  var r=circle.r,cx=circle.cx,cy=circle.cy;
  if(cx<r||cx>300-r)circle.dx=-circle.dx; if(cy<r||cy>200-r)circle.dy=-circle.dy;
  return circle;
}
var main = React.createClass({
  stepMove: function (){ var circles,r,dx,dy,cx,cy;
      vm.circles=circles=vm.circles.map(function(circle){
        if(circle.move) {
          r=circle.r;
          dx=circle.dx,circle.cx=cx=circle.cx+dx;
          dy=circle.dy,circle.cy=cy=circle.cy+dy;
          if(cx<r)
            circle.dx=-dx,circle.cx=r+r-cx;
          else if(cx>300-r)
            circle.dx=-dx,circle.cx=600-r-cx-r;
          if(cy<r)
            circle.dy=-dy,circle.cy=r+r-cy;
          else if(cy>200-r)
            circle.dy=-dy,circle.cy=400-r-cy-r;
        }
        return circle;
      });
      this.setState({circles:circles});
  },
  onToggleClick: function (){
    if (this.T)
        clearInterval(this.T), this.T=0;
    else
        this.T=setInterval(this.stepMove,20);
  },
  onCircleClick: function (e){
    var circles=vm.circles, circle=circles[parseInt(e.target.id.match(/\d+$/)[0])];
    circle.move=1-circle.move;
    this.setState({circles:circles});
  },
  renderCircles: function(circles) {
    var that=this;
    return circles.map(function(circle,i){
      return (
      <circle id={'circle'+i} onClick={that.onCircleClick}
        r={circle.r} cx={circle.cx} cy={circle.cy}
        stroke={circle.stroke} fill={circle.fill}
        stroke-width={circle.stroke_width}>
      </circle>
      );
    });
  },
  getInitialState:function(){
    return {circles:vm.circles,
      txt:"svg append circle r 42   cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append circle r 54   cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append circle r 72.2 cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append circle r 112  cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append circle r 123  cx 150 cy 100 fill rgba(255,255,0,.1) stroke black stroke-width .5\nsvg append g  id myGraph1\ng append circle r 5 cx 70 cy 70\ng append line x1 70 y1 70 x2 130 y2 130 style stroke:red;stroke-width:.5\ng append line x1 70 y1 70 x2 10 y2 130 style stroke:red;stroke-width:.5\ng append text transform rotate(19,5,40) x 10 y 25\ntext  append tspan  fill blue  text  我\ntext  append tspan  fill green text  愛\ntext  append tspan  fill brown text  偕伊\ntext  append tspan  fill red   text  符式\ntext  append tspan  fill blue  text  I   x 52 y 1\ntext  append tspan  fill green text  love  x 62 y 1\ntext  append tspan  fill brown text  je  x 85 y 1\ntext  append tspan  fill red   text  forth x 97 y 1\ng append rect stroke red fill rgba(255,100,100,.1) x 10 y 10 height 120 width 120\nsvg append g  id myTest1  transform translate(40,40),rotate(0,110,60)\ng append use  xlink:href #myGraph1\ncode to function(){\n  eval('vm[\"'+vm.nextToken()+'\"]='+vm.dStack.pop());\n} end-code\ncode doJs function(str){ // dojs eval inline str (but also given str)\n var s= str===undefined ? vm.cArea[vm.ip++] : str;\n vm.dStack.push(eval(s));\n} end-code\ncode js function(){\n var t=vm.nextToken();\n if(vm.compiling)vm.compileCode('doJs',t);\n else vm.nameWord.doJs.xt(t);\n} end-code immediate\ncode stop function(){\n clearInterval(vm.timestamp);\n} end-code\ncode inc function(){\n  var m=d3.select('#myTest1'), o=m.attr('transform').substr(t0.length);\n var n=(parseFloat(o)+0.24)%360, t=t0+n.toFixed(2)+t1;\n m.attr('transform',t);\n} end-code\ncode go function(){\n vm.timestamp=setInterval(vm.nameWord.inc.xt,20);\n  var g=d3.select('#myGraph1');\n if(g)\n   setTimeout(function(){g.remove();},25);\n} end-code go"};
  },
  render: function() {
    return (
      <div className="main">
        <pre id="jefLog"></pre>
<button type="button" onClick={this.onToggleClick}>toggle</button>
<textarea id="jefTst" defaultValue={this.state.txt}></textarea>
<br/><br/>
<svg>{this.renderCircles(this.state.circles)}
</svg>
      </div>
      );
  }
});
module.exports=main;