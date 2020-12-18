import React, { useState } from "react";

const teams = [
    {
        id: 1,
        thoroughResearch: false,
        designThinkingMethodology: false,
        featureListing: false,
        valueBasedFeatures: false,
        designForUserXP: false,
        prototypeAchieved: false,
        codeArchitecture: false,
        codingLaunched: false,
        oneCoreFeatureCompleted: false,
        twoCoreFeaturesCompleted: false,
        threecoreFeaturesCoded: false,
        fullMVPCompleted: false,
        fullMVPTested: false
    },
    {
        id: 2,
        thoroughResearch: false,
        designThinkingMethodology: false,
        featureListing: false,
        valueBasedFeatures: false,
        designForUserXP: false,
        prototypeAchieved: false,
        codeArchitecture: false,
        codingLaunched: false,
        oneCoreFeatureCompleted: false,
        twoCoreFeaturesCompleted: false,
        threecoreFeaturesCoded: false,
        fullMVPCompleted: false,
        fullMVPTested: false
    },
    {
        id: 3,
        thoroughResearch: false,
        designThinkingMethodology: false,
        featureListing: false,
        valueBasedFeatures: false,
        designForUserXP: false,
        prototypeAchieved: false,
        codeArchitecture: false,
        codingLaunched: false,
        oneCoreFeatureCompleted: false,
        twoCoreFeaturesCompleted: false,
        threecoreFeaturesCoded: false,
        fullMVPCompleted: false,
        fullMVPTested: false
    },
    {
        id: 4,
        thoroughResearch: false,
        designThinkingMethodology: false,
        featureListing: false,
        valueBasedFeatures: false,
        designForUserXP: false,
        prototypeAchieved: false,
        codeArchitecture: false,
        codingLaunched: false,
        oneCoreFeatureCompleted: false,
        twoCoreFeaturesCompleted: false,
        threecoreFeaturesCoded: false,
        fullMVPCompleted: false,
        fullMVPTested: false
    },
]

const Feedback = () => {
    const [teamsData, setTeamsData] = useState(teams);
    const [currentTeam, setCurrentTeam] = useState(0);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(false);

    const handleCheckboxChange = (teamID, propToUpdate) => {
        let newTeamsData = [...teamsData];
        newTeamsData[teamID - 1][propToUpdate] = !newTeamsData[teamID - 1][propToUpdate];
        setTeamsData(newTeamsData);
    }

    const handleSubmit = () => {
        console.log(currentTeam);
        const teamData = teamsData[currentTeam];
        postData(teamData);
    }

    const postData = async (teamData) => {
        try {
            const response = await fetch(`https://v1.nocodeapi.com/essteem/google_sheets/IgoNtzYsdlMmRjbd?tabId=feedback`, {
                method: "post",
                body: JSON.stringify([[
                    teamData.id,
                    teamData.thoroughResearch,
                    teamData.designThinkingMethodology,
                    teamData.featureListing,
                    teamData.valueBasedFeatures,
                    teamData.designForUserXP,
                    teamData.prototypeAchieved,
                    teamData.codeArchitecture,
                    teamData.codingLaunched,
                    teamData.oneCoreFeatureCompleted,
                    teamData.twoCoreFeaturesCompleted,
                    teamData.threecoreFeaturesCoded,
                    teamData.fullMVPCompleted,
                    teamData.fullMVPTested
                ]]),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            console.log("Success:", JSON.stringify(json));
            console.log('form submitted');
            setFormSubmitted(true);
            setFormError(false);
        } catch (error) {
            console.error("Error:", error);
            setFormError(true);
            setFormSubmitted(false);
        }
    }

    return (
        <div className="container justify-content-center w-50">
            <form className="row justify-content-end align-self-center">
                <div className="row w-100 justify-content-center">
                    {
                        !formSubmitted ? (
                            <div className="alert alert-danger" role="alert">
                                Whoops! Something went wrong.
                            </div>)
                            : null
                    }
                    {
                        !formError ? (
                            <div className="alert alert-success" role="alert">
                                Thank you. We apprieciate your feedback.
                            </div>
                        ) : null
                    }

                    <div className="dropdown w-100">
                        <div className="form-group">
                            <label htmlFor="team-selection">Select team</label>
                            <select
                                className="form-control"
                                id="formControlSelectTeam"
                                onChange={(e) => setCurrentTeam(e.target.value - 1)}
                            >
                                {
                                    teamsData.map((team, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={team.id}
                                            >{`Team ${team.id}`}
                                            </option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                </div>
                <div className="row w-100 justify-content-center">
                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Thorough Research</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].thoroughResearch}
                            id={`team${teamsData[currentTeam].id}-thoroughResearch`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'thoroughResearch')}
                        />
                    </div>
                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Design think methodology</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].designThinkingMethodology}
                            id={`team${teamsData[currentTeam].id}-designThinkingMethodology`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'designThinkingMethodology')}
                        />
                    </div>
                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Feature listing</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].featureListing}
                            id={`team${teamsData[currentTeam].id}-featureListing`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'featureListing')}
                        />
                    </div>

                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Value-based features prioritizing</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].valueBasedFeatures}
                            id={`team${teamsData[currentTeam].id}-valueBasedFeatures`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'valueBasedFeatures')}
                        />
                    </div>

                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Design for User XP</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].designForUserXP}
                            id={`team${teamsData[currentTeam].id}-designForUserXP`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'designForUserXP')}
                        />
                    </div>

                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Prototype achieved</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].prototypeAchieved}
                            id={`team${teamsData[currentTeam].id}-prototypeAchieved`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'prototypeAchieved')}
                        />
                    </div>
                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Code Architecture</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].codeArchitecture}
                            id={`team${teamsData[currentTeam].id}-codeArchitecture`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'codeArchitecture')}
                        />
                    </div>

                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Coding launched</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].codingLaunched}
                            id={`team${teamsData[currentTeam].id}-codingLaunched`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'codingLaunched')}
                        />
                    </div>

                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">1 core feature coded</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].oneCoreFeatureCompleted}
                            id={`team${teamsData[currentTeam].id}-oneCoreFeatureCompleted`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'oneCoreFeatureCompleted')}
                        />
                    </div>

                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">2 core feature coded</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].twoCoreFeaturesCompleted}
                            id={`team${teamsData[currentTeam].id}-twoCoreFeaturesCompleted`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'twoCoreFeaturesCompleted')}
                        />
                    </div>
                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">3 core feature coded</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].threecoreFeaturesCoded}
                            id={`team${teamsData[currentTeam].id}-threecoreFeaturesCoded`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'threecoreFeaturesCoded')}
                        />
                    </div>
                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Full MVP coded</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].fullMVPCompleted}
                            id={`team${teamsData[currentTeam].id}-fullMVPCompleted`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'fullMVPCompleted')}
                        />
                    </div>
                    <div className="row w-100" style={{ height: '30px', marginBottom: '8px', borderBottom: '1px solid #ccc' }}>
                        <label className="col">Full MVP tested</label>
                        <input
                            type="checkbox"
                            checked={teamsData[currentTeam].fullMVPTested}
                            id={`team${teamsData[currentTeam].id}-fullMVPTested`}
                            onChange={() => handleCheckboxChange(teamsData[currentTeam].id, 'fullMVPTested')}
                        />
                    </div>
                </div>
                <div className="row w-100 justify-content-end">
                    <button type="button" className="btn btn-primary align-self-end cyan border-0 cyan-hover" onClick={() => handleSubmit()}>Submit Feedback</button>
                </div>
            </form>
        </div>
    )
}


export default Feedback;