import React from "react";
import { Routes, Route } from "react-router-dom";
import {
FounderCreate, FounderEdit, FounderView, 
Founders, 
FundingRoundCreate, FundingRoundEdit, FundingRoundView, 
FundingRoundTiles, 
InvestorCreate, InvestorEdit, InvestorView, 
Investors
} from "screens";

const Component = (props) => {

    return (
        <Routes>
            

                        
                                                        <Route path="Founders/view/:id" element={<FounderView {...props} title={'View Founder'} />} />
                        <Route path="Founders/edit/:id" element={<FounderEdit {...props} title={'Edit Founder'} />} />
                        <Route path="Founders/create" element={<FounderCreate {...props} title={'Create Founder'} />} />
                                                                        <Route path="/" element={<Founders {...props} title={'Startups'} nolistbar={true} />} />
                                                                    <Route path="FundingRounds/view/:id" element={<FundingRoundView {...props} title={'View FundingRound'} />} />
                        <Route path="FundingRounds/edit/:id" element={<FundingRoundEdit {...props} title={'Edit FundingRound'} />} />
                        <Route path="FundingRounds/create" element={<FundingRoundCreate {...props} title={'Create FundingRound'} />} />
                                            <Route path="Investors/view/:id" element={<InvestorView {...props} title={'View Investor'} />} />
                        <Route path="Investors/edit/:id" element={<InvestorEdit {...props} title={'Edit Investor'} />} />
                        <Route path="Investors/create" element={<InvestorCreate {...props} title={'Create Investor'} />} />

                <Route path="/investors" element={<Investors {...props} title={'Investors'} />} />
                <Route path="/startups" element={<Founders {...props} title={'Startups'} />} />
                <Route path="/rounds/tiles" element={<FundingRoundTiles {...props} title={'Funding Rounds'} />} />
        </Routes>
    )

};

export default Component;