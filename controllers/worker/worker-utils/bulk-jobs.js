function a6_0x19f7(_0x1d36b7,_0x45b41c){const _0x3fda21=a6_0x3fda();return a6_0x19f7=function(_0x19f7d4,_0x1cf258){_0x19f7d4=_0x19f7d4-0xda;let _0x56fc50=_0x3fda21[_0x19f7d4];return _0x56fc50;},a6_0x19f7(_0x1d36b7,_0x45b41c);}const a6_0x2e570c=a6_0x19f7;(function(_0x4f4169,_0x142d40){const _0x3065ba=a6_0x19f7,_0x461dcf=_0x4f4169();while(!![]){try{const _0x413429=parseInt(_0x3065ba(0x103))/0x1+-parseInt(_0x3065ba(0xfc))/0x2+-parseInt(_0x3065ba(0xe6))/0x3*(parseInt(_0x3065ba(0xe4))/0x4)+parseInt(_0x3065ba(0xf8))/0x5*(-parseInt(_0x3065ba(0xdd))/0x6)+parseInt(_0x3065ba(0xe1))/0x7+-parseInt(_0x3065ba(0xf1))/0x8+parseInt(_0x3065ba(0xe0))/0x9;if(_0x413429===_0x142d40)break;else _0x461dcf['push'](_0x461dcf['shift']());}catch(_0x61565b){_0x461dcf['push'](_0x461dcf['shift']());}}}(a6_0x3fda,0x9ae3f));function a6_0x3fda(){const _0x1f3324=['error','initialCount','operation','Bulk\x20job\x20error\x20inserted!\x20','../../../models/database','exports','Bulk\x20job\x20error\x20insert\x20query\x20generated:\x20','INSERT\x20INTO\x20config.uniq_bulk_errors_per_obj\x20(execution_id,\x20sobject,\x20error_code,\x20full_error)\x0a\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20($1,\x20$2,\x20$3,\x20$4)\x0a\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(execution_id,\x20sobject,\x20error_code)\x0a\x20\x20\x20\x20\x20\x20\x20\x20DO\x20NOTHING\x0a\x20\x20\x20\x20\x20\x20\x20\x20RETURNING\x20*\x0a\x20\x20\x20\x20','durationMs','concurrencyMode','408640YdcOCr','.\x20Error:\x20','jobId','rows',',\x20sobject:\x20','error_count','executionId','65zmSlxc','startTs','failedCount',',\x20errorCode:\x20','2147678RdEKZk','Bulk\x20job\x20unique\x20error\x20inserted!\x20','successfulCount',',\x20operation:\x20','../../../utils/required-param','\x20Values:\x20','error_code','676357Iqynrf','Bulk\x20job\x20unique\x20error\x20insert\x20query\x20failed!\x20sobject:\x20','sobject','Bulk\x20job\x20error\x20insert\x20query\x20failed!\x20jobId:\x20','unprocessedCount','log','endTs',',\x20errorCount:\x20','Bulk\x20job\x20insert\x20query\x20failed!\x20jobId:\x20','384582EjUrwZ','Bulk\x20job\x20unique\x20error\x20insert\x20query\x20generated:\x20','Bulk\x20job\x20inserted!\x20','27339570spTeoI','65037YdaghM',',\x20executionId:\x20','insertQuery','411188QwBcHC','Bulk\x20job\x20insert\x20query\x20generated:\x20','33tAyWrV'];a6_0x3fda=function(){return _0x1f3324;};return a6_0x3fda();}const requiredParam=require(a6_0x2e570c(0x100)),DBModel=require(a6_0x2e570c(0xeb)),db=new DBModel();async function insertBulkJob({jobId:jobId=requiredParam('jobId'),executionId:executionId=requiredParam('executionId'),sobject:sobject=requiredParam(a6_0x2e570c(0x105)),operation:operation=requiredParam(a6_0x2e570c(0xe9)),concurrencyMode:concurrencyMode=requiredParam(a6_0x2e570c(0xf0)),jobInfo:_0x432fc4,finalState:finalState=requiredParam('finalState'),initialCount:initialCount=requiredParam(a6_0x2e570c(0xe8)),totalCount:totalCount=requiredParam('totalCount'),successfulCount:successfulCount=requiredParam(a6_0x2e570c(0xfe)),failedCount:failedCount=requiredParam(a6_0x2e570c(0xfa)),unprocessedCount:unprocessedCount=requiredParam(a6_0x2e570c(0x107)),timedOut:timedOut=![],isRetry:isRetry=![],startTs:startTs=requiredParam(a6_0x2e570c(0xf9)),endTs:endTs=requiredParam(a6_0x2e570c(0xda)),durationMs:durationMs=requiredParam(a6_0x2e570c(0xef))}){const _0x3b7f0d=a6_0x2e570c,_0x15df3b='INSERT\x20INTO\x20config.bulk_job\x20(job_id,\x20execution_id,\x20sobject,\x20operation,\x20concurrency_mode,\x20job_info,\x0a\x20\x20\x20\x20\x20\x20\x20\x20final_state,\x20initial_count,\x20total_count,\x20successful_count,\x20failed_count,\x20unprocessed_count,\x20timed_out,\x20is_retry,\x20start_ts,\x20end_ts,\x20duration_ms)\x0a\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20($1,\x20$2,\x20$3,\x20$4,\x20$5,\x20$6,\x20$7,\x20$8,\x20$9,\x20$10,\x20$11,\x20$12,\x20$13,\x20$14,\x20$15,\x20$16,\x20$17)\x0a\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(job_id)\x0a\x20\x20\x20\x20\x20\x20\x20\x20DO\x20NOTHING\x0a\x20\x20\x20\x20\x20\x20\x20\x20RETURNING\x20*\x0a\x20\x20\x20\x20',_0x1efebd=[jobId,executionId,sobject,operation,concurrencyMode,_0x432fc4,finalState,initialCount,totalCount,successfulCount,failedCount,unprocessedCount,timedOut,isRetry,startTs,endTs,durationMs];console[_0x3b7f0d(0x108)](_0x3b7f0d(0xe5)+_0x15df3b+'\x20Values:\x20'+_0x1efebd);try{const _0x58dc94=await db[_0x3b7f0d(0xe3)](_0x15df3b,_0x1efebd);return console[_0x3b7f0d(0x108)](_0x3b7f0d(0xdf)+JSON['stringify'](_0x58dc94[_0x3b7f0d(0xf4)])),_0x58dc94;}catch(_0x29d411){return console[_0x3b7f0d(0xe7)](_0x3b7f0d(0xdc)+jobId+_0x3b7f0d(0xe2)+executionId+_0x3b7f0d(0xf5)+sobject+_0x3b7f0d(0xff)+operation+',\x20concurrencyMode:\x20'+concurrencyMode+_0x3b7f0d(0xf2),_0x29d411),null;}}async function insertBulkJobErrors({jobId:jobId=requiredParam(a6_0x2e570c(0xf3)),errorCode:errorCode=requiredParam(a6_0x2e570c(0x102)),errorCount:errorCount=requiredParam(a6_0x2e570c(0xf6))}){const _0x59a22e=a6_0x2e570c,_0x415b5b='INSERT\x20INTO\x20config.bulk_job_errors\x20(job_id,\x20error_code,\x20error_count)\x0a\x20\x20\x20\x20\x20\x20\x20\x20VALUES\x20($1,\x20$2,\x20$3)\x0a\x20\x20\x20\x20\x20\x20\x20\x20ON\x20CONFLICT\x20(job_id,\x20error_code)\x0a\x20\x20\x20\x20\x20\x20\x20\x20DO\x20NOTHING\x0a\x20\x20\x20\x20\x20\x20\x20\x20RETURNING\x20*\x0a\x20\x20\x20\x20',_0x5a5d51=[jobId,errorCode,errorCount];console['log'](_0x59a22e(0xed)+_0x415b5b+_0x59a22e(0x101)+_0x5a5d51);try{const _0x1d592d=await db[_0x59a22e(0xe3)](_0x415b5b,_0x5a5d51);return console['log'](_0x59a22e(0xea)+JSON['stringify'](_0x1d592d['rows'])),_0x1d592d;}catch(_0x258111){return console[_0x59a22e(0xe7)](_0x59a22e(0x106)+jobId+',\x20errorCode:\x20'+errorCode+_0x59a22e(0xdb)+errorCount,_0x258111),null;}}async function insertUniqBulkJobErrorsPerObj({executionId:executionId=requiredParam(a6_0x2e570c(0xf7)),sobject:sobject=requiredParam('jobId'),errorCode:errorCode=requiredParam(a6_0x2e570c(0x102)),fullError:fullError=requiredParam('fullError')}){const _0x2ae6f7=a6_0x2e570c,_0x5ae3e3=_0x2ae6f7(0xee),_0x1d835d=[executionId,sobject,errorCode,fullError];console[_0x2ae6f7(0x108)](_0x2ae6f7(0xde)+_0x5ae3e3+_0x2ae6f7(0x101)+_0x1d835d);try{const _0x361eb6=await db[_0x2ae6f7(0xe3)](_0x5ae3e3,_0x1d835d);return console[_0x2ae6f7(0x108)](_0x2ae6f7(0xfd)+JSON['stringify'](_0x361eb6[_0x2ae6f7(0xf4)])),_0x361eb6;}catch(_0xf0c844){return console[_0x2ae6f7(0xe7)](_0x2ae6f7(0x104)+sobject+_0x2ae6f7(0xfb)+errorCode,_0xf0c844),null;}}module[a6_0x2e570c(0xec)]={'insertBulkJob':insertBulkJob,'insertBulkJobErrors':insertBulkJobErrors,'insertUniqBulkJobErrorsPerObj':insertUniqBulkJobErrorsPerObj};