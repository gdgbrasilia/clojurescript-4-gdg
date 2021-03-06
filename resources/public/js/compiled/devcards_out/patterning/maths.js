// Compiled by ClojureScript 1.9.229 {}
goog.provide('patterning.maths');
goog.require('cljs.core');
patterning.maths.PI = Math.PI;
patterning.maths.half_PI = (patterning.maths.PI / (2));
patterning.maths.q_PI = (patterning.maths.PI / (4));
patterning.maths.sqrt = (function patterning$maths$sqrt(x){
return Math.sqrt(x);
});
patterning.maths.abs = (function patterning$maths$abs(n){
var x__27141__auto__ = n;
var y__27142__auto__ = (- n);
return ((x__27141__auto__ > y__27142__auto__) ? x__27141__auto__ : y__27142__auto__);
});
patterning.maths.atan2 = (function patterning$maths$atan2(x,y){
return Math.atan2(x,y);
});
patterning.maths.cos = (function patterning$maths$cos(a){
return Math.cos(a);
});
patterning.maths.sin = (function patterning$maths$sin(a){
return Math.sin(a);
});
patterning.maths.clock_angles = (function patterning$maths$clock_angles(number){
return cljs.core.take.call(null,number,cljs.core.iterate.call(null,(function (a){
return (a + (((2) * patterning.maths.PI) / number));
}),(- patterning.maths.PI)));
});
/**
 * transform a scalar from one space to another. o1 is origin min, o2 is origin max, t1 is target min, t2 is target max
 */
patterning.maths.tx = (function patterning$maths$tx(o1,o2,t1,t2,x){
return ((((x - o1) / (o2 - o1)) * (t2 - t1)) + t1);
});
/**
 * more or less equal
 */
patterning.maths.mol_EQ_ = (function patterning$maths$mol_EQ_(x,y){
return (patterning.maths.abs.call(null,(x - y)) < 1.0E-6);
});
/**
 * more or less equal points
 */
patterning.maths.molp_EQ_ = (function patterning$maths$molp_EQ_(p__34390,p__34391){
var vec__34398 = p__34390;
var x1 = cljs.core.nth.call(null,vec__34398,(0),null);
var y1 = cljs.core.nth.call(null,vec__34398,(1),null);
var vec__34401 = p__34391;
var x2 = cljs.core.nth.call(null,vec__34401,(0),null);
var y2 = cljs.core.nth.call(null,vec__34401,(1),null);
var and__26796__auto__ = patterning.maths.mol_EQ_.call(null,x1,x2);
if(cljs.core.truth_(and__26796__auto__)){
return patterning.maths.mol_EQ_.call(null,y1,y2);
} else {
return and__26796__auto__;
}
});
/**
 * more or less equal vectors
 */
patterning.maths.mol_EQ_v = (function patterning$maths$mol_EQ_v(xs,ys){
return cljs.core.every_QMARK_.call(null,(function (p__34408){
var vec__34409 = p__34408;
var x = cljs.core.nth.call(null,vec__34409,(0),null);
var y = cljs.core.nth.call(null,vec__34409,(1),null);
return patterning.maths.mol_EQ_.call(null,x,y);
}),cljs.core.map.call(null,cljs.core.vector,xs,ys));
});
/**
 * floating point equality
 */
patterning.maths.f_eq = (function patterning$maths$f_eq(a,b){
return (patterning.maths.abs.call(null,(a - b)) <= 1.0E-5);
});
/**
 * point equality
 */
