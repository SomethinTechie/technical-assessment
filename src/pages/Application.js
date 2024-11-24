import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useQuery, gql } from '@apollo/client';

// Define your GraphQL query
const GET_USER = gql`
    {
        user {
            name
            surname
            farmer {
                farm {
                    name
                }
            }
        }
    }
`;

const Application = () => {
    const [userData, setUserData] = React.useState(null);
    const [farmName, setFarmName] = React.useState('');

    const { loading, error, data } = useQuery(GET_USER, {
        onCompleted: async data => {
            try {
                // Check if user data already exists in AsyncStorage
                const existingData = await AsyncStorage.getItem('userData');

                if (existingData) {
                    setUserData(JSON.parse(existingData));
                } else {
                    // Save the new data if it does not exist
                    await AsyncStorage.setItem(
                        'userData',
                        JSON.stringify(data.user.farmer)
                    );
                    console.log('Data saved successfully to AsyncStorage');
                }
            } catch (e) {
                console.error('Error handling AsyncStorage data:', e);
            }
        },
    });

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {JSON.stringify(error)}</p>;

    console.log(data.user.farmer.farm.name);

    return (
        <div>
            <div className="application-tabs">
                <Link
                    className="tab"
                    to="/"
                    style={{ color: '#000', textDecoration: 'none' }}
                >
                    <p>X</p>
                    <p className="text16">
                        Save <br /> & Close
                    </p>
                </Link>
                <div className="tab">
                    <p className="text14 active">Complete</p>
                    <p className="text16">1. Credit check</p>
                    <p className="text14">Check if you qulify</p>
                </div>
                <div className="tab">
                    <p className="text14 active">Complete</p>
                    <p className="text16">2. KYC</p>
                    <p className="text14">Check if you qulify</p>
                </div>
                <div className="tab">
                    <p className="text14 active">In Progress</p>
                    <p className="text16">3. Farm Profile</p>
                    <p className="text14">Check if you qulify</p>
                </div>
                <div className="tab">
                    <p className="text14">Up Next</p>
                    <p className="text16">4. Financial Profile</p>
                    <p className="text14">Check if you qulify</p>
                </div>
                <div className="tab">
                    <p className="text14">Last Step</p>
                    <p className="text16">5. Uploads</p>
                    <p className="text14">Supporting Documents</p>
                </div>
            </div>
            <div className="application">
                <div className="application-step next">
                    <p className="text25">3. Farm profile</p>
                    <p className="text14">Give us some basic farm details</p>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox active"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Farm / Company Overview
                                </span>
                                {data && (
                                    <span className="text14 active">
                                        Completed
                                    </span>
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="sect mt10">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Farm Description
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt10">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Machinery & Equipment
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt10">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    3-year Production History
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt10">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    product Plan 2024
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt10">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Risk
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt10">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Irrigation
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt10">
                        <div className="step">
                            <div className="checkbox last"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Customers & Suppliers
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="form">
                    <p className="text25">Farm / Company Overview</p>
                    <form className="mt20">
                        <div className="form-group">
                            <div className="col-md-6 paddingRight">
                                <p className="label">Farm name</p>
                                <input
                                    placeholder="Enter farm name..."
                                    value={
                                        loading
                                            ? 'Loading...'
                                            : data?.user?.farmer?.farm?.name ||
                                              farmName
                                    }
                                    onChange={e => setFarmName(e.target.value)}
                                />
                            </div>
                            <div className="col-md-6">
                                <input placeholder="Farm location" />
                            </div>
                        </div>

                        <div className="form-group mt10">
                            <div className="col-md-12 paddingRight">
                                <p className="text16">
                                    Are you a full-time farmer?
                                </p>
                                <button className="button auto-width active">
                                    Yes
                                </button>
                                <button className="button auto-width">
                                    No
                                </button>
                            </div>
                        </div>

                        <div className="form-group mt10">
                            <div className="col-md-12 paddingRight">
                                <p className="text16">Describe your farm</p>
                                <textarea rows="6"></textarea>
                            </div>
                        </div>

                        <div className="form-group mt10">
                            <div className="col-md-12 paddingRight">
                                <p className="text16">
                                    Is your farm owned or leased?
                                </p>
                                <button className="button auto-width">
                                    Leased
                                </button>
                                <button className="button auto-width">
                                    Owened
                                </button>
                                <button className="button auto-width active">
                                    Both
                                </button>
                            </div>
                        </div>

                        <div className="mt20">
                            <p className="text18">Leading Information</p>
                            <div className="form-group mt20">
                                <div className="col-md-6 paddingRight">
                                    <p className="label">hectares Leased</p>
                                    <input placeholder="" />
                                </div>
                                <div className="col-md-6">
                                    <input placeholder="leanth of lease" />
                                </div>
                            </div>
                            <div className="form-group mt20">
                                <div className="col-md-6 paddingRight">
                                    <p className="label">Owened Land</p>
                                    <input placeholder="" />
                                </div>
                            </div>
                        </div>

                        <div className="mt20">
                            <p className="text18">Irrigation Details</p>
                            <div className="form-group mt20">
                                <div className="col-md-6 paddingRight">
                                    <p className="label">Irrigated Hectares</p>
                                    <input placeholder="" />
                                </div>
                                <div className="col-md-6">
                                    <p className="label">Dry Land Hectares</p>
                                    <input placeholder="" />
                                </div>
                            </div>
                        </div>

                        <Link className="button default mt20" to="/">
                            Next
                        </Link>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Application;
