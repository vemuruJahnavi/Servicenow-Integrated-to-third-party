(function executeIntegration() {
    try {
        var restMessage = new sn_ws.RESTMessageV2();
        
        restMessage.setEndpoint('https://<target_instance>.service-now.com/api/now/table/incident');
        
        restMessage.setBasicAuth('username', 'password'); 
        
        restMessage.setHttpMethod('POST');
        
        var payload = {
            short_description: "Integration Incident",
            description: "This incident was created via API integration.",
            urgency: "2",
            impact: "2"
        };
        
        restMessage.setRequestBody(JSON.stringify(payload));
        
        restMessage.setRequestHeader("Content-Type", "application/json");
        
        var response = restMessage.execute();
        
        var httpStatus = response.getStatusCode();
        var responseBody = response.getBody();
        gs.info('HTTP Status: ' + httpStatus);
        gs.info('Response Body: ' + responseBody);
        
    } catch (error) {
        gs.error('Error during integration: ' + error.message);
    }
})();