patterning.maths.p_eq = (function patterning$maths$p_eq(p__34412,p__34413){
var vec__34420 = p__34412;
var x1 = cljs.core.nth.call(null,vec__34420,(0),null);
var y1 = cljs.core.nth.call(null,vec__34420,(1),null);
var vec__34423 = p__34413;
var x2 = cljs.core.nth.call(null,vec__34423,(0),null);
var y2 = cljs.core.nth.call(null,vec__34423,(1),null);
var and__26796__auto__ = patterning.maths.f_eq.call(null,x1,x2);
if(cljs.core.truth_(and__26796__auto__)){
return patterning.maths.f_eq.call(null,y1,y2);
} else {
return and__26796__auto__;
}
});
patterning.maths.add_points = (function patterning$maths$add_points(p__34426,p__34427){
var vec__34434 = p__34426;
var x1 = cljs.core.nth.call(null,vec__34434,(0),null);
var y1 = cljs.core.nth.call(null,vec__34434,(1),null);
var vec__34437 = p__34427;
var x2 = cljs.core.nth.call(null,vec__34437,(0),null);
var y2 = cljs.core.nth.call(null,vec__34437,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
patterning.maths.diff = (function patterning$maths$diff(p__34440,p__34441){
var vec__34448 = p__34440;
var x1 = cljs.core.nth.call(null,vec__34448,(0),null);
var y1 = cljs.core.nth.call(null,vec__34448,(1),null);
var vec__34451 = p__34441;
var x2 = cljs.core.nth.call(null,vec__34451,(0),null);
var y2 = cljs.core.nth.call(null,vec__34451,(1),null);
var dx = (x2 - x1);
var dy = (y2 - y1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null);
});
patterning.maths.magnitude = (function patterning$maths$magnitude(p__34454){
var vec__34458 = p__34454;
var dx = cljs.core.nth.call(null,vec__34458,(0),null);
var dy = cljs.core.nth.call(null,vec__34458,(1),null);
return patterning.maths.sqrt.call(null,((dx * dx) + (dy * dy)));
});
patterning.maths.distance = (function patterning$maths$distance(p1,p2){
return cljs.core.comp.call(null,patterning.maths.magnitude,patterning.maths.diff).call(null,p1,p2);
});
patterning.maths.unit = (function patterning$maths$unit(p__34461){
var vec__34465 = p__34461;
var dx = cljs.core.nth.call(null,vec__34465,(0),null);
var dy = cljs.core.nth.call(null,vec__34465,(1),null);
var m = patterning.maths.magnitude.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [dx,dy], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(dx / m),(dy / m)], null);
});
patterning.maths.rev = (function patterning$maths$rev(p__34468){
var vec__34472 = p__34468;
var dx = cljs.core.nth.call(null,vec__34472,(0),null);
var dy = cljs.core.nth.call(null,vec__34472,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(- dx),(- dy)], null);
});
patterning.maths.rec_to_pol = (function patterning$maths$rec_to_pol(p__34475){
var vec__34479 = p__34475;
var x = cljs.core.nth.call(null,vec__34479,(0),null);
var y = cljs.core.nth.call(null,vec__34479,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [patterning.maths.sqrt.call(null,((x * x) + (y * y))),patterning.maths.atan2.call(null,x,y)], null);
});
patterning.maths.pol_to_rec = (function patterning$maths$pol_to_rec(p__34482){
var vec__34486 = p__34482;
var r = cljs.core.nth.call(null,vec__34486,(0),null);
var a = cljs.core.nth.call(null,vec__34486,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r * patterning.maths.cos.call(null,a)),(r * patterning.maths.sin.call(null,a))], null);
});
patterning.maths.line_to_segments = (function patterning$maths$line_to_segments(points){
if(cljs.core.empty_QMARK_.call(null,points)){
return cljs.core.PersistentVector.EMPTY;
} else {
var p = cljs.core.first.call(null,points);
var ps = cljs.core.rest.call(null,points);
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,ps)){
return acc;
} else {
var G__34489 = cljs.core.first.call(null,ps);
var G__34490 = cljs.core.rest.call(null,ps);
var G__34491 = cljs.core.conj.call(null,acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.core.first.call(null,ps)], null));
p = G__34489;
ps = G__34490;
acc = G__34491;
continue;
}
break;
}
}
});
patterning.maths.rotate_point = (function patterning$maths$rotate_point(a,p__34492){
var vec__34496 = p__34492;
var x = cljs.core.nth.call(null,vec__34496,(0),null);
var y = cljs.core.nth.call(null,vec__34496,(1),null);
var cos_a = patterning.maths.cos.call(null,a);
var sin_a = patterning.maths.sin.call(null,a);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x * cos_a) - (y * sin_a)),((x * sin_a) + (y * cos_a))], null);
});
/**
 * add some noise to a point, qx and qy are the x and y ranges of noise
 */
