function a34_0x37a9(_0x4a29ae,_0x51fb2b){const _0x4cc9af=a34_0x4cc9();return a34_0x37a9=function(_0x37a9bb,_0x4acf4d){_0x37a9bb=_0x37a9bb-0x127;let _0x3b4ac7=_0x4cc9af[_0x37a9bb];return _0x3b4ac7;},a34_0x37a9(_0x4a29ae,_0x51fb2b);}function a34_0x4cc9(){const _0x3e44f1=['env','1397GGkWOt','PRIVACYCENTER_CONN_API_KEY','error','Connector\x20credentials\x20did\x20not\x20match!','745ogPERr','1397809LUfWZH','No\x20credentials\x20sent!','../../utils/connector-crypto-utils','9AaoADH','734ppBNfO','17679695UfWzAD','authorization','5490632QUGqJG','3884FtecEc','1886265qTeuxg','No\x20credentials\x20sent\x20on\x20connector\x20request!','json','get','4827470kMcXtk','status','6WNfPsz'];a34_0x4cc9=function(){return _0x3e44f1;};return a34_0x4cc9();}const a34_0x25ac32=a34_0x37a9;(function(_0x2c9af2,_0x5681ab){const _0x15cdd3=a34_0x37a9,_0x2a8dc7=_0x2c9af2();while(!![]){try{const _0xb71e7f=parseInt(_0x15cdd3(0x138))/0x1*(parseInt(_0x15cdd3(0x12b))/0x2)+parseInt(_0x15cdd3(0x130))/0x3+parseInt(_0x15cdd3(0x12f))/0x4*(-parseInt(_0x15cdd3(0x13c))/0x5)+-parseInt(_0x15cdd3(0x136))/0x6*(parseInt(_0x15cdd3(0x127))/0x7)+parseInt(_0x15cdd3(0x12e))/0x8+-parseInt(_0x15cdd3(0x12a))/0x9*(-parseInt(_0x15cdd3(0x134))/0xa)+-parseInt(_0x15cdd3(0x12c))/0xb;if(_0xb71e7f===_0x5681ab)break;else _0x2a8dc7['push'](_0x2a8dc7['shift']());}catch(_0x166da8){_0x2a8dc7['push'](_0x2a8dc7['shift']());}}}(a34_0x4cc9,0x57a07));const {hashConnApiKey,safeCompare,decryptConnApiKey}=require(a34_0x25ac32(0x129));function connectorAuthMiddleware(_0x542140,_0x17e626,_0x36e691){const _0x579aef=a34_0x25ac32,_0x5a4f70=_0x542140[_0x579aef(0x133)](_0x579aef(0x12d));if(!_0x5a4f70)return console[_0x579aef(0x13a)](_0x579aef(0x131)),_0x17e626[_0x579aef(0x135)](0x193)[_0x579aef(0x132)]({'error':_0x579aef(0x128)});const _0x347847=decryptConnApiKey(_0x5a4f70);if(!safeCompare(_0x347847,process[_0x579aef(0x137)][_0x579aef(0x139)]))return console['error'](_0x579aef(0x13b)),_0x17e626[_0x579aef(0x135)](0x191)[_0x579aef(0x132)]({'error':'Unauthorized!'});_0x36e691();}module['exports']=connectorAuthMiddleware;