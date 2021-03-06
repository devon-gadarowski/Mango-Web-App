const express = require('express');
const router = express.Router();
const validator = require('validator');
const isEmpty = require('is-empty');
const jwt = require('jsonwebtoken');

const keys = require('../config/keys');
const Device = require('../models/device');
const User = require('../models/user');

// a device requires:
    // userID it belongs to
    // a name, default "sensor" + next number
    // postFrequency: defaulted to 4 on first registration always

// Right now, duplicate reigstration of the same device is allowed
// Will be able to enforce uniqueness based on what the device posts to the api

// this currently is adding dummy devices and is not using any info from a request body other than ALIAS
// alias is not required, but can be asked from user so the generic name doesn't get confusing
// it responds with the devices _id, which can be sent to the sensor, so it knows who it is.
router.post('/api/addDevice', (req, res) => {
    
    console.log('Express: POST /api/addDevice');

    const authToken = req.cookies.session;
    
    jwt.verify(authToken, keys.secretOrKey, (err, user) => {
        if (err || !user)
            res
                .status(401)
                .json({
                    success: false,
                    errors: "access denied, please log in"
                });
        
        else
        {
            Device.countDocuments({userID : user.id}, (err, count) => {
                if (err)
                {
                    console.log("Could not countDocuments()")
                    console.log(err);
                }
                else
                {
                    const newDevice = new Device({
                        userID : user.id, 
                        postFrequency: 4
                    });

                    // if no alias information is given in req body
					console.log("Found %d devices", count);
					nextNumber = count + 1;
                    if (isEmpty(req.body.alias))
                    {
                        newDevice.alias = "Sensor" + nextNumber;
                    }
                    else
                    {
                        newDevice.alias = req.body.alias;
                    }

                    // will create a new entry in the devices collection, returns success : true and the devices unique ID
                    Device.create(newDevice, (err, device) => {
                        if (err)
                        {
                            console.log(err);
                            res
                                .status(500)
                                .json({
                                    success: false, 
                                    errors: 'failed to register device'});
                        }        
                        else
                        {
                            User.findOneAndUpdate({
                                _id : user.id
                            }, {
                                noOfDevices : nextNumber
                            }, (err, user) => {
                                if (err)
                                    console.log(err);
                            });

                            res
                                .status(200)
                                .json({
                                    success: true,
                                    deviceID : device._id,
									deviceAlias: device.alias
                                });
                        }
                    });
                }
            });
        }
    });
});

module.exports = router;