patterning.maths.wobble_point = (function patterning$maths$wobble_point(p__34499,p__34500){
var vec__34507 = p__34499;
var qx = cljs.core.nth.call(null,vec__34507,(0),null);
var qy = cljs.core.nth.call(null,vec__34507,(1),null);
var vec__34510 = p__34500;
var x = cljs.core.nth.call(null,vec__34510,(0),null);
var y = cljs.core.nth.call(null,vec__34510,(1),null);
var wob = ((function (vec__34507,qx,qy,vec__34510,x,y){
return (function (n,qn){
return (n + (cljs.core.rand.call(null,qn) - (qn / (2))));
});})(vec__34507,qx,qy,vec__34510,x,y))
;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [wob.call(null,x,qx),wob.call(null,y,qy)], null);
});
patterning.maths.x_in_list = (function patterning$maths$x_in_list(x,my_EQ_,xs){
if(cljs.core.empty_QMARK_.call(null,xs)){
return false;
} else {
return cljs.core.reduce.call(null,(function (a,b){
var or__26808__auto__ = a;
if(cljs.core.truth_(or__26808__auto__)){
return or__26808__auto__;
} else {
return b;
}
}),cljs.core.map.call(null,(function (y){
return my_EQ_.call(null,y,x);
}),xs));
}
});
patterning.maths.point_in_list = (function patterning$maths$point_in_list(p,ps){
return patterning.maths.x_in_list.call(null,p,patterning.maths.molp_EQ_,ps);
});
patterning.maths.clock_points = (function patterning$maths$clock_points(n,r){
var make_point = (function (a){
return patterning.maths.pol_to_rec.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,a], null));
});
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map.call(null,make_point,patterning.maths.clock_angles.call(null,n)));
});
patterning.maths.triangle = (function patterning$maths$triangle(ax,ay,bx,by,cx,cy){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ax","ax",-1516070907),new cljs.core.Keyword(null,"ay","ay",-1860044923),new cljs.core.Keyword(null,"A","A",-1688942394),new cljs.core.Keyword(null,"B","B",-1422503380),new cljs.core.Keyword(null,"C","C",-173629587),new cljs.core.Keyword(null,"bx","bx",690262736),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"cx","cx",1272694324),new cljs.core.Keyword(null,"cy","cy",755331060),new cljs.core.Keyword(null,"b","b",1482224470),new cljs.core.Keyword(null,"by","by",30600856),new cljs.core.Keyword(null,"a","a",-2123407586)],[ax,ay,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax,ay], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,by], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null),bx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax,ay], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,by], null)], null),cx,cy,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ax,ay], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)], null),by,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bx,by], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cx,cy], null)], null)]);
});
patterning.maths.perimeter = (function patterning$maths$perimeter(t){
return ((cljs.core.apply.call(null,patterning.maths.distance,new cljs.core.Keyword(null,"a","a",-2123407586).cljs$core$IFn$_invoke$arity$1(t)) + cljs.core.apply.call(null,patterning.maths.distance,new cljs.core.Keyword(null,"b","b",1482224470).cljs$core$IFn$_invoke$arity$1(t))) + cljs.core.apply.call(null,patterning.maths.distance,new cljs.core.Keyword(null,"c","c",-1763192079).cljs$core$IFn$_invoke$arity$1(t)));
});
patterning.maths.area = (function patterning$maths$area(t){
var axby = (new cljs.core.Keyword(null,"ax","ax",-1516070907).cljs$core$IFn$_invoke$arity$1(t) * new cljs.core.Keyword(null,"by","by",30600856).cljs$core$IFn$_invoke$arity$1(t));
var bxcy = (new cljs.core.Keyword(null,"bx","bx",690262736).cljs$core$IFn$_invoke$arity$1(t) * new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(t));
var cxay = (new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(t) * new cljs.core.Keyword(null,"ay","ay",-1860044923).cljs$core$IFn$_invoke$arity$1(t));
var axcy = (new cljs.core.Keyword(null,"ax","ax",-1516070907).cljs$core$IFn$_invoke$arity$1(t) * new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(t));
var cxby = (new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(t) * new cljs.core.Keyword(null,"by","by",30600856).cljs$core$IFn$_invoke$arity$1(t));
var bxay = (new cljs.core.Keyword(null,"bx","bx",690262736).cljs$core$IFn$_invoke$arity$1(t) * new cljs.core.Keyword(null,"ay","ay",-1860044923).cljs$core$IFn$_invoke$arity$1(t));
return (patterning.maths.abs.call(null,(((((axby + bxcy) + cxay) - axcy) - cxby) - bxay)) / (2));
});
patterning.maths.contains_point = (function patterning$maths$contains_point(t,p__34513){
var vec__34517 = p__34513;
var x = cljs.core.nth.call(null,vec__34517,(0),null);
var y = cljs.core.nth.call(null,vec__34517,(1),null);
var pab = patterning.maths.triangle.call(null,x,y,new cljs.core.Keyword(null,"ax","ax",-1516070907).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"ay","ay",-1860044923).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"bx","bx",690262736).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"by","by",30600856).cljs$core$IFn$_invoke$arity$1(t));
var pbc = patterning.maths.triangle.call(null,x,y,new cljs.core.Keyword(null,"bx","bx",690262736).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"by","by",30600856).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(t));
var pac = patterning.maths.triangle.call(null,x,y,new cljs.core.Keyword(null,"ax","ax",-1516070907).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"ay","ay",-1860044923).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"cx","cx",1272694324).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"cy","cy",755331060).cljs$core$IFn$_invoke$arity$1(t));
return patterning.maths.mol_EQ_.call(null,((patterning.maths.area.call(null,pab) + patterning.maths.area.call(null,pbc)) + patterning.maths.area.call(null,pac)),patterning.maths.area.call(null,t));
});
patterning.maths.triangle_points = (function patterning$maths$triangle_points(t){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"A","A",-1688942394).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"B","B",-1422503380).cljs$core$IFn$_invoke$arity$1(t),new cljs.core.Keyword(null,"C","C",-173629587).cljs$core$IFn$_invoke$arity$1(t)], null);
});
patterning.maths.drop_every = (function patterning$maths$drop_every(n,xs){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq.call(null,xs)){
return cljs.core.concat.call(null,cljs.core.take.call(null,(n - (1)),xs),patterning$maths$drop_every.call(null,n,cljs.core.drop.call(null,n,xs)));
} else {
return null;
}
}),null,null));
});
patterning.maths.take_every = (function patterning$maths$take_every(n,xs){
return (new cljs.core.LazySeq(null,(function (){
if(cljs.core.seq.call(null,xs)){
return cljs.core.concat.call(null,cljs.core.take.call(null,(1),xs),patterning$maths$take_every.call(null,n,cljs.core.drop.call(null,n,xs)));
} else {
return null;
}
}),null,null));
});
patterning.maths.map_until_repeat = (function patterning$maths$map_until_repeat(f,eq_test,ins){
var xs = ins;
var build = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,xs)){
return build;
} else {
var fx = f.call(null,cljs.core.first.call(null,xs));
if(cljs.core.truth_(patterning.maths.x_in_list.call(null,fx,eq_test,build))){
return build;
} else {
var G__34520 = cljs.core.rest.call(null,xs);
var G__34521 = cljs.core.conj.call(null,build,fx);
xs = G__34520;
build = G__34521;
continue;
}
}
break;
}
});

//# sourceMappingURL=maths.js.map?rel=1538029291475