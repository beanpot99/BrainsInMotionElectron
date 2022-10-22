import React from "react";
import Navbar from "../components/Navbar";
import classes from "../views/viewStylesheets/EIForm.module.css";
export default function EIForm(){
    return(
<div>
<form >
       <div className='content-wrapper'>
      <Navbar/>
<header className={classes.clinicHeader}>
    <h3 id="clinicHeading">Illinois Early Intervention: Evaluation/Assessment Report</h3>
</header>


<div className={classes.sideBySideTables}>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 1:  Demographic Information</h5>
</div>
    <div className={classes.child}>

        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Child's Name:</td>
                <td><input className="w-100" type="text" value="" name="childName" /></td>
            </tr>
            <tr>
                <td>Date of Birth:</td>
                <td><input className="w-100" type="date" value="" name="dateOfBirth" /></td>
            </tr>
            <tr>
                <td>Parent's Name:</td>
                <td><input className="w-100" type="text" value="" name="parentName" /></td>
            </tr>
            <tr>
                <td>Parent/Guardian:</td>
                <td><input className="w-100" type="text" value="" name="parent" /></td>
            </tr>
            <tr>
                <td>Service Coordinator's Name:</td>
                <td>
                    <select name="therapistChoice">
                        <option value="kristi" name="kristi">Kristi Warren</option>
                        <option value="newTherapist" name="newTherapist">Other people tbd </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>CFC Number:</td>
                <td>
                    <select name="cfcNum">
                        <option  name="cfcOne">Num 1</option>
                        <option name="cfcTwo">Num 2 </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Early Intervention number:</td>
                <td><input className="w-100" type="number" value="" name="EINumber"/></td>
            </tr>
            <tr>
                <td>Chronological Age:</td>
                <td><input className="w-100" type="number" value="" name="chronAge"/></td>
            </tr>
            <tr>
                <td>Adjusted Age:</td>
                <td><input className="w-100" type="number" value="" name="chronAge" /> </td>
            </tr>
            <tr>
                <td>Physician Name:</td>
                <td><input className="w-100" type="text" value="" name="physicianName"/></td>
            </tr>
            <tr>
                <td>Language Spoken:</td>
                <td>
                <input className="w-100" type="text" value="" name="languages"/>
                </td>
                
            </tr>
            </tbody>
        </table>
    </div>
    


<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 2:  Type of Report</h5>
</div>
{/* <div className={classes.sideBySideTables}> */}
    <div className={classes.child}>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Select One (for eligibility determination):</td>
                <td>
                    <select>
                        <option>Evaluation</option>
                        <option>Assessment</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Date of Evaluation/Assessment:</td>
                <td><input type="date" value="" name="dateOfBirth"/></td>
            </tr>
            <tr>
                <td>Provider Name:</td>
                <td>
                    <select name="therapistChoice">
                        <option value="kristi" name="kristi">Kristi Warren</option>
                        <option value="newTherapist" name="newTherapist">Other people tbd </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Provider Discipline:</td>
                <td>
                <select name="providerDiscipline">
                        <option value="OT" >OT</option>
                        <option value="COTA" >COTA </option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Assessment/Evaluation Location:</td>
                <td>
                <input className="w-100" type="text" value="" name="assessLocation"/>
                </td>
            </tr>
            <tr>
                <td>Provider Phone Number:</td>
                <td>*insert user's phone number</td>
            </tr>
            <tr>
                <td rowSpan="2">Assessment (if child already eligible):</td>
                <td rowSpan="2">
                    <textarea className="form-control" rows="3" name="EIAssessmentText"></textarea>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
    
{/* </div> */}
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 3:  Referral Information</h5>
</div>

    <div className={classes.child2}>
        <h6 id="visualTracking">Please list reason for referral, who referred to Child & Family Connections, and parent/guardian concerns: </h6>
        <textarea  className="form-control" rows="3" name="referralInfo" id="referralInfo"></textarea>
    </div><br/>
{/* </div> */}
{/* /////////////////////////////////////////////////////// */}
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 4: Instrument(s) Administered during Evaluation and/or Assessment</h5>
</div>
{/* <div className={classes.sideBySideTables}> */}
    <div className={classes.child2}>
        <table className="table table-striped" >
          <tbody>
            <tr>
                <td className={classes.bordRight}>
                    <p>Title of Instrument Used</p>
                    <input type="text" value="" name="instrumentUsed"/>
                </td>
                <td className={classes.bordRight} >Developmental Domain Addressed</td>
                <td className={classes.bordRight} >Age Equivalent</td>
                <td >Percent of Delay</td>
            </tr>
            <tr>
                <td className={classes.bordRight} rowSpan="3">Peabody Developmental Motor Scales (PDMS 2nd)</td>
                <td className={classes.bordRight}>Physical Domain</td>
                <td className={classes.bordRight}><input type="number" value="" name="physDomAge"/></td>
                <td  name="physDomPercent"><input type="text"></input></td>
            </tr>
            <tr>

                <td className={classes.bordRight}>Grasping</td>
                <td className={classes.bordRight}><input type="number" value="" name="graspAge"/></td>
                <td  name="graspPercent"><input type="text"></input></td>
            </tr>
            <tr>

                <td className={classes.bordRight}>Visual Motor Integration</td>
                <td className={classes.bordRight}><input type="number" value="" name="visualMotorAge"/></td>
                <td  name="visualMotorPercent"><input type="text"></input></td>
            </tr>
            <tr>
                <td className={classes.bordRight}>Fine Motor Quotient (FMQ)</td>
                <td className={classes.bordRight}>Final Score </td>
                <td className={classes.bordRight}><input type="number" value="" name="visualMotorAge"/></td>
                <td  name="finalPercentScore"><input type="text"></input></td>
            </tr>
            </tbody>
        </table>
    </div>
{/* </div> */}
<div className={classes.textDisclaimer}>
    <p className={classes.childSensoryDisclaimer}>The PDMS-2nd Edition is a criterion-referenced assessment, which measures fine and gross motor skill development from birth through age 6.  Each test item is scored as a 0,1, or 2 with the total raw score for each section calculated by adding these points.  Raw scores are converted to standard scores and age equivalents.  Age Equivalent is the least reliable score.  The Fine Motor Quotient(FMQ) is derived by adding the standard scores from the two fine motor sections.  Scores that fall between 90-110 are considered in the average range for this test, with a standard deviation of 15.  The FMQ measures the child’s ability to stack blocks, place simple shapes in a puzzle, grasping patterns, etc.</p>
</div>

<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}> SECTION 5: Evaluation and/or Assessment</h5>
</div>
<div className={classes.childItemsBelowEachOther}>
    <div className={classes.child2}>
        <h6 id="visualTracking">A. Child’s developmental history and summary of parents’ concerns: </h6>
        <textarea className="form-control" rows="3" name="devHistory" id="devHistory"></textarea>
    </div>

<div className={classes.child2}>
    <h6 >B. Summary of medical history:</h6>
    <table className="table table-striped">
      <tbody>
        <tr>
            <td>Pregnancy:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>
        </tr>          
        <tr>
            <td>Delivery:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Child’s health since birth:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>ER visits/Hospitalizations:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Allergies:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Diagnosis:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Specialists:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Surgeries:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Medications:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Hearing:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        <tr>
            <td>Vision:</td>
            <td><textarea className="form-control" rows="2" ></textarea></td>        </tr>
        </tbody>
    </table>
</div>
    <div className={classes.child2}>
        <h6 >C. Behavioral Observations of the child:</h6>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>Environment:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>State of Regulation/Modulation:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>Eye Contact/Communication:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            </tbody>
        </table>
    </div>
    <div className={classes.child2}>
        <h6 >D. Child’s level of functioning in each of the developmental areas tested. (For annual reviews, also include information about the child’s progress towards IFSP outcomes):</h6>
        <table className="table table-striped">
          <tbody>
            <tr>
                <td>STRENGTH/MUSCLE TONE/RANGE OF MOTION:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>FINE MOTOR/GRASPING:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>VISUAL MOTOR INTEGRATION:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>FUNCTIONAL VISION:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>SELF-HELP SKILLS:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            <tr>
                <td>EFFECT OF SENSORY PROCESSING ON DAILY ACTIVITIES:</td>
                <td><textarea className="form-control" rows="2" ></textarea></td>            </tr>
            </tbody>
        </table>
    </div>
    <div className={classes.child2}>
        <h6 id="visualTracking"> Provide justification for annual redetermination for children not meeting original eligibility criteria:</h6>
        <textarea className="form-control" rows="3" name="devHistory" id="devHistory"></textarea>
    </div>
</div>
<div className={classes.sectionHeaders}>
    <h5 className={classes.childSectionHeaders}>SECTION 6:  Summary and Interpretation</h5>
</div>

<div className={classes.childItemsBelowEachOther}>
    <div className={classes.child2}>
    <h6 id="visualTracking">A. Brief summation of the child’s unique strengths and needs, ability to perform functional skills and how the child is able to participate in family routines.  Include statements about the tool's accuracy in portraying child’s development.</h6>
    <textarea className="form-control" rows="3" name="devHistory" id="sectionSixPartA"></textarea>
</div>
    <div className={classes.child2}>
        <h6 id="visualTracking">If applicable, recommendations for referrals for additional EI assessments and/or other resources outside of Early Intervention to be discussed at the IFSP meeting.</h6>
        <textarea className="form-control" rows="3" name="devHistory" id="sectionSixPartB"></textarea>
    </div>
    </div>
<div className={classes.sideBySideDropdowns}>
<div className={classes.evaluatorName}>
    <select className="form-control"  >
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Printed Name</p>
    </div>
    <div className={classes.evaluatorName}>
    <select className="form-control"  >
                            <option value="Kristi Warren" name="kristiTherapistClinic">Kristi Warren</option>
                            <option value="New Therapist" name="newTherapistClinic">New therapist </option>
                        </select><br/>
        <p className="h6">Evaluator Signature</p>
    </div>
</div> 
<div className={classes.sideBySideDropdowns}>
<div className={`form-group text-right ${classes.buttons}`}>
        <div className={classes.submitButton}>
    <input type="submit" value="Submit" className="btn btn-success"/>
      </div>
      <div className={classes.resetButton}>
    <input type="reset" value="Reset" className="btn btn-success"/>
    </div>
    </div>  
    </div>
    </div>
    </div>
</form>
    </div>
  )
    
}