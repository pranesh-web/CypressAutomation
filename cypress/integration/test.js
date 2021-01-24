describe('MicroServices',function(){
before(function(){
    cy.fixture('endpoint').then(function(data){
        this.data=data
    })
    })
     
    it('sample test API',function(){
        cy.request({
            method:'GET',
            url:this.data.url,
            //url:'https://dev.myspectra.app/myspectra-docs/api/docs/getMetaData?doc-identifier=6b650235-1942-4814-a048-d44c3cb95226',
     
            headers:{
                'Authorization':'Basic YWRtaW46TGljaHRlbmF1Nzc4Mzk='    
            },
            body:{
                "references": [
                    {
                        "column": "ap_name",
                        "table": "application",
                        "value": "AP-000028"
                    }
                ]
            },
        }).then((res)=>{
            expect(res).to.have.property("status",200)
            expect(res.status).to.equals(200)
        })
    })
})