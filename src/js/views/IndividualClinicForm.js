import React from "react";

export default function IndividualClinicForm({clinicData}){
    return(
        <>
    {/* <form  > */}
       <div className='content-wrapper'>
      {/* <Navbar/> */}
      
<header className={classes.clinicHeader}>
    <h3 id="clinicHeading">Initial Occupational Therapy Evaluation</h3>
    </header>

    <div className={classes.sideBySideTables}>
        <div className={classes.child}>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>Date of Eval:</td>
                    <td>{clinicData.dateOfEval}</td>
                </tr>
                <tr>
                    <td>Patient Name:</td>
                    <td>{clinicData.patientName}</td>
                </tr>
                <tr>
                    <td>Address:</td>
                    <td>{clinicData.address}</td>
                </tr>
                <tr>
                    <td>Parent/Guardian:</td>
                    <td>{clinicData.parentName}</td>
                </tr>
                <tr>
                    <td>Diagnosis:</td>
                    <td>{clinicData.diagnosis}</td>
                </tr>
                <tr>
                    <td>Therapist:</td>
                    <td>{clinicData.therapist}</td>
                </tr>
                </tbody>
            </table>
        </div>
        <div className={classes.child}>
            <table className="table table-striped">
                <tbody>
                <tr>
                    <td>DOB:</td>
                    <td>{clinicData.DOB}</td>
                </tr>
                <tr>
                    <td>Phone:</td>
                    <td>{clinicData.clientPhone}</td>
                </tr>
                <tr>
                    <td>Physician:</td>
                    <td>{clinicData.physicianName}</td>
                </tr>
                <tr>
                    <td>Payer:</td>
                    <td>{clinicData.payer}</td>
                </tr>
                <tr>
                    <td>NPI:</td>
                    <td>1114051018</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>REFERRAL INFORMATION/PARENT CONCERNS:</h5>
</div>
    <div className={classes.sideBySideTables}>
            <div className={classes.child2}>
            {clinicData.referral}
            </div><br/>
    </div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>MEDICAL AND DEVELOPMENTAL HISTORY:</h5>
</div>
    <div className={classes.sideBySideTables}>
        <div className={classes.child2}>
        {clinicData.medicalHistory}            
        </div>
        <br/>
        </div>
    </div>
    <br/>
    <br/>
    <br/>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>ASSESSMENT INFORMATION:</h5>
</div>
<div className={classes.verticalTables}>
    <div className={classes.child}>
        <table className="table table-striped">
            <tbody>
            <tr>
                <td>Assessment Method:</td>
                <td>{clinicData.assessmentMethod}</td>
            </tr>
            <tr>
                <td>Behavioral Observations:</td>
                <td>{clinicData.behavioralObservations}</td>
            </tr>
            <tr>
                <td>Fine Motor Skills:</td>
                <td>{clinicData.fineMotorSkills}</td>
            </tr>
            <tr>
                <td>Strength/Range of Motion:</td>
                <td>{clinicData.strengthRangeMotion}</td>
            </tr>
            <tr>
                <td>Communication Status:</td>
                <td>{clinicData.communicationStatus}</td>
            </tr>
            <tr>
                <td>Education Level:</td>
                <td>{clinicData.educationLevel}</td>
            </tr>
            
            <tr>
                 <td>Activities of Daily Living:</td>
                <td>{clinicData.activitiesDailyLiving}</td>
            </tr>
            </tbody>
        </table>
    </div>
    
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>NEUROMOTOR/PRIMITIVE REFLEXES:</h5>
</div>
<div className={classes.sideBySideTables}>
<div className={classes.child2}>
    <table className="table table-striped">
        <tbody>
            <tr>
                <td>
                Fear Paralysis Reflex
                </td>
                <td >{clinicData.fearParalysis}</td> 
            
        </tr>
        
        <tr>
            <td>Moro Reflex</td>
            <td >{clinicData.moro}</td> 
        </tr>
        <tr>
            <td>Asymmetrical Tonic Neck Reflex (ATNR)</td>
            <td >{clinicData.atnr}</td> 
        </tr>
        <tr>
            <td>Symmetrical Tonic Neck Reflex (STNR)</td>
            <td >{clinicData.stnr}</td> 
        </tr>
        <tr>
            <td>Tonic Neck Reflex</td>
            <td >{clinicData.tonicNeck}</td> 
        </tr>
        <tr>
            <td>Spinal Galant Reflex</td>
            <td >{clinicData.spinalGalant}</td> 
        </tr>
        <tr>
            <td>Palmar Reflex</td>
            <td >{clinicData.palmar}</td> 
        </tr>
        </tbody>
    </table>
</div>
</div>

<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SENSORY PROCESSING SKILLS: Child Sensory Profile 2:</h5>
</div>
<div className={classes.sideBySideTables}>
<div className={classes.child2}>
    <table className="table table-striped">
        <tbody>
            <tr>
                <td className="font-weight-bold">Category</td>
                <td className="font-weight-bold">Raw Score</td>
                <td>.</td>
                <td className="font-weight-bold">Summary Score</td>
            </tr>
            <tr>
                <td>
                Seeking/Seeker
                </td>
                <td >{clinicData.seekingSeeker}</td> 
                <td>/95</td>
                <td>{clinicData.seekingSeekerSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Avoiding/Avoider
                </td>
                <td >{clinicData.avoidingAvoider}</td> 
                <td>/100</td>
                <td>{clinicData.avoidingAvoiderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Sensitivity/Sensory
                </td>
                <td >{clinicData.sensitivitySensor}</td> 
                <td>/95</td>
                <td>{clinicData.sensitivitySensorSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Registration/Bystander
                </td>
                <td >{clinicData.registrationBystander}</td> 
                <td>/110</td>
                <td>{clinicData.registrationBystanderSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Auditory
                </td>
                <td >{clinicData.auditory}</td> 
                <td>/40</td>
                <td>{clinicData.auditorySummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Visual
                </td>
                <td >{clinicData.visual}</td> 
                <td>/30</td>
                <td>{clinicData.visualSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Touch
                </td>
                <td >{clinicData.touch}</td> 
                <td>/55</td>
                <td>{clinicData.touchSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Movement
                </td>
                <td >{clinicData.movement}</td> 
                <td>/40</td>
                <td>{clinicData.movementSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Body Position
                </td>
                <td >{clinicData.bodyPosition}</td> 
                <td>/40</td>
                <td>{clinicData.bodyPositionSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Oral
                </td>
                <td >{clinicData.oral}</td> 
                <td>/50</td>
                <td>{clinicData.oralSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Conduct
                </td>
                <td >
                    <input
                        type="number"
                        value={conduct}
                        onChange={(e)=>setConduct(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/45</td>
                <td>{conductSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Social Emotional
                </td>
                <td >
                    <input
                        type="number"
                        value={socialEmotional}
                        onChange={(e)=>setSocialEmotional(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/70</td>
                <td>{socialEmotionalSummaryScore}</td>
            
            </tr>
            <tr>
                <td>
                Attentional
                </td>
                <td >
                    <input
                        type="number"
                        value={attentional}
                        onChange={(e)=>setAttentional(e.target.value)}
                        
                    />
                    
                </td> 
                <td>/50</td>
                <td>{attentionalSummaryScore}</td>
            
            </tr>
        
        </tbody>
    </table>
</div>
</div>
{/* /////////////////////////////////////////////////////////////// */}
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>VISUAL MOTOR/VISUAL PERCEPTION</h5>
    
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>

        <h6 id="visualTracking">Visual Tracking:</h6>
    <textarea value={visualTracking} onChange={(event)=>setVisualTracking(event.target.value)} className={`form-control ${classes.textArea}`} rows="3"></textarea>
    </div><br/>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>
        <h6 id="visualSaccades">Visual Saccades:</h6>
        <textarea value={visualSaccades} onChange={(event)=>setVisualSaccades(event.target.value)} className={`form-control ${classes.textArea}`} rows="3"></textarea>
    </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.child2}>
        <h6 id="convergenceDivergence">Convergence/Divergence:</h6>
        <textarea value={convergenceDivergence} onChange={(event)=>setConvergenceDivergence(event.target.value)} className={`form-control ${classes.textArea}`} rows="3"></textarea>
    </div>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SUMMARY/PLAN:</h5>
</div>
<div className={classes.sideBySideTables}>
<div className={classes.child2}>
    <table className="table">
        <tbody>
        <tr>
            <td>Frequency of OT:</td>
            <td>
                   <Select
                    className="dropdown"
                    placeholder={<p className={classes.placeholder}>Select</p>}
                    value={
                      frequencyOT
                        ? frequencyOptions.filter((obj) =>
                        frequencyOT.includes(obj.value)
                          )
                        : ""
                    }
                    options={frequencyOptions}
                    onChange={handleAssessmentMethod}
                    isOptionDisabled={(option) => option.disabled}
                    required
                  />
                    <br/>
                </td>
        </tr>
        <tr>
            <td>Duration of OT:</td>
            <td>
                <select className="form-control" value={durationOT} onChange={(e)=>setDurationOT(e.target.value)} >
                    <option value="3 months">3 Months</option>
                    <option value="6 months">6 Months</option>
            </select>
            </td>
        </tr>
        </tbody>
    </table>
</div>
</div>
{/* //////////////////////////////////////////////////////////////////////////////// */}
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>OCCUPATIONAL THERAPY GOALS:</h5>
</div>
<div className={classes.sideBySideTables2}>
    <div className={classes.child2}>
        <table className="table table-striped">
            <tbody>
            <tr>
                <td>1.</td>
                <td>
                    <input type="text" value={goalOne} onChange={(e)=>setGoalOne(e.target.value)} className={classes.therapyGoals}/>
                </td>
            </tr>
            <tr>
                <td>2.</td>
                <td>
                <input type="text" value={goalTwo} onChange={(e)=>setGoalTwo(e.target.value)} className={classes.therapyGoals}/>
                </td>
            </tr>
            <tr>
                <td>3.</td>
                <td>
                <input type="text" value={goalThree} onChange={(e)=>setGoalThree(e.target.value)} className={classes.therapyGoals}/>
                </td>
            </tr>
            <tr>
                <td>4.</td>
                <td>
                <input type="text" value={goalFour} onChange={(e)=>setGoalFour(e.target.value)} className={classes.therapyGoals}/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</div>
<div className={classes.sideBySideTables}>
    <div className={classes.evaluatorName}>
    <select className="form-control" value={therapistName} onChange={(e)=>setTherapistName(e.target.value)}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Printed Name</p>
    </div>
    <div className={classes.evaluatorName}>
    <select className="form-control" value={therapistSignature} onChange={(e)=>setTherapistSignature(e.target.value)}>
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Signature</p>
    </div>
</div>
    <div className={`form-group text-right ${classes.buttons}`}>
        <div className={classes.submitButton}>
    <input type="submit" value="Submit" className="btn btn-success"/>
      </div>
      <div className={classes.resetButton}>
    <input type="reset" value="Reset" className="btn btn-success"/>
    </div>
    </div>
{/* </form> */}
    </>
    )
}