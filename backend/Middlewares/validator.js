const {check}=require("express-validator")

exports.serverDetails=[

    check('ipAddresses').not().isEmpty(),
    check('providers').not().isEmpty(),
    check('type').not().isEmpty(),
    check('Ram').not().isEmpty(),
    check('Core').not().isEmpty(),
    check('Hdd').not().isEmpty(),
    check('ServerType').not().isEmpty(),
    check('Interfaces').not().isEmpty()

]

exports.servicesDetails=[

    check('Name').not().isEmpty(),
    check('NodeVersion').not().isEmpty(),
    check('Description').not().isEmpty(),
    check('Port').not().isEmpty(),
    check('ServiceType').not().isEmpty(),
    //check('firstCustomer').not().isEmpty()
    

]

exports.telcoProviderDetails=[

    check('Name').not().isEmpty(),
    check('IP').not().isEmpty(),
    check('Port').not().isEmpty(),
    check('User').not().isEmpty(),
    check('Password').not().isEmpty(),
    //check('MediaIP').not().isEmpty(),
    check('SBCIPAndPort').not().isEmpty(),
    check('GatewayIP').not().isEmpty(),
    check('Domain').not().isEmpty(),
    check('AccountManager').not().isEmpty(),
    check('TechnicalManager').not().isEmpty(),
    check('escalation_matrix_name').not().isEmpty(),
    check('escalation_matrix_email').not().isEmpty(),
    check('escalation_matrix_phoneno').not().isEmpty(),
    

]

exports.providerDetails=[

    check('Name').not().isEmpty(),
    check('Initial').not().isEmpty(),
    check('Location').not().isEmpty(),
    check('CurrentDate').not().isEmpty(),
    check('UpdateDate').not().isEmpty(),
    check('AccountManager').not().isEmpty(),
    check('TechnicalContactManager').not().isEmpty()   

]

exports.palatNumberDetails=[

    check('did_number').not().isEmpty(),
    check('channel').not().isEmpty()

]

exports.didDetails=[

    check('listing').not().isEmpty(),
    check('used').not().isEmpty()
    
]

exports.customersDetails=[

    check('Name').not().isEmpty(),
    check('License').not().isEmpty(),
    check('ChannelPartner').not().isEmpty(),
    check('CpassInfo').not().isEmpty(),
    check('AccountManager').not().isEmpty(),
    check('DidCount').not().isEmpty()  

]



exports.user=[
    check('username').not().isEmpty().isString().isString(),
    check('password').not().isEmpty().isLength({ min: 9 })
]