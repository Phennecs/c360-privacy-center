'use strict';function a2_0x2d09(_0x45bde9,_0x308a0f){const _0x49f176=a2_0x49f1();return a2_0x2d09=function(_0x2d095e,_0x472896){_0x2d095e=_0x2d095e-0x165;let _0x5d32f5=_0x49f176[_0x2d095e];return _0x5d32f5;},a2_0x2d09(_0x45bde9,_0x308a0f);}const a2_0x4c11ec=a2_0x2d09;(function(_0x424a92,_0x561775){const _0x4d94e1=a2_0x2d09,_0x385fe9=_0x424a92();while(!![]){try{const _0x57d38b=parseInt(_0x4d94e1(0x19b))/0x1+-parseInt(_0x4d94e1(0x174))/0x2+parseInt(_0x4d94e1(0x17f))/0x3+-parseInt(_0x4d94e1(0x191))/0x4*(-parseInt(_0x4d94e1(0x181))/0x5)+parseInt(_0x4d94e1(0x171))/0x6*(-parseInt(_0x4d94e1(0x189))/0x7)+-parseInt(_0x4d94e1(0x199))/0x8*(-parseInt(_0x4d94e1(0x173))/0x9)+parseInt(_0x4d94e1(0x19d))/0xa;if(_0x57d38b===_0x561775)break;else _0x385fe9['push'](_0x385fe9['shift']());}catch(_0x355f7f){_0x385fe9['push'](_0x385fe9['shift']());}}}(a2_0x49f1,0xde000));const herokuModel=require(a2_0x4c11ec(0x177)),SalesforceModel=require(a2_0x4c11ec(0x16a)),{handleJobSubmission}=require(a2_0x4c11ec(0x166)),getPendingJobCount=require(a2_0x4c11ec(0x172)),SCHED_STATUSES=require(a2_0x4c11ec(0x17c)),salesforce=new SalesforceModel(),heroku=new herokuModel();async function authHeroku(_0x5c4b35,_0x10cb12,_0x572bee,_0x47ceee=![]){const _0x45a07b=a2_0x4c11ec;if(_0x5c4b35!=null)try{const _0x2801be=await heroku['validateHerokuAuthHeader'](_0x5c4b35);if(!_0x2801be){if(!_0x47ceee)await salesforce['insertRunLog'](_0x10cb12,_0x572bee,_0x45a07b(0x16b),_0x45a07b(0x168),_0x45a07b(0x19c));try{await salesforce[_0x45a07b(0x192)](_0x572bee,_0x10cb12,SCHED_STATUSES[_0x45a07b(0x196)]);}catch(_0x15b514){console['error'](_0x45a07b(0x16e),_0x15b514);}return{'status':_0x45a07b(0x18b)};}else return console[_0x45a07b(0x1a4)]('Auth\x20passed,\x20proceeding.'),{'status':_0x45a07b(0x17e)};}catch(_0x9bd7a5){console['error'](_0x45a07b(0x17b),_0x9bd7a5);if(!_0x47ceee)await salesforce[_0x45a07b(0x17d)](_0x10cb12,_0x572bee,_0x45a07b(0x16b),_0x45a07b(0x168),_0x45a07b(0x19c));try{await salesforce[_0x45a07b(0x192)](_0x572bee,_0x10cb12,SCHED_STATUSES['ERROR']);}catch(_0x51c09c){console['error'](_0x45a07b(0x16e),_0x51c09c);}return{'status':_0x45a07b(0x18b)};}else{if(!_0x47ceee)await salesforce[_0x45a07b(0x17d)](_0x10cb12,_0x572bee,'Error',_0x45a07b(0x168),_0x45a07b(0x18e));try{await salesforce[_0x45a07b(0x192)](_0x572bee,_0x10cb12,SCHED_STATUSES[_0x45a07b(0x196)]);}catch(_0x3e75d4){console[_0x45a07b(0x18c)](_0x45a07b(0x16e),_0x3e75d4);}return{'status':_0x45a07b(0x1a5)};}}const index=async(_0x3761e8,_0x5407bc)=>{const _0x4b9459=a2_0x4c11ec;console[_0x4b9459(0x1a4)](_0x4b9459(0x1a2),_0x3761e8[_0x4b9459(0x197)]);let _0x20380d=_0x3761e8[_0x4b9459(0x170)](_0x4b9459(0x19e)),_0x590ca3=_0x3761e8[_0x4b9459(0x197)][_0x4b9459(0x16f)],_0x398d3b=_0x3761e8[_0x4b9459(0x197)][_0x4b9459(0x185)];const _0x29f23e=await authHeroku(_0x20380d,_0x590ca3,_0x398d3b);if(_0x29f23e['status']!==_0x4b9459(0x17e))return console['error'](_0x4b9459(0x16d)),_0x5407bc[_0x4b9459(0x16c)](0x191)['json'](_0x29f23e);else{let _0x51a7fa,_0x2b5485={'executionId':_0x590ca3,'policyName':_0x398d3b,'logType':_0x4b9459(0x168)},_0x2c308c={},_0x1e5dfe,_0x7d12e1,_0x1893ee;if(!process[_0x4b9459(0x19f)][_0x4b9459(0x180)]){console[_0x4b9459(0x1a4)]('REDIS_URL\x20is\x20not\x20set,\x20will\x20not\x20proceed!'),(_0x2b5485['msg']=_0x4b9459(0x183),_0x4b9459(0x168),'Policy:\x20'+_0x398d3b+'\x20could\x20not\x20be\x20queued\x20for\x20execution.\x20The\x20Redis\x20addon\x20in\x20the\x20Heroku\x20app\x20does\x20not\x20appear\x20to\x20be\x20fully\x20set\x20up.'),_0x2b5485[_0x4b9459(0x16c)]=_0x4b9459(0x183),_0x51a7fa=await salesforce['insertRunLog'](_0x2b5485[_0x4b9459(0x1a1)],_0x2b5485[_0x4b9459(0x18a)],_0x2b5485[_0x4b9459(0x16c)],_0x2b5485[_0x4b9459(0x184)],_0x2b5485[_0x4b9459(0x195)]);try{await salesforce[_0x4b9459(0x192)](_0x398d3b,_0x590ca3,SCHED_STATUSES[_0x4b9459(0x196)]);}catch(_0x38056b){console['error']('Error\x20updating\x20PC\x20Schedule\x20Status:',_0x38056b);}return _0x2c308c[_0x4b9459(0x16c)]=_0x4b9459(0x17a),_0x5407bc[_0x4b9459(0x16c)](0x1f4)['json'](_0x2c308c);}else{({policyQueue:_0x1e5dfe,nonPolicyQueues:_0x7d12e1,upStateQueue:_0x1893ee}=require(_0x4b9459(0x1a0)));const _0x45130a=await _0x1e5dfe[_0x4b9459(0x190)]([_0x4b9459(0x167),_0x4b9459(0x19a),'waiting',_0x4b9459(0x178)]);console[_0x4b9459(0x1a4)](_0x4b9459(0x165),_0x398d3b);if(_0x45130a[_0x4b9459(0x169)](_0x350d2d=>_0x350d2d[_0x4b9459(0x176)][_0x4b9459(0x18a)]==_0x398d3b)){_0x2b5485[_0x4b9459(0x195)]=_0x4b9459(0x182)+_0x398d3b+_0x4b9459(0x188),_0x2b5485['status']=_0x4b9459(0x183),console[_0x4b9459(0x1a6)](_0x2b5485[_0x4b9459(0x195)]),_0x2c308c[_0x4b9459(0x16c)]=_0x2b5485[_0x4b9459(0x195)],_0x51a7fa=await salesforce[_0x4b9459(0x17d)](_0x2b5485[_0x4b9459(0x1a1)],_0x2b5485[_0x4b9459(0x18a)],_0x2b5485[_0x4b9459(0x16c)],_0x2b5485[_0x4b9459(0x184)],_0x2b5485[_0x4b9459(0x195)]);try{await salesforce[_0x4b9459(0x192)](_0x398d3b,_0x590ca3,SCHED_STATUSES[_0x4b9459(0x179)]);}catch(_0xd07a8f){console['error'](_0x4b9459(0x16e),_0xd07a8f);}return _0x5407bc[_0x4b9459(0x16c)](0x199)['json'](_0x2c308c);}else{_0x2b5485[_0x4b9459(0x195)]=_0x4b9459(0x182)+_0x398d3b+_0x4b9459(0x18d),_0x2b5485[_0x4b9459(0x16c)]='Success',_0x51a7fa=await salesforce[_0x4b9459(0x17d)](_0x2b5485[_0x4b9459(0x1a1)],_0x2b5485[_0x4b9459(0x18a)],_0x2b5485['status'],_0x2b5485[_0x4b9459(0x184)],_0x2b5485[_0x4b9459(0x195)]);if(!_0x51a7fa){_0x2c308c[_0x4b9459(0x16c)]=_0x4b9459(0x194),console[_0x4b9459(0x18c)](_0x4b9459(0x175));try{await salesforce['updatePCScheduleStatus'](_0x398d3b,_0x590ca3,SCHED_STATUSES[_0x4b9459(0x196)]);}catch(_0x1d5b55){console[_0x4b9459(0x18c)]('Error\x20updating\x20PC\x20Schedule\x20Status:',_0x1d5b55);}return _0x5407bc[_0x4b9459(0x16c)](0x1f4)[_0x4b9459(0x186)](_0x2c308c);}else{const _0x3588b9=await getPendingJobCount([..._0x7d12e1,_0x1893ee]);_0x3588b9?console[_0x4b9459(0x1a4)]('Pending\x20jobs\x20were\x20detected,\x20the\x20policy\x20queue\x20will\x20not\x20be\x20resumed.'):(console[_0x4b9459(0x1a4)](_0x4b9459(0x187)),await _0x1e5dfe[_0x4b9459(0x18f)](![]));console['log'](_0x4b9459(0x198));const _0x46e628=await handleJobSubmission({'queue':_0x1e5dfe,'jobType':_0x4b9459(0x193),'jobData':{'executionId':_0x590ca3,'policyName':_0x398d3b},'skipCounters':!![]});return _0x2b5485[_0x4b9459(0x195)]=_0x4b9459(0x182)+_0x398d3b+_0x4b9459(0x1a3),_0x2b5485['status']='Success',_0x2c308c[_0x4b9459(0x16c)]=_0x2b5485[_0x4b9459(0x16c)],_0x51a7fa=await salesforce[_0x4b9459(0x17d)](_0x2b5485['executionId'],_0x2b5485[_0x4b9459(0x18a)],_0x2b5485[_0x4b9459(0x16c)],_0x2b5485[_0x4b9459(0x184)],_0x2b5485[_0x4b9459(0x195)]),_0x5407bc['status'](0xc8)[_0x4b9459(0x186)](_0x2c308c);}}}}};module['exports']={'index':index,'authHeroku':authHeroku};function a2_0x49f1(){const _0x32af28=['Submitting\x20policy-driver\x20job!','1704fYELke','active','379413DyNnJB','Authentication\x20into\x20Heroku\x20is\x20denied.','4749410DGuPIS','Authorization','env','../../models/queue','executionId','Process\x20request\x20received:\x20req.body\x20=>','\x20is\x20now\x20queued\x20for\x20execution.','log','Missing\x20Authorization\x20Token','warn','Running\x20PolicyName','../worker/worker-utils/job-gateway','delayed','Cache\x20Processing','some','../../models/salesforce','Error','status','Process\x20endpoint\x20Heroku\x20auth\x20failed!','Error\x20updating\x20PC\x20Schedule\x20Status:','ExecutionId','header','1842NUthkP','../worker/worker-utils/get-pending-job-count','5427mUCHCN','2286802oLNkaW','Initial\x20run\x20log\x20was\x20not\x20inserted!\x20Not\x20proceeding.','data','../../models/heroku','paused','SKIPPED','Redis\x20URL\x20does\x20not\x20appear\x20to\x20be\x20set.\x20Not\x20proceeding.','Error\x20during\x20auth\x20against\x20/auth\x20with\x20bearerToken.','../../models/salesforce/pc-schedule-status-map','insertRunLog','Success','163674gJohfO','REDIS_URL','87220bKRJQm','Policy:\x20','Failure','logType','DeveloperName','json','No\x20pending\x20jobs\x20detected,\x20resuming\x20policy\x20queue.','\x20is\x20already\x20queued\x20for\x20execution.\x20It\x20will\x20not\x20be\x20allowed\x20in\x20the\x20queue\x20again\x20until\x20the\x20pre-existing\x20run\x20has\x20completed\x20and\x20the\x20next\x20scheduled\x20run\x20of\x20this\x20policy\x20begins.\x20If\x20this\x20message\x20occurs\x20often,\x20please\x20consider\x20reducing\x20the\x20frequency\x20of\x20this\x20policy\x27s\x20run\x20schedule.','18214jtfEPk','policyName','Unauthorized','error','\x20is\x20initializing.','Unable\x20to\x20authenticate\x20the\x20authorization\x20token\x20for\x20access\x20into\x20Heroku.','resume','getJobs','416tcMgkU','updatePCScheduleStatus','policy-driver','Initial\x20run\x20log\x20insertion\x20failure','msg','ERROR','body'];a2_0x49f1=function(){return _0x32af28;};return a2_0x49f1();}