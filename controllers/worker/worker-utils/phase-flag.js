const a12_0x50e8c2=a12_0x4393;(function(_0x3c172b,_0xc0229a){const _0x3c330c=a12_0x4393,_0x1b69ff=_0x3c172b();while(!![]){try{const _0x3e6e58=-parseInt(_0x3c330c(0x7a))/0x1*(-parseInt(_0x3c330c(0x8a))/0x2)+parseInt(_0x3c330c(0x89))/0x3*(-parseInt(_0x3c330c(0x8f))/0x4)+parseInt(_0x3c330c(0x83))/0x5+-parseInt(_0x3c330c(0x78))/0x6*(-parseInt(_0x3c330c(0x7b))/0x7)+-parseInt(_0x3c330c(0x81))/0x8*(parseInt(_0x3c330c(0x77))/0x9)+parseInt(_0x3c330c(0x87))/0xa*(-parseInt(_0x3c330c(0x7c))/0xb)+parseInt(_0x3c330c(0x7f))/0xc*(parseInt(_0x3c330c(0x8e))/0xd);if(_0x3e6e58===_0xc0229a)break;else _0x1b69ff['push'](_0x1b69ff['shift']());}catch(_0x1dfca6){_0x1b69ff['push'](_0x1b69ff['shift']());}}}(a12_0x5eaf,0xe942d));const Enum=require(a12_0x50e8c2(0x7e)),requiredParam=require('../../../utils/required-param'),PHASE_FLAG_TYPES=Object[a12_0x50e8c2(0x80)](new Enum([a12_0x50e8c2(0x91),a12_0x50e8c2(0x85),a12_0x50e8c2(0x75)]));function a12_0x4393(_0x319135,_0x4490e3){const _0x5eaf66=a12_0x5eaf();return a12_0x4393=function(_0x439363,_0x1adf0f){_0x439363=_0x439363-0x75;let _0x396964=_0x5eaf66[_0x439363];return _0x396964;},a12_0x4393(_0x319135,_0x4490e3);}async function insertPhaseFlag(_0x4cbe8d=requiredParam('db'),_0x2448e9=requiredParam(a12_0x50e8c2(0x88)),_0x44bc5e=requiredParam('currentPhase'),_0x27878f=requiredParam(a12_0x50e8c2(0x8d)),_0x47e763=requiredParam(a12_0x50e8c2(0x8b))){const _0x14bf41=a12_0x50e8c2,_0x26c2af=_0x14bf41(0x90),_0x4ae73d=[_0x2448e9,_0x44bc5e,_0x27878f,_0x47e763];console[_0x14bf41(0x86)]('phase-flag\x20insert\x20query:\x20'+_0x26c2af+_0x14bf41(0x82)+_0x4ae73d[_0x14bf41(0x7d)](','));try{const _0xaa6ac6=await _0x4cbe8d['createQuery'](_0x26c2af,_0x4ae73d);return _0xaa6ac6[_0x14bf41(0x79)];}catch(_0x4ab52c){return console[_0x14bf41(0x8c)](_0x14bf41(0x76),_0x4ab52c),null;}}function a12_0x5eaf(){const _0x4a2744=['602833VdQWvs','2966667BrphlK','join','../../../utils/enum','24RMcmOL','freeze','43416jzGYyn','\x20-\x20values:\x20','6883100vAdlyt','exports','HALT','log','70IgEbvD','executionId','54591BsHqlw','3531524LHUSSn','reason','error','flagType','16252249uxvbFd','400xTMZDb','INSERT\x20INTO\x20config.POLICY_PHASE_FLAG\x20(execution_id,\x20phase,\x20flag_type,\x20reason)\x20VALUES\x20($1,\x20$2,\x20$3,\x20$4)\x20ON\x20CONFLICT\x20(execution_id,\x20phase,\x20flag_type,\x20reason)\x20DO\x20NOTHING\x20RETURNING\x20*','FAILURE','SPECIAL','Error\x20inserting\x20to\x20POLICY_PHASE_FLAG:\x20','2196AoXvEw','24tbdKNs','rows','1VkObXx'];a12_0x5eaf=function(){return _0x4a2744;};return a12_0x5eaf();}module[a12_0x50e8c2(0x84)]={'PHASE_FLAG_TYPES':PHASE_FLAG_TYPES,'insertPhaseFlag':insertPhaseFlag};