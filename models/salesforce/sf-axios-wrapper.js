'use strict';const a29_0x5ec18c=a29_0x253e;(function(_0x3107c8,_0x5e7d70){const _0x32fb0c=a29_0x253e,_0x4082c0=_0x3107c8();while(!![]){try{const _0x2d82c8=parseInt(_0x32fb0c(0x14c))/0x1*(-parseInt(_0x32fb0c(0x158))/0x2)+parseInt(_0x32fb0c(0x146))/0x3*(-parseInt(_0x32fb0c(0x162))/0x4)+parseInt(_0x32fb0c(0x138))/0x5+-parseInt(_0x32fb0c(0x142))/0x6+-parseInt(_0x32fb0c(0x15b))/0x7*(-parseInt(_0x32fb0c(0x15d))/0x8)+parseInt(_0x32fb0c(0x14b))/0x9+parseInt(_0x32fb0c(0x140))/0xa;if(_0x2d82c8===_0x5e7d70)break;else _0x4082c0['push'](_0x4082c0['shift']());}catch(_0x5b21b5){_0x4082c0['push'](_0x4082c0['shift']());}}}(a29_0x4afc,0xc6b1c));function a29_0x4afc(){const _0x1d5892=['axios','refreshAccessToken','replace','log','request','9857720EQvzHg','exports','5462238YUMmul','refresh_token','accessToken','getSFAxiosInstance','4908ssEREJ','loginUrl','addAuthHeader','refreshAuthWrapper','post','9001188GoxSnn','529cPSJdM','Failed\x20to\x20obtain\x20refresh\x20token!','data','clientId','headers','generateAuthString','../../utils/required-param','response','use','access_token','default','error','3012qParXx','bind','refreshToken','4994696GJSgEW','axios-auth-refresh','8rOhBeD','Authorization','initAxios','Bearer\x20','config','508MVSbSL','Obtained\x20refreshed\x20SF\x20token\x20data!','json','instanceUrl','Posting\x20to\x20refresh\x20URL:\x20','146195Irwxpr','Refreshed\x20SF\x20token!','interceptors'];a29_0x4afc=function(){return _0x1d5892;};return a29_0x4afc();}const createAuthRefreshInterceptor=require(a29_0x5ec18c(0x15c)),requiredParam=require(a29_0x5ec18c(0x152)),basicAxios=require('axios');function a29_0x253e(_0xadbc1f,_0x4859b4){const _0x4afc35=a29_0x4afc();return a29_0x253e=function(_0x253ef6,_0x194fac){_0x253ef6=_0x253ef6-0x135;let _0x4a13cc=_0x4afc35[_0x253ef6];return _0x4a13cc;},a29_0x253e(_0xadbc1f,_0x4859b4);}class SFAxiosWrapper{constructor(_0x2b6084=requiredParam('loginUrl'),_0x8df4fd=requiredParam('instanceUrl'),_0x5f11c5=requiredParam(a29_0x5ec18c(0x14f)),_0x243a01=requiredParam('refreshToken')){const _0x16946c=a29_0x5ec18c;this[_0x16946c(0x147)]=_0x2b6084,this[_0x16946c(0x136)]=_0x8df4fd,this[_0x16946c(0x14f)]=_0x5f11c5,this[_0x16946c(0x15a)]=_0x243a01,this[_0x16946c(0x15f)]();}['initAxios'](){const _0x5cf8ec=a29_0x5ec18c;this[_0x5cf8ec(0x13b)]=basicAxios['create']({'baseURL':this[_0x5cf8ec(0x136)]}),this[_0x5cf8ec(0x13b)][_0x5cf8ec(0x13a)][_0x5cf8ec(0x13f)][_0x5cf8ec(0x154)](this[_0x5cf8ec(0x148)][_0x5cf8ec(0x159)](this)),createAuthRefreshInterceptor[_0x5cf8ec(0x156)](this[_0x5cf8ec(0x13b)],this[_0x5cf8ec(0x149)][_0x5cf8ec(0x159)](this));}[a29_0x5ec18c(0x145)](){const _0x235494=a29_0x5ec18c;return this[_0x235494(0x13b)];}[a29_0x5ec18c(0x151)](){const _0x36bc60=a29_0x5ec18c;return _0x36bc60(0x160)+this[_0x36bc60(0x144)];}[a29_0x5ec18c(0x148)](_0x328b13){const _0x373266=a29_0x5ec18c;return _0x328b13['headers'][_0x373266(0x15e)]=this[_0x373266(0x151)](),_0x328b13;}async[a29_0x5ec18c(0x149)](_0x3148fb){const _0x5925b2=a29_0x5ec18c,_0x50770f=_0x3148fb[_0x5925b2(0x161)];console[_0x5925b2(0x13e)]('Attempting\x20SF\x20token\x20refresh!'),await this[_0x5925b2(0x13c)](),console['log'](_0x5925b2(0x139)),_0x3148fb[_0x5925b2(0x153)][_0x5925b2(0x161)][_0x5925b2(0x150)][_0x5925b2(0x15e)]=this[_0x5925b2(0x151)]();}async[a29_0x5ec18c(0x13c)](){const _0x54239b=a29_0x5ec18c;try{const _0x2b693f=(this[_0x54239b(0x147)]+'/services/oauth2/token')[_0x54239b(0x13d)](/([^:]\/)\/+/g,'$1');console['log'](_0x54239b(0x137)+_0x2b693f);const _0x450f3f=await basicAxios[_0x54239b(0x14a)](_0x2b693f,{},{'params':{'grant_type':_0x54239b(0x143),'client_id':this[_0x54239b(0x14f)],'refresh_token':this['refreshToken'],'format':_0x54239b(0x135)}}),_0x8c5d5d=_0x450f3f[_0x54239b(0x14e)];console['log'](_0x54239b(0x163)),this[_0x54239b(0x144)]=_0x8c5d5d[_0x54239b(0x155)];}catch(_0x42b1cf){console[_0x54239b(0x157)](_0x54239b(0x14d),_0x42b1cf);throw new Error('Failed\x20to\x20obtain\x20refresh\x20token!');}}}module[a29_0x5ec18c(0x141)]=SFAxiosWrapper;