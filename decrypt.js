//Created by Ivan S. Cavalheiro (ivanscavalheiro@gmail.com)
//2016-DEC-07
//methods do decrypt were extracted from game's binaries
//MIT License


var TEXT_SPLITTER = "Fe12NAfA3R6z4k0z";
var SALT = "af0ik392jrmt0nsfdghy0";

function unSprinkle(p_string)
{
     var __splits = p_string.split("");
     var __toReturn = [];
     var __indexer = 0;
     while(__indexer < __splits.length)
     {
        __toReturn[__indexer / 2] = __splits[__indexer];
        __indexer = __indexer + 2;
     }
     return __toReturn.join("");
}

function decodeToJson(p_base64String)
{
     var __splits = p_base64String.split(TEXT_SPLITTER);
     var __base64 = unSprinkle(__splits[0]);
     var __decoded = (new Buffer(__base64, 'base64').toString('ascii'));
    
     return __decoded;
}


var pathToDecrypt = 'C:\\ragnarokClickerSave.txt';
var pathToSave = 'C:\\ragnarokClickerSave.json';

var fs = require('fs');
fs.readFile(pathToDecrypt, function(err, data){
    if(err)
        console.log('error reading file');
    else
    {
        var __result = decodeToJson(data.toString());
        fs.writeFile(pathToSave, __result, function(err){
            if(err)
                console.log('failed to save json');
            else
                console.log('done');
        });
    }
});