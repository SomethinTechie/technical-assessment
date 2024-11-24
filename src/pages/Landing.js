import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Landing = () => {
    const [userData, setUserData] = React.useState(null);

    useEffect(() => {
        // Fetch and display the stored data from AsyncStorage
        const fetchStoredData = async () => {
            try {
                const storedData = await AsyncStorage.getItem('userData');
                if (storedData) {
                    setUserData(JSON.parse(storedData));
                }
            } catch (e) {
                console.error('Error fetching data from AsyncStorage:', e);
            }
        };

        fetchStoredData();
    }, []);

    return (
        <div className="">
            <div className="space-between">
                <div>
                    <p className="title mt20">Your application checklist</p>
                    <p className="text16 op6">
                        Complete the following to submit an application <br />{' '}
                        You are 82% complete
                    </p>
                </div>
                {userData ? (
                    <Link className="button" to="/application">
                        Continue Application
                    </Link>
                ) : (
                    <Link className="button" to="/application">
                        Start Application
                    </Link>
                )}
            </div>

            <div className="application-steps-container">
                <div className="application-step">
                    {userData && <p className="text14 active">Complete</p>}

                    <p className="text16">1. Credit check</p>
                    <p className="text14">Check if you qulify</p>

                    {userData && (
                        <>
                            <div className="mt20">
                                <div className="sect">
                                    <span className="text14">Score</span>
                                </div>
                                <div className="sect mt10">
                                    <span className="text30">642</span>
                                </div>
                            </div>

                            <div className="mt20">
                                <div className="sect">
                                    <span className="text14">Status</span>
                                </div>
                                <div className="sect mt10">
                                    <span className="text30">High Risk</span>
                                </div>
                            </div>

                            <div className="mt20">
                                <div className="sect">
                                    <span className="text14">Issue 1</span>
                                </div>
                                <div className="sect">
                                    <span className="text16">
                                        Too many inquiries
                                    </span>
                                </div>
                            </div>

                            <div className="mt20">
                                <div className="sect">
                                    <span className="text14">Issue 2</span>
                                </div>
                                <div className="sect">
                                    <span className="text16">
                                        Overdrown Accounts
                                    </span>
                                </div>
                            </div>

                            <div className="mt20">
                                <div className="sect">
                                    <span className="text14">Issue 3</span>
                                </div>
                                <div className="sect">
                                    <span className="text16">2 Judgements</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
                <div className="application-step">
                    {userData && <p className="text14 active">Complete</p>}
                    <p className="text16">2. KYC</p>
                    <p className="text14">Check if you qulify</p>

                    <div className="sect mt20">
                        <div className="step">
                            <div
                                className={`checkbox ${userData && 'active'}`}
                            ></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Applicant Details
                                </span>
                                {userData && (
                                    <p className="text14 active">Complete</p>
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div
                                className={`checkbox ${userData && 'active'}`}
                            ></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Company Details
                                </span>
                                {userData && (
                                    <p className="text14 active">Complete</p>
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div
                                className={`checkbox ${userData && 'active'}`}
                            ></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Director Details
                                </span>
                                {userData && (
                                    <p className="text14 active">Complete</p>
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div
                                className={`checkbox ${userData && 'active'}`}
                            ></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Banking Details
                                </span>
                                {userData && (
                                    <p className="text14 active">Complete</p>
                                )}
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div
                                className={`checkbox last ${userData && 'active'}`}
                            ></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    3-year Production History
                                </span>
                                {userData && (
                                    <p className="text14 active">Complete</p>
                                )}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="application-step">
                    {userData && <p className="text14 active">In Progress</p>}
                    <p className="text16">3. Farm Profile</p>
                    <p className="text14">Check if you qulify</p>

                    <div className="sect mt10">
                        <div className="step">
                            <div
                                className={`checkbox ${userData && 'active'}`}
                            ></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Farm / Company Overview
                                </span>
                                {userData && (
                                    <p className="text14 active">Complete</p>
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

                <div className="application-step next">
                    <p className="text14">Up Next</p>
                    <p className="text16">4. Financial Profile</p>
                    <p className="text14">Check if you qulify</p>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Historical performance
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Cashflow - Revenue
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Cashflow Production
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Cashflow Operational
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Assets
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    CAPEX
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox last"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Funding Ask
                                </span>
                            </span>
                        </div>
                    </div>
                </div>

                <div className="application-step next">
                    <p className="text14">Last Step</p>
                    <p className="text16">5. Uploads</p>
                    <p className="text14">Supporting Documents</p>

                    <div className="step mt20">
                        <div className="checkbox"></div>
                        <span style={{ width: '150px' }}>
                            <span className="text16 full-width-30">
                                COR 14.3
                            </span>
                        </span>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    2022 AFS
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    2023 AFS
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    2024 AFS
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    6 Month Bank Statement
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Directors ID's
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Applicant ID
                                </span>
                            </span>
                        </div>
                    </div>

                    <div className="sect mt20">
                        <div className="step">
                            <div className="checkbox last"></div>
                            <span style={{ width: '150px' }}>
                                <span className="text16 full-width-30">
                                    Water Right
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Landing;
