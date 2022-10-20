import React from "react";
import Navbar from "../components/Navbar";

export default function EIForm(){
    return(
<>
{/* <header id="clinicHeader">
    <h3 id="clinicHeading">Illinois Early Intervention: Evaluation/Assessment Report</h3>
</header>
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">SECTION 1:  Demographic Information</h5>
</div>

<div class="sideBySideTables">

    <div class="child">

        <table class="table table-striped">

            <tr>
                <td>Child's Name:</td>
                <td><input type="text" value="" name="childName"></td>
            </tr>
            <tr>
                <td>Date of Birth:</td>
                <td><input type="date" value="" name="dateOfBirth"></td>
            </tr>
            <tr>
                <td>Parent's Name:</td>
                <td><input type="text" value="" name="parentName"></td>
            </tr>
            <tr>
                <td>Parent/Guardian:</td>
                <td><input type="text" value="" name="parent"></td>
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
        </table>
    </div>
    <div class="child">
        <table class="table table-striped">
            <tr>
                <td>Early Intervention number:</td>
                <td><input type="number" value="" name="EINumber"></td>
            </tr>
            <tr>
                <td>Chronological Age:</td>
                <td><input type="number" value="" name="chronAge"></td>
            </tr>
            <tr>
                <td>Adjusted Age:</td>
                <td><input type="number" value="" name="chronAge"></td>
            </tr>
            <tr>
                <td>Physician Name:</td>
                <td><input type="text" value="" name="physicianName"></td>
            </tr>
            <tr>
                <td>Language Spoken:</td>
                <td>
                    <div th:insert="fragments :: dropDownMenu(${languages})"  name="languages"></div>
                </td>
                </td>
            </tr>
        </table>

</div>
</div>
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">SECTION 2:  Type of Report</h5>
</div>
<div class="sideBySideTables">
    <div class="child">
        <table class="table table-striped">
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
                <td><input type="date" value="" name="dateOfBirth"></td>
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
                <td>OT</td>
            </tr>
        </table>
    </div>
    <div class="child">
        <table class="table table-striped">
            <tr>
                <td>Assessment/Evaluation Location:</td>
                <td>
                    <div th:insert="fragments :: dropDownMenu(${assessLocation})"  name="assessLocations"></div>
                </td>
            </tr>
            <tr>
                <td>Provider Phone Number:</td>
                <td>217-891-1524</td>
            </tr>
            <tr>
                <td rowspan="2">Assessment(if child already eligible):</td>
                <td rowspan="2">
                    <textarea th:replace="fragments :: textArea" name="EIAssessmentText"></textarea>
                </td>
            </tr>
        </table>
    </div>
</div>
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">SECTION 3:  Referral Information</h5>
</div>
<div class="sideBySideTables">
    <div class="child2">
        <h6 id="visualTracking">Please list reason for referral, who referred to Child & Family Connections, and parent/guardian concerns: </h6>
        <textarea th:replace="fragments :: textArea" name="referralInfo" id="referralInfo"></textarea>
    </div><br>
</div>
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">SECTION 4: Instrument(s) Administered during Evaluation and/or Assessment</h5>
</div>
<div class="sideBySideTables">
    <div class="child2">
        <table class="table table-striped" >
            <tr>
                <td id="bordRight">
                    <p>Title of Instrument Used</p>
                    <input type="text" value="" name="instrumentUsed">
                </td>
                <td id="bordRight" >Developmental Domain Addressed</td>
                <td id="bordRight" >Age Equivalent</td>
                <td >Percent of Delay</td>
            </tr>
            <tr>
                <td id="bordRight" rowspan="3">Peabody Developmental Motor Scales (PDMS 2nd)</td>
                <td id="bordRight">Physical Domain</td>
                <td id="bordRight"><input type="number" value="" name="physDomAge"></td>
                <td th:replace="fragments ::  freeText" name="physDomPercent"></td>
            </tr>
            <tr>

                <td id="bordRight">Grasping</td>
                <td id="bordRight"><input type="number" value="" name="graspAge"></td>
                <td th:replace="fragments ::  freeText" name="graspPercent"></td>
            </tr>
            <tr>

                <td id="bordRight">Visual Motor Integration</td>
                <td id="bordRight"><input type="number" value="" name="visualMotorAge"></td>
                <td th:replace="fragments ::  freeText" name="visualMotorPercent"></td>
            </tr>
            <tr>
                <td id="bordRight">Fine Motor Quotient (FMQ)</td>
                <td id="bordRight">Final Score </td>
                <td id="bordRight"><input type="number" value="" name="visualMotorAge"></td>
                <td th:replace="fragments ::  freeText" name="finalPercentScore"></td>
            </tr>
        </table>
    </div>
</div>
<div class="textDisclaimer">
    <p id="childSensoryDisclaimer">The PDMS-2nd Edition is a criterion-referenced assessment, which measures fine and gross motor skill development from birth through age 6.  Each test item is scored as a 0,1, or 2 with the total raw score for each section calculated by adding these points.  Raw scores are converted to standard scores and age equivalents.  Age Equivalent is the least reliable score.  The Fine Motor Quotient(FMQ) is derived by adding the standard scores from the two fine motor sections.  Scores that fall between 90-110 are considered in the average range for this test, with a standard deviation of 15.  The FMQ measures the child’s ability to stack blocks, place simple shapes in a puzzle, grasping patterns, etc.</p>
</div>

<div class="sectionHeaders">
    <h5 class="childSectionHeaders"> SECTION 5: Evaluation and/or Assessment</h5>
</div>
<div class="childItemsBelowEachOther">
    <div class="child2">
        <h6 id="visualTracking">A. Child’s developmental history and summary of parents’ concerns: </h6>
        <textarea th:replace="fragments :: textArea" name="devHistory" id="devHistory"></textarea>
    </div>

<div class="child2">
    <h6 >B. Summary of medical history:</h6>
    <table class="table table-striped">
        <tr>
            <td>Pregnancy:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>Delivery:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>Child’s health since birth:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>ER visits/Hospitalizations:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>Allergies:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>Diagnosis:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>Specialists:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>Surgeries:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>Medications:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>Hearing:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
        <tr>
            <td>Vision:</td>
            <td th:replace="fragments ::  freeText" ></td>
        </tr>
    </table>
</div>
    <div class="child2">
        <h6 >C. Behavioral Observations of the child:</h6>
        <table class="table table-striped">
            <tr>
                <td>Environment:</td>
                <td th:replace="fragments ::  freeText" ></td>
            </tr>
            <tr>
                <td>State of Regulation/Modulation:</td>
                <td th:replace="fragments ::  freeText" ></td>
            </tr>
            <tr>
                <td>Eye Contact/Communication:</td>
                <td th:replace="fragments ::  freeText" ></td>
            </tr>
        </table>
    </div>
    <div class="child2">
        <h6 >D. Child’s level of functioning in each of the developmental areas tested. (For annual reviews, also include information about the child’s progress towards IFSP outcomes):</h6>
        <table class="table table-striped">
            <tr>
                <td>STRENGTH/MUSCLE TONE/RANGE OF MOTION:</td>
                <td th:replace="fragments ::  freeText" ></td>
            </tr>
            <tr>
                <td>FINE MOTOR/GRASPING:</td>
                <td th:replace="fragments ::  freeText" ></td>
            </tr>
            <tr>
                <td>VISUAL MOTOR INTEGRATION:</td>
                <td th:replace="fragments ::  freeText" ></td>
            </tr>
            <tr>
                <td>FUNCTIONAL VISION:</td>
                <td th:replace="fragments ::  freeText" ></td>
            </tr>
            <tr>
                <td>SELF-HELP SKILLS:</td>
                <td th:replace="fragments ::  freeText" ></td>
            </tr>
            <tr>
                <td>EFFECT OF SENSORY PROCESSING ON DAILY ACTIVITIES:</td>
                <td th:replace="fragments ::  freeText" ></td>
            </tr>
        </table>
    </div>
    <div class="child2">
        <h6 id="visualTracking"> Provide justification for annual redetermination for children not meeting original eligibility criteria:</h6>
        <textarea th:replace="fragments :: textArea" name="devHistory" id="devHistory"></textarea>
    </div>
</div>
<div class="sectionHeaders">
    <h5 class="childSectionHeaders">SECTION 6:  Summary and Interpretation</h5>
</div>

<div class="childItemsBelowEachOther">
    <div class="child2">
    <h6 id="visualTracking">A. Brief summation of the child’s unique strengths and needs, ability to perform functional skills and how the child is able to participate in family routines.  Include statements about the tool's accuracy in portraying child’s development.</h6>
    <textarea th:replace="fragments :: textArea" name="devHistory" id="sectionSixPartA"></textarea>
</div>
    <div class="child2">
        <h6 id="visualTracking">If applicable, recommendations for referrals for additional EI assessments and/or other resources outside of Early Intervention to be discussed at the IFSP meeting.</h6>
        <textarea th:replace="fragments :: textArea" name="devHistory" id="sectionSixPartB"></textarea>
    </div>
    </div>
<div class="sideBySideTables">
    <div class="evaluatorName">
        <select class="evaluatorSelect">
            <option th:each="therapist : ${allTherapists}" th:text="${therapist.key}"></option>
        </select><br>
        <p class="h6">Evaluator Printed Name</p>
    </div>
    <div class="evaluatorName">
        <select class="evaluatorSelect">
            <option >Signature to be determined later  </option>
        </select><br>
        <p class="h6">Evaluator Signature</p>
    </div>
</div>    */}
    </>
  )
    
}