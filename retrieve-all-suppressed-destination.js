var fs = require('fs');
var AWS = require('aws-sdk');
var sesv2 = new AWS.SESV2({
    region: 'us-east-1'
});

async function listAllSuppressedDestinations() {
    var params = {};
    var suppressedList = []
    do {
        let request = sesv2.listSuppressedDestinations(params);
        let data = await request.promise();
        suppressedList.push(...data.SuppressedDestinationSummaries);
        params.NextToken = data.NextToken;
    } while (params.NextToken);

    await fs.promises.writeFile('suppressed-list.json', JSON.stringify(suppressedList, null, 2), 'utf8')
    console.log(`Retrieve ${suppressedList.length} items. See "suppressed-list.json".`);
}

listAllSuppressedDestinations();